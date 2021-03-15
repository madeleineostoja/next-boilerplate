import { css } from '@emotion/react';
import { subgrid } from 'satchel-css';

/** Global breakpoints */
export type BreakpointKey = keyof typeof BREAKPOINTS;
export const BREAKPOINTS = {
  mobile: '36em',
  tablet: '48em',
  laptop: '62em',
  desktop: '75em',
};

/** Subgrid with page container inheritence */
export const subPageGrid = css`
  ${subgrid}
  & > * {
    grid-column: 2 / 3;
  }
`;

/** Inline richtext reset */
export const inlineRichtext = css`
  & > p:first-of-type {
    margin-top: 0;
  }
  & > p:last-of-type {
    margin-bottom: 0;
  }
`;