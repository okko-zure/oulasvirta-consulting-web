/**
 * Shared types of the content model.
 *
 * All visible text of the website lives in `src/content/`. Every piece of text
 * exists in all supported languages side by side:
 *
 *   title: { fi: '…', en: '…', es: '…' }
 *
 * TypeScript refuses to compile when a language is missing, so the three
 * language versions can never drift apart structurally.
 *
 * Simple inline markup is allowed in text that is rendered as rich text
 * (headings and a few short texts):
 *   - `\n` is a line break
 *   - `*words*` are emphasised (rendered as <em>, styled gold in headings)
 */

export const locales = ['fi', 'en', 'es'] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = 'fi';

export function isLocale(value: string): value is Locale {
  return (locales as readonly string[]).includes(value);
}

/** A value that exists once per language. */
export type Localized<T = string> = Record<Locale, T>;

/** The options of the topic selector in the contact form. */
export type ContactTopic = 'question' | 'eu-aml' | 'partnership' | 'mlro' | 'sanctions' | 'training';

/** A link that jumps to the contact form and preselects a topic. */
export interface ContactCta {
  label: Localized;
  topic: ContactTopic;
}

/** A link to another website. `href` may differ per language (for example EUR-Lex). */
export interface ExternalLink {
  href: string | Localized;
  label: Localized;
}

/** The numbered label and short note above a section. */
export interface SectionHeadingContent {
  eyebrow: Localized;
  note: Localized;
}
