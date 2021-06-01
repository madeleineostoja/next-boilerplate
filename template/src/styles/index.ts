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
    resetHeadings: true,
    // Remedy handles these
    saneEmbeds: false,
    hiddenProp: false,
  })}

  html {
    color: var(--color-text);
    -ms-overflow-style: -ms-autohiding-scrollbar;
    height: 100%;
  }

  body {
    position: relative;
    min-height: stretch;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  section {
    content-visibility: auto;
  }
`];