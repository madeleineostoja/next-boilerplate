import { HTMLProps, ReactNode } from 'react';

export function Page({
  children
}: { children: ReactNode } & HTMLProps<HTMLDivElement>) {
  return (
    <style jsx>{`
      main {
        display: grid;
        grid-template-columns: var(--grid-page);
        & > * {
          grid-column: 2 / 3;
        }
      }
    `}</style>

    <main>
      {children}
    </main>
  );
}
