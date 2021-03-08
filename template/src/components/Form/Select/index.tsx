import React from 'react';
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
    control: (provided: any, { isFocused }: any) => ({
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      cursor: 'pointer',
    }),
    singleValue: () =>({
      userSelect: 'none';
    }),
    indicatorSeparator: () => ({
      display: 'none';
    }),
    option: (provided: any, { isFocused, isSelected }: any) => ({
      padding: `var(--spacing-00)`,
      cursor: `pointer`,
      background: `${isFocused || isSelected ? 'var(--color-blue)' : ''}`,
      color: `${isFocused || isSelected ? 'white' : 'var(--color-black)'}`,
    })
  };

  return <ReactSelect {...{ styles, ...props }} />;
}
