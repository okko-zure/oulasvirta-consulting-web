'use client';

import Link from 'next/link';
import {
  useCallback,
  useEffect,
  useRef,
  useState,
  useSyncExternalStore,
  type FormEvent,
  type MouseEvent,
} from 'react';
import type { ContactTopic, Locale } from '@/content/types';
import styles from './Contact.module.css';

/** Everything the form shows, already picked for one language on the server (keeps the browser bundle small). */
export interface ContactFormText {
  title: string;
  intro: string;
  labels: {
    name: string;
    company: string;
    optional: string;
    email: string;
    topic: string;
    message: string;
    honeypot: string;
  };
  hint: string;
  topics: { value: ContactTopic; label: string }[];
  privacy: string;
  privacyLinkLabel: string;
  privacyHref: string;
  submit: string;
  emailOption: { label: string; note: string };
  messages: { pending: string; success: string; invalid: string };
}

interface ContactFormProps {
  locale: Locale;
  text: ContactFormText;
  /** Where the browser sends the enquiry: a FormSubmit address (see docs/CONTACT_FORM.md). */
  action: string;
  recipient: string;
  subjectPrefix: string;
  /** Address of the home page in this language, e.g. "/en/". */
  homeHref: string;
  /** Production address without a trailing slash. Used for the values that are correct without JavaScript. */
  siteUrl: string;
}

const FORM_ID = 'yhteydenottolomake';
const noop = () => {};

/** Never changes, so there is nothing to subscribe to. */
function subscribeToNothing() {
  return noop;
}

/** True in the browser after hydration, false in the server-rendered HTML. */
const isBrowser = () => true;
const isServer = () => false;

/** FormSubmit sends the visitor back with ?contact=sent; the value is read once per page load. */
let sentAfterRedirect: boolean | undefined;
function readSentFlag() {
  sentAfterRedirect ??= new URLSearchParams(window.location.search).get('contact') === 'sent';
  return sentAfterRedirect;
}

function setFieldValue(field: Element | RadioNodeList | null, value: string) {
  if (field instanceof HTMLInputElement) field.value = value;
}

/**
 * The enquiry form. This is one of only two Client Components of the site.
 *
 * It is a plain HTML form that the browser posts straight to FormSubmit, so it
 * works without JavaScript. JavaScript only adds conveniences: it keeps the
 * hidden fields (subject, language, return address) up to date, preselects the
 * topic when a "contact" link was used, guards the honeypot field, prepares the
 * e-mail draft link and shows the confirmation after FormSubmit sends the
 * visitor back.
 *
 * Do not route the form through our own server or switch off FormSubmit's
 * reCAPTCHA: an earlier version did and FormSubmit rejected it (HTTP 429).
 */
