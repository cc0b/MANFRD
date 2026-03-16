import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const alt = 'MANFRD'
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
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <div
          style={{
            color: '#f0ede8',
            fontSize: 160,
            fontWeight: 700,
            fontFamily: 'sans-serif',
            letterSpacing: '0.1em',
          }}
        >
          MANFRD
        </div>
        <div
          style={{
            color: '#c8a97e',
            fontSize: 18,
            fontFamily: 'sans-serif',
            letterSpacing: '0.4em',
            textTransform: 'uppercase',
            marginTop: 24,
          }}
        >
          Cinematographer · Composer · Choreographer
        </div>
      </div>
    ),
    { ...size }
  )
}
