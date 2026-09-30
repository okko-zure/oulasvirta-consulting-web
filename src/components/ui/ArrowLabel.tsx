import type { ReactNode } from 'react';

interface ArrowLabelProps {
  children: ReactNode;
  /**
   * "split": the arrow is a separate element (the link's flex gap separates it from the text).
   * "inline": the arrow follows the text after one space, as a single piece of text.
   * The prototype used both styles; each link keeps the style it had.
   */
  arrow?: 'split' | 'inline';
  symbol?: '↗' | '↑' | '+' | '☰';
}

/** Link or button text followed by a decorative arrow that screen readers skip. */
export function ArrowLabel({ children, arrow = 'split', symbol = '↗' }: ArrowLabelProps) {
  if (arrow === 'inline') {
    return (
      <span>
        {children} <span aria-hidden="true">{symbol}</span>
      </span>
    );
  }
  return (
    <>
      {children} <span aria-hidden="true">{symbol}</span>
    </>
  );
}
