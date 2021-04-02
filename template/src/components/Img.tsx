import { css } from '@emotion/react';
import Image, { ImageProps } from 'next/image';

export type PrismicImg = {
  url: string;
  alt?: string;
  dimensions: { height: number; width: number };
};

export type ImgProps = Partial<ImageProps> & {
  /** Prismic data shorthand */
  prismic?: PrismicImg;
  /** Next Image layout setting */
  layout?: 'fixed' | 'responsive' | 'intrinsic' | undefined;
};

function prismicLoader({ src, width, quality }: any) {
  return `${src.split(/[?#]/)[0]}?auto=format&w=${width}&q=${quality || 80}`;
}

/**
 * Responsive, lazy-loaded image component
 */
export function Img({
  prismic,
  layout = 'responsive',
  className,
  src,
  alt,
  height,
  width,
  ...props
}: ImgProps) {
  return (
    <div
      css={css`
        width: 100%;
      `}
      className={className}
    >
      <Image
        loader={prismic ? prismicLoader : undefined}
        src={src || prismic?.url || ''}
        alt={alt || prismic?.alt || ''}
        width={width || prismic?.dimensions?.width || ''}
        height={height || prismic?.dimensions?.height || ''}
        layout={layout}
        loading="lazy"
        objectFit="cover"
        {...props}
      />
    </div>
  );
}
