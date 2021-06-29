import { css } from '@emotion/core';
import ReactSelect from 'react-select';
import { inputStyles } from '..';

export type SelectProps = {
  className?: string;
} & Partial<typeof ReactSelect>;

/**
 * Custom select form input
 */
export function Select({ className, ...props }: SelectProps) {
  const styles = {
    control: (provided: any, { isFocused }: any) => css`
      ${inputStyles}
      display: flex !important;
      align-items: center;
      justify-content: space-between;
      cursor: pointer;
    `,
    singleValue: () =>
      css`
        user-select: none;
      `,
    indicatorSeparator: () => css`
      display: none;
    `,
    option: (provided: any, { isFocused, isSelected }: any) => css`
      padding: var(--spacing-00);
      cursor: pointer;
      background: ${isFocused || isSelected ? 'var(--color-blue)' : ''};
      color: ${isFocused || isSelected ? 'white' : 'var(--color-black)'};
      &:hover {
        background: var(--color-blue);
        color: white;
      }
    `
  } as any;

  return <ReactSelect {...{ styles, ...props }} />;
}