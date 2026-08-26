/**
 * The Zephryx Security mark — "breach".
 *
 * The family Z-stroke shared with zephryx.in and academy.zephryx.in, set in a
 * perimeter frame that is closed on every side except one deliberate cut on the
 * right edge, which the Z's own bottom stroke drives out through. The parent
 * sites differentiate the same Z with a bare square (zephryx.in) and a plus
 * (academy); the cut is this site's modifier.
 *
 * The frame has to read as intact for the cut to mean anything, which is why
 * the gap is a slot rather than a missing side. Below ~20px the slot stops
 * resolving and the mark degrades to a bold Z in a box — deliberately, since
 * that is the parent brand mark.
 *
 * src/app/apple-icon.tsx and the social card import the two path constants
 * below, so they stay in sync automatically. src/app/icon.svg is a static
 * metadata file that cannot import — if either path changes, hand-edit that
 * file to match.
 */

/** Perimeter, clockwise from below the cut. Cut spans y 18.2 → 23.8 on the right edge. */
export const MARK_FRAME =
  'M30.5 23.8 V27.5 Q30.5 30.5 27.5 30.5 H4.5 Q1.5 30.5 1.5 27.5 V4.5 Q1.5 1.5 4.5 1.5 H27.5 Q30.5 1.5 30.5 4.5 V18.2';

/** Family Z-stroke, bottom bar extended past the perimeter through the cut. */
export const MARK_Z = 'M9 9 H23 L11 21 H30';

export const MARK_COLORS = {
  plate: '#06070a',
  frame: '#8f0d24',
  stroke: '#ff2d4b',
} as const;

export default function ZephryxMark({
  size = 28,
  className = '',
  /** Draw the dark plate behind the mark. Off when it sits on the page background. */
  plate = false,
  title,
}: {
  size?: number;
  className?: string;
  plate?: boolean;
  title?: string;
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      className={className}
      role={title ? 'img' : undefined}
      aria-hidden={title ? undefined : true}
      aria-label={title}
    >
      {title ? <title>{title}</title> : null}
      {plate ? <rect width="32" height="32" rx="4" fill={MARK_COLORS.plate} /> : null}
      <path
        d={MARK_FRAME}
        fill="none"
        stroke={MARK_COLORS.frame}
        strokeWidth="1.2"
        strokeLinecap="round"
      />
      <path
        d={MARK_Z}
        fill="none"
        stroke={MARK_COLORS.stroke}
        strokeWidth="2.6"
        strokeLinejoin="round"
        strokeLinecap="round"
      />
    </svg>
  );
}
