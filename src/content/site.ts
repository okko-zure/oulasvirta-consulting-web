/**
 * Facts about the business that are not translated. Change them here and they
 * change everywhere (header, footer, contact section, structured data).
 */
export const site = {
  name: 'Oulasvirta Consulting',
  /** Production address without a trailing slash. Used for canonical URLs, hreflang and the sitemap. */
  url: 'https://oulasvirtaconsulting.com',
  wordmark: { primary: 'Oulasvirta', secondary: 'CONSULTING' },
  person: {
    name: 'Katja Oulasvirta',
    linkedin: 'https://fi.linkedin.com/in/katja-oulasvirta-8564631',
  },
  email: 'katja@oulasvirta.com',
  phone: { display: '+358 50 486 7880', href: 'tel:+358504867880' },
  /** SK-Monitoimialat Oy, of which Oulasvirta Consulting is an auxiliary business name. */
  legal: { name: 'SK-Monitoimialat Oy', businessId: '3019497-7' },
  /**
   * Endpoint of the contact form (FormSubmit, a free third-party service).
   * See docs/CONTACT_FORM.md before changing anything here.
   */
  contactFormAction: 'https://formsubmit.co/katja@oulasvirta.com',
  themeColor: '#122530',
} as const;
