/**
 * Resole relative URLs against a source
 * @param link URL to resolve
 * @param source Source URL to resolve against
 */
export function resolveUrl(link: string, source: string) {
  return !/^https?:\/\//i.test(link) ? new URL(link, source).href : link;
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
