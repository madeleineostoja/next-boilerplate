import { css } from '@emotion/react';
import { subgrid } from 'satchel-css';

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