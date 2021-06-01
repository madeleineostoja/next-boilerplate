import type { PrismicImg } from './types';
import PrismicDOM from 'prismic-dom';
import Prismic from 'prismic-javascript';
import type { ResolvedApiOptions } from 'prismic-javascript/types/ResolvedApi';
import type Predicates from 'prismic-javascript/types/Predicates';
import { PRISMIC_API } from '../consts';

/** Route resolving */
const routes = (uid: string) => ({
  home: '/',
  default: `/${uid}`
});

/** Richtext HTML parser */
const htmlElements = (element?: any, content?: any, children?: any) => ({});

/** Queries */
export async function query(
  query: (prismic: typeof Predicates) => any,
  options?: ResolvedApiOptions
) {
  const api = await Prismic.getApi(PRISMIC_API),
    result = await api.query(query(Prismic.Predicates), {
      ref: api.masterRef.ref,
      pageSize: 100,
      ...options
    });

  if (!result) {
    throw new Error('Unpublished document');
  }

  return result.results_size === 1
    ? (result.results[0] as any)
    : (result.results as any);
}

/** Predicates.at shorthand */
export function queryAt(
  path: string,
  value: string,
  options?: ResolvedApiOptions
) {
  return query((prismic) => prismic.at(path, value), options);
}

/** Document resolver */
export function resolveDocument(doc: any) {
  const paths = routes(doc.uid);
  return doc ? paths[doc.type as keyof typeof paths] || paths.default : '';
}

/** Internal link resolver */
export function resolveLink(link: { link_type?: string; url?: string }) {
  return link.link_type && link.link_type !== 'Document'
    ? link.url || ''
    : resolveDocument(link);
}

/** RichText to HTML string */
export function richtext(richtext: object, inline?: boolean) {
  const result = richtext
    ? PrismicDOM.RichText.asHtml(
        richtext,
        resolveLink,
        ((type: keyof typeof htmlElements, ...args: any) =>
          htmlElements(...args)[type] || null) as any
      )
    : '';

  return inline
    ? result.replace(/^<[^>]+>|<\/[^>]+>$|<[^/>][^>]*><\/[^>]+>/g, '')
    : result;
}

/** RichText to plaintext string */
export function plaintext(richtext: object) {
  return richtext ? PrismicDOM.RichText.asText(richtext) : '';
}

/** Image attribute shorthand */
export function prismicImg(img: PrismicImg) {
  return {
    src: placeholder(img.url),
    alt: img.alt,
    ...img.dimensions
  };
}
