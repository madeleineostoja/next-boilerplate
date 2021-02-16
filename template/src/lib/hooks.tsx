import { useRouter } from 'next/router';
import { stringify } from 'query-string';
import { useCallback, useEffect, useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import { formatParams } from './utils';

/**
 * Query param state helper
 */
export function useQueryParams() {
  const router = useRouter(),
    hasQueryParams = /\[.+\]/.test(router.route) || /\?./.test(router.asPath),
    ready = !hasQueryParams || Object.keys(router.query).length > 0;

  const queryParams = ready ? formatParams(router.query, 'params') : null;
  const queryString = stringify(router.query);

  const set = useCallback(
    (params: any) => {
      router.replace(
        `?${stringify(formatParams(params, 'query'))}`,
        `${router.asPath.split('?')[0]}?${stringify(
          formatParams(params, 'query')
        )}`,
        {
          shallow: true
        }
      );
    },
    [router]
  );

  return [queryParams, set, queryString] as const;
}

/**
 * Patched useMediaQuery for SSR
 * Until https://github.com/contra/react-responsive/issues/162 resolved
 */
export function useBreakpoint(
  query: string,
  fallback = true,
  callback?: () => any
) {
  const [browserFlushed, setBrowserFlushed] = useState(false);
  const matched = useMediaQuery({ query }, undefined, callback);
  useEffect(() => setBrowserFlushed(true), []);

  if (typeof window !== 'undefined' && browserFlushed) {
    return matched;
  }
  return fallback;
}

/**
 * Set styles on a page and remove on dismount
 */
export function usePageStyles(styles: object) {
  useEffect(() => {
    Object.keys(styles).forEach((style) => {
      document.body.style[style as any] = styles[style as keyof typeof styles];
    });

    return () =>
      Object.keys(styles).forEach((style) => {
        document.body.style.removeProperty(style);
      });
  }, []);
}
