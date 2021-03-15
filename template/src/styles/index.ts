import { css } from '@emotion/react';
import { normalize } from 'satchel-css';
import variables from './variables';

/**
 * Base document styles
 */
export default [variables, css`
  ${normalize({
    base: 'remedy',
    fontSmoothing: true,
    resetMargins: true,
    resetHeadings: true
  })}

  html {
    color: var(--color-text);
    -ms-overflow-style: -ms-autohiding-scrollbar;
  }

  body {
    position: relative;
    min-height: 100vh;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  section {
    content-visibility: auto;
  }
`];