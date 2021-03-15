
import { css } from '@emotion/react';
import { ReactNode } from 'react';

export function Page({
  children
}: { children: ReactNode }) {
  return (
    <div
      css={css`
        display: grid;
        grid-template-columns: var(--grid-page);
        & > * {
          grid-column: 2 / 3;
        }
      `}
    >
      {children}
    </div>
  );
}