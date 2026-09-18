import { Fragment, type ReactNode } from 'react';

/** Renders lines with `<br>` between them, keeping the line breaks set in Figma. */
export function withLineBreaks(lines: readonly string[]): ReactNode {
  return lines.map((line, index) => (
    <Fragment key={index}>
      {index > 0 && <br />}
      {line}
    </Fragment>
  ));
}
