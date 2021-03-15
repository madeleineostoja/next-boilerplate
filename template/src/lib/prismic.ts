// We don't use GraphQL & Apollo because of workarounds needed for slice introspection
// See https://github.com/prismicio/apollo-link-prismic/issues/10
import { GetStaticPropsContext } from 'next';
import { RichText } from 'prismic-dom';
import Prismic from 'prismic-javascript';
import { ResolvedApiOptions } from 'prismic-javascript/types/ResolvedApi';
import { PRISMIC_API } from './consts';

/** Convert Prismic RichText to HTML string */
export function richtext(richtext: object, inline?: boolean) {
  const result = richtext ? RichText.asHtml(richtext, resolveLink) : '';

  return inline
    ? result.replace(/^<[^>]+>|<\/[^>]+>$|<[^/>][^>]*><\/[^>]+>/g, '')
    : result;
}

/** Convert Prismic RichText to plaintext string */
export function plaintext(richtext: object) {
  return richtext ? RichText.asText(richtext) : '';
}

async function getPrismic(
  context?: GetStaticPropsContext,
  options?: ResolvedApiOptions
) {
  const api = await Prismic.getApi(PRISMIC_API);

  return {
    api,
    options: {
      ref: (context && context.previewData?.ref) || api.masterRef.ref,
      pageSize: 100,
      ...options
    }
  };
}

/** Prismic API helper with autmoatic preview resolving */
export async function query(
  field: string,
  query: string[] | string,
  context?: GetStaticPropsContext,
  opts?: ResolvedApiOptions
) {
  const { api, options } = await getPrismic(context, opts);

  return await api.query(Prismic.Predicates.at(field, query), options);
}

/** Get single document shortcut */
export async function get(type: string, ...args: any) {
  const { api, options } = await getPrismic(...args),
    result = await api.getSingle(type, options);

  if (!result) {
    throw new Error('Unpublished document');
  }

  const { data, ...rest } = result;

  return { ...data, ...rest };
}

/** get all of a type shortcut */
export async function getAll(type: string, ...args: any) {
  const { results } = await query('document.type', type, ...args);
  return results;
}

export async function getUid(type: string, docUid: string, ...args: any) {
  const { api, options } = await getPrismic(...args),
    result = await api.getByUID(type, docUid, options);

  if (!result) {
    throw new Error('Unpublished document');
  }

  const { data, ...rest } = result;

  return { ...data, ...rest };
}

/** Prismic link resolver */
type PrismicDocLink = { type: string; uid: string };
export function resolveDocument(doc: PrismicDocLink) {
  if (!doc) {
    return '';
  }

  switch (doc.type) {
    case 'home':
      return '/';
    default:
      return `/${doc.uid}`;
  }
}

export function resolveLink(link: { link_type?: string; url?: string }) {
  if (!link) {
    return '';
  }

  return link.link_type && link.link_type !== 'Document'
    ? link.url || ''
    : resolveDocument(link as PrismicDocLink);
}
