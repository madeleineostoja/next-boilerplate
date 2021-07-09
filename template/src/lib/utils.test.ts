import { resolveUrl, setProperties } from './utils';
import { SITE_URL } from './consts';

describe('Utils', () => {
  it('Resolves URLs', () => {
    expect(resolveUrl('/cover.png', SITE_URL)).toBe(`${SITE_URL}/cover.png`);
    expect(resolveUrl(`${SITE_URL}/cover.png`, SITE_URL)).toBe(
      `${SITE_URL}/cover.png`
    );
  });

  it('Sets CSS custom properties', () => {
    setProperties({
      '--foo': 'bar',
      '--bar': 'baz'
    });
    expect(document.documentElement.style.getPropertyValue('--foo')).toBe(
      'bar'
    );
    expect(document.documentElement.style.getPropertyValue('--bar')).toBe(
      'baz'
    );
  });
});
