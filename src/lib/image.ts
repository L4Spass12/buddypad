/**
 * Build a responsive srcset from an Unsplash URL.
 * Rewrites the `w=` query param to generate multiple candidates so the
 * browser picks the right size based on the `sizes` attribute.
 *
 * Falls back gracefully for non-Unsplash URLs (returns empty srcset).
 */
const UNSPLASH_WIDTHS = [400, 600, 800, 1200, 1600];

export function unsplashSrcset(src: string, widths: number[] = UNSPLASH_WIDTHS): string {
  if (!src || !src.includes('images.unsplash.com')) return '';
  try {
    const url = new URL(src);
    return widths
      .map((w) => {
        url.searchParams.set('w', String(w));
        return `${url.toString()} ${w}w`;
      })
      .join(', ');
  } catch {
    return '';
  }
}

/** Force a specific width on an Unsplash URL (for the base src). */
export function unsplashAt(src: string, w: number): string {
  if (!src || !src.includes('images.unsplash.com')) return src;
  try {
    const url = new URL(src);
    url.searchParams.set('w', String(w));
    return url.toString();
  } catch {
    return src;
  }
}
