import Navbar from '@/components/Navbar'
import PhotographyGrid from '@/components/PhotographyGrid'

export const metadata = { title: 'MANFRD — Photography' }

export default function PhotographyPage() {
  return (
    <main className="relative min-h-screen" style={{ background: '#080808' }}>
      <div className="grain" />
      <Navbar />
      <PhotographyGrid />
    </main>
  )
}
