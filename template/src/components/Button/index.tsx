import { css } from '@emotion/react';
import type { ReactNode } from 'react';

export type ButtonProps = {
  children: ReactNode;
} & any;

/**
 * Adaptive button component with themes
 */
export function Button({ children, ...props }: ButtonProps) {
  const Element = props.href ? 'a' : 'button';

  return (
    <Element
      css={
        css`
          all: unset;
          display: inline-flex;
          align-items: center;
          text-align: center;
          padding: 8px 20px;
          border-radius: var(--radius-3);
          cursor: pointer;
          white-space: nowrap;
        `
      }
      {...props}
    >
      {children}
    </Element>
  );
}