"""Render the owner's archived articles in the three existing site languages."""
from html import escape
import json
from pathlib import Path
import re

ROOT = Path(__file__).resolve().parents[1]
LOCALES = ("fi", "en", "es")
LABELS = {
    "fi": {"back": "Kaikki kirjoitukset", "archive": "KIRJOITUSARKISTO", "note": "Vuonna 2024 julkaistu kirjoitus. Teksti on säilytetty alkuperäisessä muodossaan, eikä sitä ole päivitetty kuvaamaan nykyistä sääntelyä.", "contact": "Keskustellaan yrityksenne tarpeista", "published": "Julkaistu"},
    "en": {"back": "All articles", "archive": "ARTICLE ARCHIVE", "note": "An article originally published in 2024. The original text has been retained and has not been updated to reflect current regulation. This is an English translation.", "contact": "Let’s discuss your business needs", "published": "Published"},
    "es": {"back": "Todos los artículos", "archive": "ARCHIVO DE ARTÍCULOS", "note": "Artículo publicado originalmente en 2024. Se conserva el texto original, sin actualizarlo a la normativa vigente. Esta es una traducción al español.", "contact": "Hablemos de las necesidades de su empresa", "published": "Publicado"},
}

def route(slug, locale):
    return ("/" if locale == "fi" else f"/{locale}/") + f"kirjoituksia/{slug}/"

def build_articles():
    articles = json.loads((ROOT / "src/articles.json").read_text())
    for index, locale in enumerate(LOCALES):
        home = "/" if locale == "fi" else f"/{locale}/"
        homepage = (ROOT / "dist" / home.lstrip("/") / "index.html").read_text()
        for article in articles:
            title, description = article["title"][index], article["description"][index]
            head = homepage.split('<main id="sisalto">', 1)[0]
            footer = '<footer' + homepage.split('<footer', 1)[1]
            head = re.sub(r'<title>.*?</title>', '<title>' + escape(title) + ' | Oulasvirta Consulting</title>', head)
            head = re.sub(r'(<meta name="description" content=")[^"]*', lambda _: '<meta name="description" content="' + escape(description, quote=True), head)
            head = re.sub(r'href="#(?!sisalto")[^"]*"', lambda m: 'href="' + home + m.group()[6:], head)
            footer = re.sub(r'href="#[^"]*"', lambda m: 'href="' + home + m.group()[6:], footer)
            for lang in LOCALES:
                lang_home = "/" if lang == "fi" else f"/{lang}/"
                article_route = route(article["slug"], lang)
                head = head.replace(f'hreflang="{lang}" href="{lang_home}"', f'hreflang="{lang}" href="{article_route}"')
                head = head.replace(f'href="{lang_home}" lang="{lang}"', f'href="{article_route}" lang="{lang}"')
            head = head.replace('hreflang="x-default" href="/"', 'hreflang="x-default" href="' + route(article["slug"], "fi") + '"')
            body = []
            for block in article["blocks"]:
                tag = block["type"]
                if tag in ("p", "h2"):
                    body.append(f'<{tag}>' + escape(block["text"][index]) + f'</{tag}>')
                elif tag == "ul":
                    body.append('<ul>' + ''.join('<li>' + escape(item[index]) + '</li>' for item in block["items"]) + '</ul>')
                elif tag == "link":
                    body.append('<p><a href="' + escape(block["href"], quote=True) + '" target="_blank" rel="noopener noreferrer">' + escape(block["text"][index]) + ' ↗</a></p>')
                else:
                    raise ValueError(f"Unsupported article block: {tag}")
            labels = LABELS[locale]
            main = f'''<main id="sisalto" class="article-page"><article class="wrap article-layout">
              <a class="text-link article-back" href="{home}#kirjoituksia">← {labels['back']}</a>
              <header class="article-heading"><p class="eyebrow">{labels['archive']}</p><h1>{escape(title)}</h1><p class="article-meta">Katja Oulasvirta · {labels['published']} <time datetime="{article['published']}">{escape(article['date_label'][index])}</time></p></header>
              <p class="article-archive-note">{labels['note']}</p><div class="article-body">{''.join(body)}</div>
              <div class="article-contact"><a class="button button-dark" href="{home}#yhteydenottolomake">{labels['contact']} ↗</a></div>
            </article></main>'''
            destination = ROOT / "dist" / route(article["slug"], locale).lstrip("/") / "index.html"
            destination.parent.mkdir(parents=True, exist_ok=True)
            destination.write_text(head + main + footer)
    print(json.dumps({"articles": len(articles), "article_pages": len(articles) * len(LOCALES)}))

if __name__ == "__main__":
    build_articles()
