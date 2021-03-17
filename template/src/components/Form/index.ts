import { css } from '@emotion/core';
import { reset } from 'satchel-css';

export const inputStyles = css`
  ${reset('input')}
  padding: 12px;
  transition: all 200ms ease;
  outline: none !important;
  &::placeholder {
    color: var(--color-black);
  }
  &:placeholder-shown {
    opacity: 0.6;
    background: transparent;
  }
  &:invalid {
    border-color: var(--color-red);
  }
  &:disabled {
    background: var(--color-grey-300);
    border-color: var(--color-grey-500);
    pointer-events: none;
    user-select: none;
  }
`;