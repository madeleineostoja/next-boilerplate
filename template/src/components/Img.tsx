import { css } from '@emotion/react';
import Image, { ImageProps } from 'next/image';
import { useState } from 'react';

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
  const [loaded, setLoaded] = useState(false);

  return (
    <div
      css={css`
        width: 100%;
      `}
      className={className}
    >
      {!loaded && prismic ? (
        <img
          src={`${prismic?.url}?w=0.5&blur=200&px=16&auto=format&colorquant=150`}
        />
      ) : (
        <Image
          src={src || prismic?.url || ''}
          alt={alt || prismic?.alt || ''}
          width={width || prismic?.dimensions?.width || ''}
          height={height || prismic?.dimensions?.height || ''}
          layout={layout}
          loading="lazy"
          objectFit="cover"
          onLoad={() => setLoaded(true)}
          css={css`
            visibility: ${loaded ? 'visible' : 'hidden'} !important;
          `}
          {...props}
        />
      )}
    </div>
  );
}
