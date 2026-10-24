/**
 * Utility to validate whether a URL string is a valid external link.
 * Excludes empty strings, '#' placeholders, and null/undefined values.
 *
 * @param {string|null|undefined} url
 * @returns {boolean}
 */
export const isValidUrl = (url) =>
  typeof url === 'string' &&
  url.trim() !== '' &&
  url.trim() !== '#' &&
  (url.startsWith('http://') || url.startsWith('https://'));
