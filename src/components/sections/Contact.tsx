import type { ContactContent } from '@/content/contact';
import { site } from '@/content/site';
import type { Locale } from '@/content/types';
import { Rich } from '@/components/ui/Rich';
import { homePath, privacyPath } from '@/lib/routes';
import styles from './Contact.module.css';
import { ContactForm, type ContactFormText } from './ContactForm';

interface ContactProps {
  content: ContactContent;
  locale: Locale;
}

/** Contact details and the enquiry form. */
export function Contact({ content, locale }: ContactProps) {
  const { form } = content;
  // The browser only receives the texts of the current language.
  const text: ContactFormText = {
    title: form.title[locale],
    intro: form.intro[locale],
    labels: {
      name: form.labels.name[locale],
      company: form.labels.company[locale],
      optional: form.labels.optional[locale],
      email: form.labels.email[locale],
      topic: form.labels.topic[locale],
      message: form.labels.message[locale],
      honeypot: form.labels.honeypot[locale],
    },
    hint: form.hint[locale],
    topics: form.topics.map((topic) => ({ value: topic.value, label: topic.label[locale] })),
    privacy: form.privacy.text[locale],
    privacyLinkLabel: form.privacy.linkLabel[locale],
    privacyHref: privacyPath[locale],
    submit: form.submit[locale],
    emailOption: { label: form.emailOption.label[locale], note: form.emailOption.note[locale] },
    messages: {
      pending: form.messages.pending[locale],
      success: form.messages.success[locale],
      invalid: form.messages.invalid[locale],
    },
  };

  return (
    <section className={styles.contactSection} id="yhteys" aria-labelledby="contact-title">
      <div className={`wrap section ${styles.contactGrid}`}>
        <div className={styles.contactCopy}>
          <p className="eyebrow">{content.eyebrow[locale]}</p>
          <h2 id="contact-title">
            <Rich text={content.title[locale]} />
          </h2>
          <p className="lead">{content.lead[locale]}</p>
          <p>{content.text[locale]}</p>
          <address>
            <strong>{site.person.name}</strong>
            <span>{site.name}</span>
            <a href={`mailto:${site.email}`}>{site.email}</a>
            <a href={site.phone.href}>{site.phone.display}</a>
          </address>
        </div>
        <ContactForm
          locale={locale}
          text={text}
          action={site.contactFormAction}
          recipient={site.email}
          subjectPrefix={site.name}
          homeHref={homePath(locale)}
          siteUrl={site.url}
        />
      </div>
    </section>
  );
}
