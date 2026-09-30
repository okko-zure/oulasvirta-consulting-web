import type { ReactNode } from 'react';
import { Fragment } from 'react';

/**
 * Renders a text with the small inline markup used in the content files:
 * "\n" is a line break and "*words*" are emphasised.
 *
 * A space is kept in front of every line break. On narrow screens the
 * stylesheet hides some line breaks (display: none); without the space the
 * two lines would then run together ("lähestyy.Muutos").
 */
export function Rich({ text }: { text: string }): ReactNode {
  return text.split('\n').map((line, index) => (
    <Fragment key={index}>
      {index > 0 ? (
        <>
          {' '}
          <br />
        </>
      ) : null}
      {emphasise(line)}
    </Fragment>
  ));
}

function emphasise(line: string): ReactNode[] {
  // Splitting on a capture group alternates: text, emphasised, text, ...
  return line.split(/\*([^*]+)\*/).map((part, index) => (index % 2 === 1 ? <em key={index}>{part}</em> : part));
}
