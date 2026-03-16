# MANFRD Portfolio

## Getting Started

```bash
npm install
npm run dev
```

Then open [http://localhost:3000](http://localhost:3000).

---

## Project Structure

```
app/
  page.tsx              → Home (landing page with background video)
  layout.tsx            → Root layout (fonts, metadata)
  globals.css           → Design system (colours, animations)
  cinematography/       → Cinematography page
  composition/          → Composition page
  choreography/         → Choreography page
  contact/              → Contact page

components/
  Navbar.tsx            → Top navigation bar
  SidebarTabs.tsx       → Left-side discipline dots
  VideoBackground.tsx   → Background video wrapper
  PageShell.tsx         → Shared layout for art medium pages
```

---

## Adding Your Background Video

1. Compress your video using HandBrake (H.265, RF 28–32, no audio, 1080p max)
2. Export a `.webm` version using CloudConvert
3. Drop both files into `/public/video/` named `bg.webm` and `bg.mp4`
4. In `components/VideoBackground.tsx`, uncomment the `<video>` block

---

## Customising Content

- **Home tagline** → `app/page.tsx`
- **Cinematography work** → `app/cinematography/page.tsx`
- **Composition work** → `app/composition/page.tsx`
- **Choreography work** → `app/choreography/page.tsx`
- **Contact details** → `app/contact/page.tsx`

---

## Colours

| Variable   | Value     | Usage              |
|------------|-----------|--------------------|
| `--black`  | `#080808` | Background         |
| `--cream`  | `#f0ede8` | Primary text       |
| `--accent` | `#c8a97e` | Highlights, lines  |

Change these in `app/globals.css` and `tailwind.config.js`.

---

## Deployment (Firebase)

```bash
npm run build
firebase deploy
```

Or deploy directly to Vercel by connecting your GitHub repo at vercel.com.
