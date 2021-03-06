import NextLink, { LinkProps } from 'next/link';
import type { HTMLProps } from 'react';

/**
 * Link wrapper
 */
export function Link({
  href,
  as,
  shallow,
  children,
  ...props
}: LinkProps & HTMLProps<HTMLAnchorElement>) {
  return (
    <NextLink {...{ href, as, shallow }}>
      <a {...props}>{children}</a>
    </NextLink>
  );
}
