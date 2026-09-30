"""Render the privacy notice in Finnish, English and Spanish."""
from html import escape
import json
from pathlib import Path
import re

ROOT = Path(__file__).resolve().parents[1]
ROUTES = {"fi": "/tietosuoja/", "en": "/en/privacy/", "es": "/es/privacidad/"}
HOME = {"fi": "/", "en": "/en/", "es": "/es/"}

def build_privacy():
    content = json.loads((ROOT / "src/privacy.json").read_text())
    for locale in ("fi", "en", "es"):
        homepage = (ROOT / "dist" / HOME[locale].lstrip("/") / "index.html").read_text()
        head = homepage.split('<main id="sisalto">', 1)[0]
        footer = '<footer' + homepage.split('<footer', 1)[1]
        data = content[locale]
        head = re.sub(r'<title>.*?</title>', '<title>' + escape(data["title"]) + ' | Oulasvirta Consulting</title>', head)
        head = re.sub(r'(<meta name="description" content=")[^"]*', '<meta name="description" content="' + escape(data["description"], quote=True), head)
        for lang in ("fi", "en", "es"):
            head = head.replace(f'hreflang="{lang}" href="{HOME[lang]}"', f'hreflang="{lang}" href="{ROUTES[lang]}"')
            head = head.replace(f'href="{HOME[lang]}" lang="{lang}"', f'href="{ROUTES[lang]}" lang="{lang}"')
        head = head.replace('hreflang="x-default" href="/"', 'hreflang="x-default" href="' + ROUTES["fi"] + '"')
        head = re.sub(r'href="#([^\"]+)"', lambda m: 'href="' + HOME[locale] + '#' + m.group(1) + '"', head)
        footer = re.sub(r'href="#([^\"]+)"', lambda m: 'href="' + HOME[locale] + '#' + m.group(1) + '"', footer)
        blocks = []
        for section in data["sections"]:
            paragraphs = ''.join('<p>' + paragraph + '</p>' for paragraph in section["paragraphs"])
            blocks.append('<section class="privacy-section"><h2>' + escape(section["heading"]) + '</h2>' + paragraphs + '</section>')
        main = '<main id="sisalto" class="privacy-page"><article class="wrap privacy-layout"><a class="text-link article-back" href="' + HOME[locale] + '">← ' + escape(data["back"]) + '</a><header class="article-heading"><p class="eyebrow">' + escape(data["eyebrow"]) + '</p><h1>' + escape(data["title"]) + '</h1><p class="article-meta">Oulasvirta Consulting · ' + escape(data["updated"]) + '</p></header><div class="privacy-body">' + ''.join(blocks) + '</div></article></main>'
        destination = ROOT / "dist" / ROUTES[locale].lstrip("/") / "index.html"
        destination.parent.mkdir(parents=True, exist_ok=True)
        destination.write_text(head + main + footer)
    print(json.dumps({"privacy_pages": 3}))

if __name__ == "__main__":
    build_privacy()
