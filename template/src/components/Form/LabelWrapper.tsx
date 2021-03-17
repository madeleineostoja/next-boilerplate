import { css } from '@emotion/react';
import { cloneElement } from 'preact';
import { HTMLProps } from 'react';

export type LabelWrapperProps = {
  /** Optional label */
  label?: string;
  children: any;
} & HTMLProps<HTMLLabelElement>;

/**
 * Label wrapper helper for form inputs
 */
export function LabelWrapper({
  label,
  children,
  className
}: LabelWrapperProps) {
  const randomId = Math.floor((1 + Math.random()) * 0x10000)
    .toString(16)
    .substring(1);

  return (
    <div className={className}>
      {label && (
        <label
          css={css`
            color: var(--color-coral);
          `}
          htmlFor={randomId}
        >
          {label}
        </label>
      )}
      {cloneElement(children, { id: randomId })}
    </div>
  );
}
