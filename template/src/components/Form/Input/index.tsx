import { HTMLProps } from 'react';
import { inputStyles } from '..';

export type InputProps = HTMLProps<HTMLInputElement>;

/**
 * Form input
 */
export function Input({ ...props }: InputProps) {
  return (
    <>
      <style jsx>{`
        input {
          ${inputStyles}
        }
      `}</style>

      <input {...props} />
    </>
  );
}
