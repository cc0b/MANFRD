'use client'

import { useState } from 'react'

export type Category = 'All' | 'Portrait' | 'Landscape' | 'Street' | 'Abstract'

export interface Photo {
  id: number
  category: Exclude<Category, 'All'>
  alt: string
  // Replace `src` with the actual image path once you have photos
  src?: string
  // Controls the natural height in the masonry column
  aspectClass: string
}

// ─── Placeholder data — swap src values with real image paths ───────────────
const PHOTOS: Photo[] = [
  { id: 1,  category: 'Portrait',  alt: 'Portrait 01',  aspectClass: 'aspect-[3/4]'  },
  { id: 2,  category: 'Landscape', alt: 'Landscape 01', aspectClass: 'aspect-[16/9]' },
  { id: 3,  category: 'Street',    alt: 'Street 01',    aspectClass: 'aspect-[2/3]'  },
  { id: 4,  category: 'Abstract',  alt: 'Abstract 01',  aspectClass: 'aspect-square'  },
  { id: 5,  category: 'Portrait',  alt: 'Portrait 02',  aspectClass: 'aspect-[4/5]'  },
  { id: 6,  category: 'Landscape', alt: 'Landscape 02', aspectClass: 'aspect-[3/2]'  },
  { id: 7,  category: 'Street',    alt: 'Street 02',    aspectClass: 'aspect-[2/3]'  },
  { id: 8,  category: 'Abstract',  alt: 'Abstract 02',  aspectClass: 'aspect-[5/4]'  },
  { id: 9,  category: 'Portrait',  alt: 'Portrait 03',  aspectClass: 'aspect-square'  },
  { id: 10, category: 'Landscape', alt: 'Landscape 03', aspectClass: 'aspect-[16/9]' },
  { id: 11, category: 'Street',    alt: 'Street 03',    aspectClass: 'aspect-[3/4]'  },
  { id: 12, category: 'Abstract',  alt: 'Abstract 03',  aspectClass: 'aspect-[2/3]'  },
  { id: 13, category: 'Portrait',  alt: 'Portrait 04',  aspectClass: 'aspect-[3/4]'  },
  { id: 14, category: 'Street',    alt: 'Street 04',    aspectClass: 'aspect-[4/5]'  },
  { id: 15, category: 'Landscape', alt: 'Landscape 04', aspectClass: 'aspect-[3/2]'  },
  { id: 16, category: 'Abstract',  alt: 'Abstract 04',  aspectClass: 'aspect-square'  },
]

const CATEGORIES: Category[] = ['All', 'Portrait', 'Landscape', 'Street', 'Abstract']

export default function PhotographyGrid() {
  const [activeCategory, setActiveCategory] = useState<Category>('All')
  const [expanded, setExpanded] = useState<Photo | null>(null)

  const visible =
    activeCategory === 'All'
      ? PHOTOS
      : PHOTOS.filter(p => p.category === activeCategory)

  return (
    <>
      {/* Scrollable page body */}
      <div className="relative z-10 h-screen overflow-y-auto">

        {/* Page header */}
        <div className="pt-36 px-10 md:px-16 mb-10">
          <p className="anim-fade-up-1 text-accent text-[9px] tracking-[0.4em] uppercase mb-4">
            Selected Works
          </p>
          <h1
            className="anim-fade-up-2 font-cormorant font-light text-cream leading-[0.9]"
            style={{ fontSize: 'clamp(48px, 8vw, 120px)' }}
          >
            Photography
          </h1>
        </div>

        {/* Category tabs */}
        <div className="anim-fade-up-3 px-10 md:px-16 mb-10 flex flex-wrap gap-8">
          {CATEGORIES.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className="flex flex-col items-start gap-2 bg-transparent border-0 cursor-pointer p-0 text-[9px] tracking-[0.3em] uppercase transition-colors duration-300"
              style={{
                color: activeCategory === cat ? '#c8a97e' : 'rgba(240,237,232,0.3)',
              }}
            >
              {cat}
              <span
                className="block h-px w-full transition-opacity duration-300"
                style={{
                  background: '#c8a97e',
                  opacity: activeCategory === cat ? 1 : 0,
                }}
              />
            </button>
          ))}
        </div>

        {/* Masonry grid — CSS columns */}
        <div className="px-10 md:px-16 pb-24 columns-2 md:columns-3 lg:columns-4 gap-2">
          {visible.map(photo => (
            <div
              key={photo.id}
              className="break-inside-avoid mb-2 overflow-hidden cursor-pointer group"
              onClick={() => setExpanded(photo)}
            >
              {/*
               * Placeholder block — replace the inner div with:
               *   <Image src={photo.src!} alt={photo.alt} fill className="object-cover" />
               * and wrap the outer div with relative positioning.
               */}
              <div
                className={`w-full bg-[#161616] ${photo.aspectClass} flex items-center justify-center
                            transition-all duration-500 group-hover:brightness-125`}
              >
                <span
                  className="text-[8px] tracking-[0.2em] uppercase"
                  style={{ color: 'rgba(240,237,232,0.15)' }}
                >
                  {photo.alt}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ── Lightbox ── */}
      {expanded && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center"
          style={{ background: 'rgba(8,8,8,0.96)' }}
          onClick={() => setExpanded(null)}
        >
          {/* Panel — stop clicks propagating so only the backdrop closes */}
          <div
            className="relative mx-10 max-w-4xl w-full"
            onClick={e => e.stopPropagation()}
          >
            {/*
             * Placeholder — replace with:
             *   <div className="relative w-full max-h-[80vh]">
             *     <Image src={expanded.src!} alt={expanded.alt} fill className="object-contain" />
             *   </div>
             */}
            <div
              className={`w-full bg-[#1a1a1a] ${expanded.aspectClass} max-h-[80vh]
                          flex items-center justify-center`}
            >
              <span
                className="text-[10px] tracking-[0.25em] uppercase"
                style={{ color: 'rgba(240,237,232,0.2)' }}
              >
                {expanded.alt}
              </span>
            </div>

            <p
              className="mt-4 text-[9px] tracking-[0.3em] uppercase"
              style={{ color: 'rgba(240,237,232,0.3)' }}
            >
              {expanded.category}
            </p>
          </div>

          {/* Close button */}
          <button
            className="absolute top-10 right-10 bg-transparent border-0 cursor-pointer
                       text-[9px] tracking-[0.3em] uppercase transition-colors duration-300 hover:text-cream"
            style={{ color: 'rgba(240,237,232,0.4)' }}
            onClick={() => setExpanded(null)}
          >
            Close
          </button>
        </div>
      )}
    </>
  )
}
