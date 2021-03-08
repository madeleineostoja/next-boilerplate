import { DocsContainer, Stories } from '@storybook/addon-docs/blocks';
import { addDecorator, addParameters } from '@storybook/react';
import 'pollen-css';
import styles from '../src/styles';
import nextImgShim from './lib/nextImage';

// Shim next/image
nextImgShim();

// Change title of stories
Stories.defaultProps = {
  title: 'Examples'
};

// Global styles
addDecorator((story: any) => (
  <>
    <style jsx global>{styles}</style>
    {story()}
  </>
));

addParameters({
  docs: {
    container: ({ children, context }: any) => (
      <DocsContainer context={context}>
        <style jsx global>{styles}</style>
        {children}
      </DocsContainer>
    )
  }
});
