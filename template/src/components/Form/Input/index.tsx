import { css } from '@emotion/react';
import { HTMLProps } from 'react';
import { inputStyles } from '..';

export type InputProps = HTMLProps<HTMLInputElement>;

/**
 * Form input
 */
export function Input({ ...props }: InputProps) {
  return (
    <input
      css={css`
        ${inputStyles}
      `}
      {...props}
    />
  );
}