export function ContactForm({ locale, text, action, recipient, subjectPrefix, homeHref, siteUrl }: ContactFormProps) {
  const formRef = useRef<HTMLFormElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const statusRef = useRef<HTMLParagraphElement>(null);
  const [submitState, setSubmitState] = useState<'pending' | 'invalid' | null>(null);

  const hydrated = useSyncExternalStore(subscribeToNothing, isBrowser, isServer);
  const sentAfterSubmit = useSyncExternalStore(subscribeToNothing, readSentFlag, isServer);
  const shownState = submitState ?? (sentAfterSubmit ? 'success' : null);

  const subjectFor = useCallback(
    (form: HTMLFormElement) => {
      const topic = form.elements.namedItem('topic');
      const label = topic instanceof HTMLSelectElement ? (topic.selectedOptions[0]?.text ?? '') : '';
      return `${subjectPrefix} – ${label}`;
    },
    [subjectPrefix],
  );

  /** Fills the hidden fields from the current page address and the selected topic. */
  const syncFields = useCallback(() => {
    const form = formRef.current;
    if (!form) return;
    setFieldValue(form.elements.namedItem('_subject'), subjectFor(form));
    setFieldValue(form.elements.namedItem('language'), locale.toUpperCase());
    // All languages share one form identity; each one returns to its own page.
    setFieldValue(form.elements.namedItem('_url'), `${window.location.origin}/`);
    const next = new URL(window.location.pathname, window.location.origin);
    next.searchParams.set('contact', 'sent');
    next.hash = FORM_ID;
    setFieldValue(form.elements.namedItem('_next'), next.href);
  }, [locale, subjectFor]);

  useEffect(() => {
    syncFields();
  }, [syncFields]);

  // Any "contact" link on the page (header, buttons, text links) preselects its topic.
  useEffect(() => {
    const onClick = (event: globalThis.MouseEvent) => {
      const link = event.target instanceof Element ? event.target.closest<HTMLAnchorElement>(`a[href="#${FORM_ID}"]`) : null;
      const form = formRef.current;
      if (!link || !form) return;
      const topic = form.elements.namedItem('topic');
      if (link.dataset.contactTopic && topic instanceof HTMLSelectElement) topic.value = link.dataset.contactTopic;
      syncFields();
      titleRef.current?.focus({ preventScroll: true });
    };
    document.addEventListener('click', onClick);
    return () => document.removeEventListener('click', onClick);
  }, [syncFields]);

  // After FormSubmit sends the visitor back: announce the confirmation and tidy the address.
  useEffect(() => {
    if (!sentAfterSubmit) return;
    statusRef.current?.focus({ preventScroll: true });
    const url = new URL(window.location.href);
    url.searchParams.delete('contact');
    window.history.replaceState(null, '', url.pathname + url.search + url.hash);
  }, [sentAfterSubmit]);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    const honeypot = event.currentTarget.elements.namedItem('_honey');
    if (honeypot instanceof HTMLInputElement && honeypot.value) {
      // A bot filled the hidden field: do not send anything.
      event.preventDefault();
      setSubmitState('invalid');
      return;
    }
    syncFields();
    // The browser now posts the form; nothing here claims that the e-mail was delivered.
    setSubmitState('pending');
  }

  /** The e-mail draft link contains what the visitor has typed so far. */
  function prepareMailDraft(event: MouseEvent<HTMLAnchorElement>) {
    const form = formRef.current;
    if (!form) return;
    const data = new FormData(form);
    const body = [data.get('name'), data.get('company'), data.get('email'), '', data.get('message')]
      .filter((line) => line != null)
      .map(String)
      .join('\n');
    event.currentTarget.href = `mailto:${recipient}?subject=${encodeURIComponent(subjectFor(form))}&body=${encodeURIComponent(body)}`;
  }

  const defaultSubject = `${subjectPrefix} – ${text.topics[0]?.label ?? ''}`;

  return (
    <form
      ref={formRef}
      className={styles.contactForm}
      id={FORM_ID}
      action={action}
      method="post"
      // Without JavaScript the verification page opens in a new tab so the typed text stays visible.
      target={hydrated ? '_self' : '_blank'}
      aria-labelledby="form-title"
      onSubmit={handleSubmit}
    >
      <input type="hidden" name="_subject" defaultValue={defaultSubject} />
      <input type="hidden" name="_template" value="table" />
      <input type="hidden" name="_url" defaultValue={`${siteUrl}/`} />
      <input type="hidden" name="_next" defaultValue={`${siteUrl}${homeHref}?contact=sent#${FORM_ID}`} />
      <input type="hidden" name="language" defaultValue={locale.toUpperCase()} />
      <h3 ref={titleRef} id="form-title" tabIndex={-1}>
        {text.title}
      </h3>
      <p className={styles.formIntro}>{text.intro}</p>
      <div className={styles.formRow}>
        <div className={styles.formField}>
          <label htmlFor="contact-name">
            {text.labels.name} <span aria-hidden="true">*</span>
          </label>
          <input id="contact-name" name="name" type="text" autoComplete="name" maxLength={120} required />
        </div>
        <div className={styles.formField}>
          <label htmlFor="contact-company">
            {text.labels.company} <span className={styles.optional}>{text.labels.optional}</span>
          </label>
          <input id="contact-company" name="company" type="text" autoComplete="organization" maxLength={160} />
        </div>
      </div>
      <div className={styles.formField}>
        <label htmlFor="contact-email">
          {text.labels.email} <span aria-hidden="true">*</span>
        </label>
        <input id="contact-email" name="email" type="email" autoComplete="email" maxLength={254} required />
      </div>
      <div className={styles.formField}>
        <label htmlFor="contact-topic">{text.labels.topic}</label>
        <select id="contact-topic" name="topic" defaultValue={text.topics[0]?.value} onChange={syncFields}>
          {text.topics.map((topic) => (
            <option key={topic.value} value={topic.value}>
              {topic.label}
            </option>
          ))}
        </select>
      </div>
      <div className={styles.formField}>
        <label htmlFor="contact-message">
          {text.labels.message} <span aria-hidden="true">*</span>
        </label>
        <textarea id="contact-message" name="message" rows={5} maxLength={6000} required aria-describedby="message-hint" />
        <p id="message-hint" className={styles.fieldHint}>
          {text.hint}
        </p>
      </div>
      <div className={styles.formHoneypot} aria-hidden="true">
        <label htmlFor="contact-website">{text.labels.honeypot}</label>
        <input id="contact-website" name="_honey" type="text" tabIndex={-1} autoComplete="off" />
      </div>
      <p className={styles.formPrivacy}>
        {text.privacy}{' '}
        <Link href={text.privacyHref}>
          {text.privacyLinkLabel} <span aria-hidden="true">↗</span>
        </Link>
      </p>
      <button className="button button-gold" type="submit">
        <span className={styles.submitLabel}>{text.submit}</span>
        <span aria-hidden="true">↗</span>
      </button>
      <p className={styles.formEmailOption}>
        <a href={`mailto:${recipient}`} onClick={prepareMailDraft}>
          {text.emailOption.label} <span aria-hidden="true">↗</span>
        </a>
        <span>{text.emailOption.note}</span>
      </p>
      <p
        ref={statusRef}
        className={styles.formStatus}
        role="status"
        aria-live="polite"
        aria-atomic="true"
        tabIndex={-1}
        data-state={shownState ?? undefined}
      >
        {shownState ? text.messages[shownState] : null}
      </p>
    </form>
  );
}
