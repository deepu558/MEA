import { useCallback, useEffect, useRef, useState } from 'react'
import { AdmissionForm } from '../components/AdmissionForm.jsx'
import { ADMISSION } from '../data/siteContent.jsx'

const VIDEO_URL =
  'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260328_083109_283f3553-e28f-428b-a723-d639c617eb2b.mp4'

const FADE_SEC = 0.5
const REWIND_MS = 100

const nav = [
  { href: '#top', label: 'Home', dark: true },
  { href: '#studio', label: 'Studio' },
  { href: '#about', label: 'About' },
  { href: '#journal', label: 'Journal' },
  { href: '#admission', label: 'Admission' },
  { href: '#contact', label: 'Reach Us' },
]

/**
 * Cinematic full-viewport hero with looped video, manual fade in/out, Tailwind + spec typography.
 * Standalone “Aethera”-style brand block (separate from MEA theme variables).
 */
export function CinematicVideoHeroLayout() {
  const videoRef = useRef(null)
  const rafRef = useRef(0)
  const [videoOpacity, setVideoOpacity] = useState(0)

  const stopRaf = useCallback(() => {
    if (rafRef.current) {
      cancelAnimationFrame(rafRef.current)
      rafRef.current = 0
    }
  }, [])

  useEffect(() => {
    const v = videoRef.current
    if (!v) return
    const lastOp = { current: -1 }

    const runFrame = () => {
      if (!v) return
      const t = v.currentTime
      const d = v.duration
      if (!Number.isFinite(d) || d <= 0) {
        rafRef.current = requestAnimationFrame(runFrame)
        return
      }
      let next = 1
      if (t < FADE_SEC) {
        next = t / FADE_SEC
      } else if (t > d - FADE_SEC) {
        next = Math.max(0, (d - t) / FADE_SEC)
      }
      if (Math.abs(next - lastOp.current) > 0.02) {
        lastOp.current = next
        setVideoOpacity(next)
      }
      rafRef.current = requestAnimationFrame(runFrame)
    }

    const startLoop = () => {
      if (rafRef.current) return
      rafRef.current = requestAnimationFrame(runFrame)
    }

    const onEnded = () => {
      stopRaf()
      lastOp.current = 0
      setVideoOpacity(0)
      window.setTimeout(() => {
        v.currentTime = 0
        v.play().catch(() => {})
      }, REWIND_MS)
    }

    const onPlay = () => {
      startLoop()
    }

    const onPause = () => {
      stopRaf()
    }

    v.addEventListener('ended', onEnded)
    v.addEventListener('playing', onPlay)
    v.addEventListener('pause', onPause)
    v.muted = true
    v.playsInline = true
    v.load()

    const tryPlay = () => v.play().catch(() => {})
    if (v.readyState >= 2) {
      tryPlay()
    } else {
      v.addEventListener('loadeddata', tryPlay, { once: true })
    }

    return () => {
      v.removeEventListener('ended', onEnded)
      v.removeEventListener('playing', onPlay)
      v.removeEventListener('pause', onPause)
      stopRaf()
    }
  }, [stopRaf])

  return (
    <div
      className="relative min-h-screen w-full overflow-hidden bg-white font-sans text-foreground"
      id="top"
    >
      {/* Video: offset from top per spec */}
      <div
        className="absolute z-0 overflow-hidden"
        style={{
          top: '300px',
          left: 0,
          right: 0,
          bottom: 0,
        }}
      >
        <video
          ref={videoRef}
          className="h-full w-full object-cover"
          style={{ opacity: videoOpacity }}
          src={VIDEO_URL}
          muted
          playsInline
          preload="auto"
          aria-hidden
        />
      </div>

      {/* Gradient over video */}
      <div
        className="pointer-events-none absolute inset-0 z-[1] bg-gradient-to-b from-white via-transparent to-white"
        aria-hidden
      />

      {/* Nav */}
      <header className="relative z-10 w-full">
        <nav
          className="mx-auto flex max-w-7xl items-center justify-between px-8 py-6"
          aria-label="Primary"
        >
          <a
            href="#top"
            className="font-display text-3xl leading-none tracking-tight text-foreground"
          >
            Aethera
            <sup className="text-[0.45em] font-normal" aria-label=" registered trademark ">
              ®
            </sup>
          </a>
          <ul className="hidden items-center gap-8 md:flex">
            {nav.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  className={`text-sm transition-colors ${
                    item.dark
                      ? 'text-foreground'
                      : 'text-[#6F6F6F] hover:text-foreground'
                  }`}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href="#studio"
            className="rounded-full bg-foreground px-6 py-2.5 text-sm text-white transition-transform hover:scale-[1.03]"
          >
            Begin Journey
          </a>
        </nav>
      </header>

      {/* Hero */}
      <section
        className="relative z-10 flex flex-col items-center justify-center px-6 text-center"
        style={{
          paddingTop: 'calc(8rem - 75px)',
          paddingBottom: '10rem',
        }}
      >
        <h1
          className="animate-fade-rise max-w-7xl font-display text-5xl font-normal leading-[0.95] sm:text-7xl md:text-8xl"
          style={{ letterSpacing: '-2.46px' }}
        >
          <span className="text-foreground">Beyond </span>
          <span className="text-[#6F6F6F] italic">silence,</span>
          <span className="text-foreground"> we build </span>
          <span className="text-[#6F6F6F] italic">the eternal.</span>
        </h1>
        <p className="animate-fade-rise-delay mt-8 max-w-2xl text-base leading-relaxed text-[#6F6F6F] sm:text-lg">
          Building platforms for brilliant minds, fearless makers, and thoughtful
          souls. Through the noise, we craft digital havens for deep work and pure
          flows.
        </p>
        <a
          href="#studio"
          className="animate-fade-rise-delay-2 mt-12 rounded-full bg-foreground px-14 py-5 text-base text-white transition-transform hover:scale-[1.03]"
        >
          Begin Journey
        </a>
      </section>

      {/* In-page anchors for nav (lightweight) */}
      <div
        id="studio"
        className="relative z-10 border-t border-[#ECECEC] bg-white px-6 py-20 text-center text-sm text-[#6F6F6F]"
      >
        <p className="font-display text-xl text-foreground">Studio</p>
        <p className="mx-auto mt-2 max-w-lg">
          Placeholder section — connect to your work, cases, or MEA content when
          you merge this style into a full site.
        </p>
      </div>
      <div
        id="about"
        className="relative z-10 bg-[#FAFAFA] px-6 py-20 text-center text-sm text-[#6F6F6F]"
      >
        <p className="font-display text-xl text-foreground">About</p>
        <p className="mx-auto mt-2 max-w-lg">
          A calm, full-viewport experience with a looping background film and soft
          fades at loop boundaries.
        </p>
      </div>
      <div
        id="journal"
        className="relative z-10 border-t border-[#ECECEC] bg-white px-6 py-20 text-center text-sm text-[#6F6F6F]"
      >
        <p className="font-display text-xl text-foreground">Journal</p>
        <p className="mx-auto mt-2 max-w-lg">Notes, links, and updates.</p>
      </div>
      <div
        id="admission"
        className="relative z-10 border-t border-[#ECECEC] bg-[#FAFAFA] px-6 py-20 text-left text-sm text-[#6F6F6F]"
      >
        <p className="font-display text-center text-xl text-foreground">Admission</p>
        <p className="mx-auto mt-2 max-w-lg text-center">{ADMISSION.intro}</p>
        <div className="mx-auto mt-8 max-w-lg">
          <AdmissionForm />
        </div>
      </div>
      <div
        id="contact"
        className="relative z-10 border-t border-[#ECECEC] bg-white px-6 py-20 text-center"
      >
        <p className="font-display text-xl text-foreground">Reach Us</p>
        <p className="mx-auto mt-2 max-w-lg text-sm text-[#6F6F6F]">
          hello@aethera.example — replace with your studio email or wire this
          block to MEA contact.
        </p>
      </div>
    </div>
  )
}
