import { useState } from 'react'
import { AnimatePresence, motion as Motion } from 'framer-motion'
import './App.css'
import './themes.css'
import './layouts.css'
import './advanced-layouts.css'
import './immersive-layouts.css'
import { AuroraLayout } from './layouts/AuroraLayout.jsx'
import { CinematicLayout } from './layouts/CinematicLayout.jsx'
import { ClassicLayout } from './layouts/ClassicLayout.jsx'
import { ClassroomCinemaLayout } from './layouts/ClassroomCinemaLayout.jsx'
import { CinematicVideoHeroLayout } from './layouts/CinematicVideoHeroLayout.jsx'
import { FlowLayout } from './layouts/FlowLayout.jsx'
import { HeroSearchLayout } from './layouts/HeroSearchLayout.jsx'
import { SplineGlassLayout } from './layouts/SplineGlassLayout.jsx'
import { SplineParallaxLayout } from './layouts/SplineParallaxLayout.jsx'
import { SplitLayout } from './layouts/SplitLayout.jsx'
import { ReelLayout } from './layouts/ReelLayout.jsx'
import { StaffMosaicLayout } from './layouts/StaffMosaicLayout.jsx'
import { StaffRailLayout } from './layouts/StaffRailLayout.jsx'
import { WebflowScrollLayout } from './layouts/WebflowScrollLayout.jsx'
import './staff-layouts.css'
import './hero-search-layout.css'

const LAYOUTS = {
  classic: ClassicLayout,
  'cinematic-video': CinematicVideoHeroLayout,
  'hero-search': HeroSearchLayout,
  split: SplitLayout,
  aurora: AuroraLayout,
  cinematic: CinematicLayout,
  flow: FlowLayout,
  'spline-glass': SplineGlassLayout,
  'spline-parallax': SplineParallaxLayout,
  'classroom-cinema': ClassroomCinemaLayout,
  'webflow-scroll': WebflowScrollLayout,
  reel: ReelLayout,
  'staff-rail': StaffRailLayout,
  'staff-mosaic': StaffMosaicLayout,
}

const IDEAS = [
  { id: 'classic', label: 'Classic', theme: 'heritage', layout: 'classic' },
  { id: 'cinematic-video', label: 'Cinematic video', theme: 'heritage', layout: 'cinematic-video' },
  { id: 'hero-search', label: 'Hero + search', theme: 'heritage', layout: 'hero-search' },
  { id: 'split', label: 'Split + rail', theme: 'monsoon', layout: 'split' },
  { id: 'aurora', label: 'Aurora glass', theme: 'nocturne', layout: 'aurora' },
  { id: 'cinematic', label: 'Cinematic snap', theme: 'editorial', layout: 'cinematic' },
  { id: 'flow', label: 'Flow + river', theme: 'heritage', layout: 'flow' },
  { id: 'spline-glass', label: 'Spline: glass', theme: 'nocturne', layout: 'spline-glass' },
  { id: 'spline-parallax', label: 'Spline: classrooms', theme: 'bauhaus', layout: 'spline-parallax' },
  { id: 'classroom-cinema', label: 'Classroom scenes', theme: 'editorial', layout: 'classroom-cinema' },
  { id: 'webflow-scroll', label: 'Webflow-style', theme: 'monsoon', layout: 'webflow-scroll' },
  { id: 'reel', label: 'Reel feed', theme: 'nocturne', layout: 'reel' },
  { id: 'staff-rail', label: 'Faculty rail', theme: 'heritage', layout: 'staff-rail' },
  { id: 'staff-mosaic', label: 'Faculty mosaic', theme: 'monsoon', layout: 'staff-mosaic' },
]

const pageEase = [0.16, 1, 0.3, 1]

function App() {
  const [activeId, setActiveId] = useState(IDEAS[0].id)
  const idea = IDEAS.find((i) => i.id === activeId) ?? IDEAS[0]
  const Body = LAYOUTS[idea.layout] ?? LAYOUTS.classic

  return (
    <div className="site" data-theme={idea.theme} data-layout={idea.layout}>
      <div className="sticky-top">
        <div
          className="theme-bar"
          role="tablist"
          aria-label="Layout (same MEA content)"
        >
          <p className="theme-bar__label">Layouts</p>
          {IDEAS.map((t) => (
            <button
              key={t.id}
              type="button"
              role="tab"
              id={`tab-${t.id}`}
              aria-selected={activeId === t.id}
              className={activeId === t.id ? 'theme-pill is-active' : 'theme-pill'}
              onClick={() => setActiveId(t.id)}
            >
              {t.label}
            </button>
          ))}
        </div>
      </div>

      <AnimatePresence mode="wait" initial={false}>
        <Motion.div
          key={idea.id}
          initial={{ opacity: 0, y: 14, filter: 'blur(6px)' }}
          animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          exit={{ opacity: 0, y: -10, filter: 'blur(4px)' }}
          transition={{ duration: 0.42, ease: pageEase }}
          style={{ flex: 1, display: 'flex', flexDirection: 'column', minHeight: 0 }}
        >
          <Body />
        </Motion.div>
      </AnimatePresence>
    </div>
  )
}

export default App
