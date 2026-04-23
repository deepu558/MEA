import { useCallback, useEffect, useId, useRef, useState } from 'react'
import { motion as Motion } from 'framer-motion'
import { AddressWithMapLink } from '../components/AddressWithMapLink.jsx'
import { AdmissionForm } from '../components/AdmissionForm.jsx'
import { ContactActions } from '../components/ContactActions.jsx'
import { HeroTitle } from '../components/HeroTitle.jsx'
import { SiteFooter } from '../components/SiteFooter.jsx'
import {
  ADMISSION,
  ABOUT,
  CLASSES,
  CONTACT,
  HERO_COPY,
  SCHEDULE,
  SITE,
  STATS,
} from '../data/siteContent.jsx'

const PANELS = [
  { id: 'top', short: 'Intro', dotLabel: 'Intro' },
  { id: 'about', short: 'Why us', dotLabel: 'About' },
  { id: 'classes', short: 'Subjects', dotLabel: 'Classes' },
  { id: 'schedule', short: 'Timings', dotLabel: 'Schedule' },
  { id: 'admission', short: 'Apply', dotLabel: 'Admission' },
  { id: 'contact', short: 'Visit', dotLabel: 'Contact' },
]

export function ReelLayout() {
  const scrollerRef = useRef(null)
  const [active, setActive] = useState(0)
  const navId = useId()
  const dotIds = PANELS.map((_, i) => `${navId}-dot-${i}`)

  const goTo = useCallback(
    (index) => {
      const id = PANELS[index]?.id
      if (!id) return
      const el = document.getElementById(id)
      el?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    },
    []
  )

  useEffect(() => {
    const root = scrollerRef.current
    if (!root) return
    const sections = PANELS.map((p) => document.getElementById(p.id)).filter(
      Boolean
    )
    if (sections.length === 0) return

    const obs = new IntersectionObserver(
      (entries) => {
        const hit = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]
        if (!hit?.target) return
        const i = sections.indexOf(hit.target)
        if (i >= 0) setActive(i)
      },
      { root, rootMargin: '-12% 0px -12% 0px', threshold: [0.35, 0.5, 0.65] }
    )
    sections.forEach((s) => obs.observe(s))
    return () => obs.disconnect()
  }, [])

  return (
    <div className="l-reel">
      <div className="l-reel__chrome">
        <a className="l-reel__brand" href="#top">
          <span className="l-reel__mark">{SITE.short}</span>
          <span className="l-reel__brand-text">{SITE.name}</span>
        </a>
        <a
          className="l-reel__reel-cta"
          href={SITE.featuredReel}
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="l-reel__reel-cta__glow" aria-hidden />
          Open reel
        </a>
      </div>

      <div
        className="l-reel__dots"
        role="tablist"
        aria-label="Jump to section"
      >
        {PANELS.map((p, i) => (
          <button
            key={p.id}
            type="button"
            role="tab"
            id={dotIds[i]}
            className={i === active ? 'l-reel__dot is-active' : 'l-reel__dot'}
            aria-selected={i === active}
            aria-label={p.dotLabel}
            aria-controls={p.id}
            onClick={() => goTo(i)}
          />
        ))}
      </div>

      <div
        className="l-reel__scroller"
        ref={scrollerRef}
        data-active-panel={PANELS[active]?.id}
        id="reel-scroller"
        tabIndex={-1}
      >
        <section
          className="l-reel__frame l-reel__frame--0"
          id="top"
          aria-labelledby="reel-hero-h"
        >
          <div className="l-reel__noise" aria-hidden />
          <div className="l-reel__safe">
            <a className="l-reel__pill" href={SITE.featuredReel} target="_blank" rel="noopener noreferrer">
              <span className="l-reel__pill__ico" aria-hidden>▶</span>
              Featured on Instagram
            </a>
            <p className="l-reel__eyebrow">{HERO_COPY.eyebrow}</p>
            <HeroTitle id="reel-hero-h" className="l-reel__h1" />
            <p className="l-reel__lede">{HERO_COPY.lede}</p>
            <ul className="l-reel__chips" aria-label="Highlights">
              {STATS.map((s) => (
                <li key={s.k}>
                  <strong>{s.k}</strong> {s.v}
                </li>
              ))}
            </ul>
            <p className="l-reel__swipe-hint">Scroll — vertical snap, reel-style</p>
          </div>
        </section>

        <section
          className="l-reel__frame l-reel__frame--1"
          id="about"
          aria-labelledby="reel-about-h"
        >
          <div className="l-reel__noise" aria-hidden />
          <div className="l-reel__safe l-reel__safe--narrow">
            <h2 id="reel-about-h" className="l-reel__h2">
              {ABOUT.title(SITE.short)}
            </h2>
            <p className="l-reel__body">{ABOUT.intro}</p>
            <ul className="l-reel__stack">
              {ABOUT.pillars.map((p) => (
                <Motion.li
                  key={p.title}
                  initial={{ opacity: 0, x: 16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.35 }}
                  transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                >
                  <span className="l-reel__stack__k">{p.title}</span>
                  {p.text}
                </Motion.li>
              ))}
            </ul>
          </div>
        </section>

        <section
          className="l-reel__frame l-reel__frame--2"
          id="classes"
          aria-labelledby="reel-classes-h"
        >
          <div className="l-reel__noise" aria-hidden />
          <div className="l-reel__safe">
            <h2 id="reel-classes-h" className="l-reel__h2">
              {CLASSES.title}
            </h2>
            <p className="l-reel__body l-reel__body--center">{CLASSES.intro}</p>
            <div className="l-reel__duo">
              {CLASSES.items.map((c) => (
                <article key={c.title} className="l-reel__card">
                  <h3 className="l-reel__h3">{c.title}</h3>
                  <p className="l-reel__card-p">{c.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section
          className="l-reel__frame l-reel__frame--3"
          id="schedule"
          aria-labelledby="reel-sch-h"
        >
          <div className="l-reel__noise" aria-hidden />
          <div className="l-reel__safe l-reel__safe--narrow">
            <h2 id="reel-sch-h" className="l-reel__h2">
              {SCHEDULE.title}
            </h2>
            <p className="l-reel__body">{SCHEDULE.intro}</p>
            <ul className="l-reel__times">
              {SCHEDULE.sessions.map((s) => (
                <li key={s.name}>
                  <span className="l-reel__times__name">{s.name}</span>
                  <span className="l-reel__times__t">{s.time}</span>
                  <span className="l-reel__times__n">{s.note}</span>
                </li>
              ))}
            </ul>
            <p className="l-reel__fine">{SCHEDULE.footnote}</p>
          </div>
        </section>

        <section
          className="l-reel__frame l-reel__frame--3"
          id="admission"
          aria-labelledby="reel-admission-h"
        >
          <div className="l-reel__noise" aria-hidden />
          <div className="l-reel__safe l-reel__safe--narrow">
            <h2 id="reel-admission-h" className="l-reel__h2">
              {ADMISSION.title}
            </h2>
            <p className="l-reel__body">{ADMISSION.intro}</p>
            <AdmissionForm />
          </div>
        </section>

        <section
          className="l-reel__frame l-reel__frame--4"
          id="contact"
          aria-labelledby="reel-contact-h"
        >
          <div className="l-reel__noise" aria-hidden />
          <div className="l-reel__safe">
            <h2 id="reel-contact-h" className="l-reel__h2">
              {CONTACT.title}
            </h2>
            <p className="l-reel__body">{CONTACT.intro}</p>
            <p className="l-reel__addr">
              <AddressWithMapLink oneLine />
            </p>
            <p className="l-reel__addr">
              <a href={`tel:${SITE.phoneTel}`}>{SITE.phoneDisplay}</a>
              {' · '}
              <a href={`mailto:${SITE.email}`}>{SITE.email}</a>
            </p>
            <div className="l-reel__actions">
              <ContactActions />
            </div>
            <a
              className="l-reel__ig"
              href={SITE.featuredReel}
              target="_blank"
              rel="noopener noreferrer"
            >
              Watch the reel
            </a>
          </div>
        </section>
      </div>

      <div className="l-reel__footer">
        <SiteFooter />
      </div>
    </div>
  )
}
