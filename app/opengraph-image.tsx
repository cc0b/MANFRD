import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const alt = 'MANFRD — Cinematographer · Composer · Choreographer'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: '#080808',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          justifyContent: 'flex-end',
          padding: '80px 96px',
        }}
      >
        {/* Accent line */}
        <div
          style={{
            color: '#c8a97e',
            fontSize: 13,
            letterSpacing: '0.4em',
            textTransform: 'uppercase',
            fontFamily: 'sans-serif',
            marginBottom: 28,
          }}
        >
          Cinematographer · Composer · Choreographer
        </div>

        {/* Wordmark */}
        <div
          style={{
            color: '#f0ede8',
            fontSize: 140,
            letterSpacing: '0.12em',
            fontWeight: 700,
            fontFamily: 'sans-serif',
            lineHeight: 1,
          }}
        >
          MANFRD
        </div>

        {/* Thin rule */}
        <div
          style={{
            position: 'absolute',
            bottom: 60,
            left: 96,
            right: 96,
            height: 1,
            background: 'rgba(240,237,232,0.08)',
          }}
        />
      </div>
    ),
    { ...size }
  )
}
