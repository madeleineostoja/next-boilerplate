import { css } from '@emotion/react';
import { subgrid } from 'satchel-css';

/** Subgrid with page container inheritence */
export const subPageGrid = css`
  ${subgrid}
  & > * {
    grid-column: 2 / 3;
  }
`;