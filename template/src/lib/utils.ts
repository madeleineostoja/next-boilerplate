import { camel, snake } from 'case';
import clean from 'clean-deep';

/**
 * Snakify props for adding to query params
 */
export function formatParams(params: any, format: 'params' | 'query') {
  return (
    params &&
    clean(
      transform(params, ([key, value]) => [
        format === 'query' ? snake(key) : camel(key),
        value
      ])
    )
  );
}

/**
 * Shorthand to transform object keys and values
 */
export function transform(object: object, cb: (entry: any) => any) {
  return Object.fromEntries(Object.entries(object).map(cb));
}

/**
 * Resole relative URLs against a source
 * @param link URL to resolve
 * @param source Source URL to resolve against
 */
export function resolveUrl(link: string, source: string) {
  if (!link) {
    return source;
  }

  const url = new URL(source, link);

  return !/^https?:\/\//i.test(link) ? url : link;
}

/**
 * Helper to update CSS variables
 * @param properties Object of CSS properties
 */
export function setProperties(properties: any) {
  Object.keys(properties).forEach((property: string) =>
    document.documentElement.style.setProperty(property, properties[property])
  );
}
