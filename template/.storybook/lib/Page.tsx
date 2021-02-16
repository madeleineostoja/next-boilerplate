import { css } from '@emotion/react';
import { HTMLProps, ReactNode } from 'react';

export function Page({
  children,
  ...props
}: { children: ReactNode } & HTMLProps<HTMLDivElement>) {
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
