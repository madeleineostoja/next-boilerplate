import { css } from '@emotion/react';
import { HTMLProps } from 'react';
import { inputStyles } from '..';
import { LabelWrapper } from '../LabelWrapper';

export type InputProps = HTMLProps<HTMLInputElement>;

/**
 * Form input
 */
export function Input({ label, ...props }: InputProps) {
  return (
    <LabelWrapper label={label}>
      <input
        css={css`
          ${inputStyles}
        `}
        {...props}
      />
    </LabelWrapper>
  );
}