import { ImageResponse } from 'next/og';
import { MARK_FRAME, MARK_Z, MARK_COLORS } from '@/components/ZephryxMark';

/**
 * iOS home-screen icon. Generated at build time so it tracks the mark's path
 * constants instead of being a hand-exported PNG that silently goes stale.
 *
 * Deliberately full-bleed and opaque with no rounded corners: iOS applies its
 * own mask and squircle, so baking our own radius in would double up, and a
 * transparent icon gets composited onto black on some surfaces.
 */
export const size = { width: 180, height: 180 };
export const contentType = 'image/png';
export const dynamic = 'force-static';

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: MARK_COLORS.plate,
        }}
      >
        <svg width="132" height="132" viewBox="0 0 32 32" style={{ display: 'flex' }}>
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
      </div>
    ),
    { ...size },
  );
}
