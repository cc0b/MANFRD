import PageShell from '@/components/PageShell'

export const metadata = { title: 'MANFRD — Composition' }

export default function CompositionPage() {
  return (
    <PageShell title="Composition" subtitle="Selected works — Original scores & sound">

      <a
        href="https://soundcloud.com/manfrd"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-4 no-underline transition-all duration-300 group border px-8 py-5 self-start"
        style={{ borderColor: 'rgba(200,169,126,0.4)', color: '#c8a97e' }}
      >
        <span className="text-[11px] tracking-[0.3em] uppercase group-hover:text-cream transition-colors duration-300">
          Listen on SoundCloud
        </span>
        <span
          className="text-lg transition-transform duration-300 group-hover:translate-x-1"
          style={{ color: '#c8a97e' }}
        >
          →
        </span>
      </a>

    </PageShell>
  )
}
