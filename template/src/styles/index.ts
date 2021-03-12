import css from 'styled-jsx/css'
import { normalize } from 'satchel-css';
import variables from './variables';

/**
 * Normalization
 * Cannot be used inside external styled-jsx block
 */
 export const reset = normalize({
  base: 'remedy',
  fontSmoothing: true,
  resetMargins: true,
  resetHeadings: true
});

/**
 * Global document styles
 */
export default css.global`
  ${variables}

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
`;
