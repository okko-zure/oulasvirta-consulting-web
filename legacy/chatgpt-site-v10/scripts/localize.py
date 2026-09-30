"""Build the three static language versions without runtime translation."""
from html import escape
from html.parser import HTMLParser
import json
from pathlib import Path
import re
from urllib.parse import quote, unquote

ROOT = Path(__file__).resolve().parents[1]
SOURCE = ROOT / "src/index.fi.html"
COMMON = {"Oulasvirta", "CONSULTING", "Katja", "Katja Oulasvirta", "Oulasvirta Consulting",
          "Laura Pohjonen", "Daniel Amsler", "FI", "EN", "ES", "20+", "2027", "10.07.",
          "01", "02", "03", "04", "1", "2", "katja@oulasvirta.com", "+358 50 486 7880",
          "© 2026 Oulasvirta Consulting", "11.9.2024", "14.8.2024"}

def translatable(value):
    return bool(re.search(r"[A-Za-zÀ-ÿ]", value)) and value not in COMMON

class Inventory(HTMLParser):
    def __init__(self):
        super().__init__(convert_charrefs=True)
        self.values = []
    def add(self, value):
        if translatable(value) and value not in self.values:
            self.values.append(value)
    def handle_data(self, data):
        self.add(data.strip())
    def handle_starttag(self, tag, attrs):
        attrs = dict(attrs)
        for key in ("aria-label", "alt"):
            if attrs.get(key): self.add(attrs[key])
        if tag == "meta" and attrs.get("name") == "description":
            self.add(attrs["content"])

class Localizer(HTMLParser):
    def __init__(self, locale, translations):
        super().__init__(convert_charrefs=True)
        self.locale, self.translations, self.output, self.quote_tags = locale, translations, [], []
    def tr(self, value):
        if not translatable(value): return value
        return self.translations[value][0 if self.locale == "en" else 1]
    def handle_decl(self, value): self.output.append(f"<!{value}>")
    def handle_comment(self, value): self.output.append(f"<!--{value}-->")
    def handle_data(self, data):
        stripped = data.strip()
        if not stripped:
            self.output.append(data)
            return
        before = data[:len(data) - len(data.lstrip())]
        after = data[len(data.rstrip()):]
        self.output.append(before + escape(self.tr(stripped), quote=False) + after)
    def handle_starttag(self, tag, attributes):
        attrs = dict(attributes)
        if tag == "html": attrs["lang"] = self.locale
        if tag == "input" and attrs.get("name") == "language":
            attrs["value"] = self.locale.upper()
        if tag == "input" and attrs.get("name") == "_next":
            attrs["value"] = attrs["value"].replace("/?contact=sent", "/" + self.locale + "/?contact=sent")
        for key in ("aria-label", "alt"):
            if attrs.get(key): attrs[key] = self.tr(attrs[key])
        if tag == "meta" and attrs.get("name") == "description": attrs["content"] = self.tr(attrs["content"])
        if tag == "a" and attrs.get("hreflang") in ("fi", "en", "es"):
            attrs.pop("aria-current", None)
            if attrs["hreflang"] == self.locale: attrs["aria-current"] = "page"
        href = attrs.get("href", "")
        if href.startswith("/kirjoituksia/"):
            attrs["href"] = "/" + self.locale + href
        if href == "/tietosuoja/":
            attrs["href"] = "/" + self.locale + "/privacy/" if self.locale == "en" else ("/" + self.locale + "/privacidad/" if self.locale == "es" else href)
        if "eur-lex.europa.eu" in href:
            attrs["href"] = href.replace("locale=fi", "locale=" + self.locale)
        if href.startswith("mailto:") and "?subject=" in href:
            subject = unquote(href.split("?subject=", 1)[1])
            mapped = SUBJECTS[self.locale].get(subject)
            if mapped is None: raise ValueError(f"Untranslated email subject: {subject}")
            attrs["href"] = href.split("?", 1)[0] + "?subject=" + quote(mapped)
        if tag == "blockquote":
            tag = "p"
            self.quote_tags.append(True)
            attrs["class"] = "testimonial-summary"
            attrs["lang"] = self.locale
        attr_text = "".join(" " + key + ("=\"" + escape(value, quote=True) + "\"" if value is not None else "") for key, value in attrs.items())
        self.output.append("<" + tag + attr_text + ">")
    def handle_endtag(self, tag):
        if tag == "blockquote":
            self.quote_tags.pop()
            tag = "p"
        self.output.append("</" + tag + ">")

SUBJECTS = {
 "en": {
  "Rahapeliyhtiön AML-tarpeet":"AML services for a gambling operator",
  "Tilitoimiston tai tilintarkastusyhteisön AML-tarpeet":"AML services for an accounting or audit firm",
  "EU AML -valmistautuminen":"EU AML readiness",
  "AML-kumppanuus":"Ongoing AML partnership",
  "MLRO ja muutosjohtaminen":"MLRO and change leadership",
  "AML-asiantuntijapalvelut":"AML advisory services",
  "Pakotteiden noudattaminen":"Sanctions compliance",
  "Compliance ja riskienhallinta":"Compliance and risk management",
  "Koulutustarve":"Training enquiry",
  "Tarjouspyyntö – AML-palvelut":"Proposal request – AML services"
 },
 "es": {
  "Rahapeliyhtiön AML-tarpeet":"Servicios de prevención del blanqueo para un operador de juego",
  "Tilitoimiston tai tilintarkastusyhteisön AML-tarpeet":"Servicios de prevención del blanqueo para asesorías contables y firmas de auditoría",
  "EU AML -valmistautuminen":"Preparación para la reforma europea de prevención del blanqueo",
  "AML-kumppanuus":"Colaboración continua en prevención del blanqueo",
  "MLRO ja muutosjohtaminen":"MLRO y gestión del cambio",
  "AML-asiantuntijapalvelut":"Asesoramiento en prevención del blanqueo",
  "Pakotteiden noudattaminen":"Cumplimiento de sanciones",
  "Compliance ja riskienhallinta":"Cumplimiento normativo y gestión de riesgos",
  "Koulutustarve":"Consulta sobre formación",
  "Tarjouspyyntö – AML-palvelut":"Solicitud de propuesta – prevención del blanqueo"
 }
}

def build():
    source = SOURCE.read_text()
    inventory = Inventory(); inventory.feed(source)
    translations = json.loads((ROOT / "src/translations.json").read_text())
    missing = [v for v in inventory.values if v not in translations]
    if missing: raise ValueError("Missing translations: " + json.dumps(missing, ensure_ascii=False))
    for value in inventory.values:
        assert len(translations[value]) == 2 and all(translations[value]), value
    (ROOT / "dist/index.html").write_text(source)
    for locale in ("en", "es"):
        parser = Localizer(locale, translations); parser.feed(source)
        destination = ROOT / "dist" / locale / "index.html"
        destination.parent.mkdir(exist_ok=True)
        destination.write_text("".join(parser.output))
    print(json.dumps({"languages":["fi", "en", "es"], "translated_segments":len(inventory.values)}))
    from build_articles import build_articles
    build_articles()
    from build_privacy import build_privacy
    build_privacy()

if __name__ == "__main__":
    import sys
    if "--inventory" in sys.argv:
        parser = Inventory(); parser.feed(SOURCE.read_text())
        print(json.dumps(parser.values, ensure_ascii=False, indent=2))
    else:
        build()
