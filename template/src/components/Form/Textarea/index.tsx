import { css } from '@emotion/core';
import ReactTextArea from 'react-textarea-autosize';
import { inputStyles } from '..';

export type TextAreaProps = {
  rows?: number;
} & Partial<typeof ReactTextArea> &
  any;

/**
 * Controlled text area that grows based on input
 */
export function TextArea({ rows = 6, ...props }: TextAreaProps) {
  return (
    <ReactTextArea
      css={css`
        ${inputStyles}
        width: 100%;
        max-height: 30rem;
        resize: none !important;
      `}
      minRows={rows}
      {...props}
    />
  );
}