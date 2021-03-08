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
    <>
      <style jsx>{`
        button.button {
          ${reset('button')}
        }

        .button {
          display: inline-flex;
          align-items: center;
          text-align: center;
          padding: 8px 20px;
          border-radius: var(--radius-3);
          cursor: pointer;
          white-space: nowrap;
        }
      `}</style>

      <Element
        className="button"
        {...props}
      >
        {children}
      </Element>
    </>
  );
}
