import { ImageResponse } from 'next/og'
import { readFileSync } from 'fs'
import { join } from 'path'

export const alt = 'MANFRD — Cinematographer · Composer · Choreographer'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function Image() {
  const logoBuffer = readFileSync(join(process.cwd(), 'public', 'Manfrd Logo_Wordmark_White_HR.png'))
  const logoSrc = `data:image/png;base64,${logoBuffer.toString('base64')}`

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
          gap: 32,
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={logoSrc} width={520} alt="MANFRD" />
        <div
          style={{
            color: '#c8a97e',
            fontSize: 14,
            letterSpacing: '0.4em',
            textTransform: 'uppercase',
            fontFamily: 'sans-serif',
          }}
        >
          Cinematographer · Composer · Choreographer
        </div>
      </div>
    ),
    { ...size }
  )
}
