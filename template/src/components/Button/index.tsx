import { css } from '@emotion/react';
import { HTMLProps } from 'react';
import { reset } from 'satchel-css';

export type ButtonProps = {
  /** Theme of the button */
  theme?: 'default';
} & Partial<HTMLProps<HTMLButtonElement>> &
  Partial<HTMLProps<HTMLAnchorElement>>;

/**
 * Adaptive button component with themes
 */
export function Button({ theme = 'primary', children, ...props }: ButtonProps) {
  const Element = props.href ? 'button' : 'a';

  return (
    <Element
      css={[
        !props.href &&
          css`
            ${reset('button')}
          `,
        css`
          display: inline-flex;
          align-items: center;
          text-align: center;
          padding: 8px 20px;
          border-radius: var(--radius-3);
          cursor: pointer;
          white-space: nowrap;
        `
      ]}
      {...props}
    >
      {children}
    </Element>
  );
}