interface JsonLdProps {
  /** Structured data (schema.org) as a plain object. Must only contain facts that are visible on the website. */
  data: Record<string, unknown>;
}

/**
 * Renders schema.org structured data. This is the only place where raw
 * markup is injected. The input is our own trusted data, and every "<" is
 * escaped so that the JSON can never close the script element early.
 */
export function JsonLd({ data }: JsonLdProps) {
  return (
    <script
      type="application/ld+json"
      // eslint-disable-next-line no-restricted-syntax -- see the comment above
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, '\\u003c') }}
    />
  );
}
