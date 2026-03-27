import PageShell from '@/components/PageShell'

export const metadata = { title: 'MANFRD — Composition' }

export default function CompositionPage() {
  return (
    <PageShell title="Composition" subtitle="Selected works — Original scores & sound">

      <a
        href="https://soundcloud.com/manfrd"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-3 text-[9px] tracking-[0.3em] uppercase no-underline transition-colors duration-300 group"
        style={{ color: 'rgba(240,237,232,0.4)' }}
      >
        <span
          className="w-8 h-px transition-all duration-300 group-hover:w-14"
          style={{ background: '#c8a97e' }}
        />
        <span className="group-hover:text-cream transition-colors duration-300">
          Listen on SoundCloud
        </span>
      </a>

    </PageShell>
  )
}
