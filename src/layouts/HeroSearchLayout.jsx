import { useCallback, useEffect, useState } from 'react'
import {
  AnimatePresence,
  motion as Motion,
  useReducedMotion,
} from 'framer-motion'
import { AddressWithMapLink } from '../components/AddressWithMapLink.jsx'
import { AdmissionSection } from '../components/AdmissionSection.jsx'
import { ContactActions } from '../components/ContactActions.jsx'
import { Reveal } from '../components/Reveal.jsx'
import { SiteFooter } from '../components/SiteFooter.jsx'
import {
  ABOUT,
  CLASSES,
  CONTACT,
  HERO_COPY,
  HERO_SEARCH,
  NAV,
  SCHEDULE,
  SITE,
  STATS,
} from '../data/siteContent.jsx'

const slideN = HERO_SEARCH.slides.length
const EASE = [0.16, 1, 0.3, 1]

export function HeroSearchLayout() {
  const [slide, setSlide] = useState(0)
  const reduce = useReducedMotion()

  const next = useCallback(() => setSlide((i) => (i + 1) % slideN), [])
  const prev = useCallback(
    () => setSlide((i) => (i - 1 + slideN) % slideN),
    []
  )
  const go = useCallback(
    (i) => {
      if (i >= 0 && i < slideN) setSlide(i)
    },
    []
  )

  useEffect(() => {
    if (reduce || slideN <= 1) return
    const t = setInterval(() => {
      setSlide((i) => (i + 1) % slideN)
    }, 8000)
    return () => clearInterval(t)
  }, [reduce])

  const onFind = (e) => {
    e.preventDefault()
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      <Motion.header
        className="header"
        style={{ position: 'relative', zIndex: 10, background: 'var(--header-bg)' }}
        initial={{ opacity: 0, y: -8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, ease: EASE }}
      >
        <div className="header__inner">
          <a className="logo" href="#top">
            <span className="logo__mark">{SITE.short}</span>
            <span className="logo__text">
              <span className="logo__name">{SITE.name}</span>
              <span className="logo__sub">{SITE.city}</span>
            </span>
          </a>
          <nav className="nav" aria-label="Primary">
            <ul className="nav__list">
              {NAV.map((item) => (
                <li key={item.href}>
                  <a href={item.href}>{item.label}</a>
                </li>
              ))}
            </ul>
          </nav>
          <a className="btn btn--header" href={`tel:${SITE.phoneTel}`}>
            Call us
          </a>
        </div>
      </Motion.header>

      <main id="top">
        <div className="hs-hero" aria-roledescription="carousel">
          <div className="hs-hero__layers" aria-hidden>
            {HERO_SEARCH.slides.map((s, i) => (
              <div
                key={String(i)}
                className={i === slide ? 'hs-hero__slide is-active' : 'hs-hero__slide'}
                style={{ backgroundImage: `url(${s.image})` }}
              />
            ))}
          </div>
          <div className="hs-hero__nav" aria-label="Slider controls">
            <button
              type="button"
              className="hs-hero__arr"
              onClick={prev}
              aria-label="Previous slide"
            >
              ‹
            </button>
            <button
              type="button"
              className="hs-hero__arr"
              onClick={next}
              aria-label="Next slide"
            >
              ›
            </button>
          </div>
          <div className="hs-hero__inner">
            <AnimatePresence mode="wait" initial={false}>
              <Motion.div
                key={slide}
                initial={reduce ? undefined : { opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={reduce ? undefined : { opacity: 0, y: -8 }}
                transition={{ duration: 0.4, ease: EASE }}
              >
                <p className="hs-hero__kicker">
                  {HERO_SEARCH.slides[slide].eyebrow}
                </p>
                <h1 className="hs-hero__h1">
                  {HERO_SEARCH.slides[slide].title}
                </h1>
                <p className="hs-hero__sub">
                  {HERO_SEARCH.slides[slide].sub}
                </p>
              </Motion.div>
            </AnimatePresence>
          </div>
          <div className="hs-hero__dots" role="tablist" aria-label="Slides">
            {HERO_SEARCH.slides.map((_, i) => (
              <button
                key={String(i)}
                type="button"
                role="tab"
                className={i === slide ? 'hs-hero__dot is-active' : 'hs-hero__dot'}
                aria-selected={i === slide}
                aria-label={`Slide ${i + 1}`}
                onClick={() => go(i)}
              />
            ))}
          </div>
        </div>

        <div className="hs-promo">
          <p style={{ margin: 0 }}>{HERO_SEARCH.promo}</p>
        </div>

        <section className="hs-find" id="search" aria-labelledby="find-class-title">
          <div className="hs-find__inner">
            <form
              id="hs-search"
              className="hs-find__form"
              onSubmit={onFind}
            >
              {HERO_SEARCH.searchFields.map((f) => (
                <div key={f.name} className="hs-find__field">
                  <label htmlFor={f.id}>{f.label}</label>
                  <select id={f.id} name={f.name} defaultValue="">
                    {f.options.map((o) => (
                      <option key={o.value + o.label} value={o.value}>
                        {o.label}
                      </option>
                    ))}
                  </select>
                </div>
              ))}
            </form>
            <div className="hs-find__aside">
              <h2 id="find-class-title">{HERO_SEARCH.find.title}</h2>
              <p>{HERO_SEARCH.find.sub}</p>
              <div className="hs-find__row">
                <button type="submit" className="hs-find__submit" form="hs-search">
                  {HERO_SEARCH.find.cta}
                </button>
              </div>
            </div>
          </div>
        </section>

        <section
          className="section"
          id="intro"
          aria-labelledby="intro-lede"
          style={{ paddingTop: '1.5rem' }}
        >
          <div className="section__inner">
            <p className="eyebrow">{HERO_COPY.eyebrow}</p>
            <h2 id="intro-lede" className="section__title" style={{ marginTop: '0.2rem' }}>
              Strong foundations in Maths, Physics &amp; Biology
            </h2>
            <p className="section__intro" style={{ marginTop: '0.35rem' }}>{HERO_COPY.lede}</p>
            <ul className="hero__stats" style={{ marginTop: '0.6rem' }} aria-label="Highlights">
              {STATS.map((s) => (
                <li key={s.k}>
                  <strong>{s.k}</strong>
                  <span>{s.v}</span>
                </li>
              ))}
            </ul>
            <div className="hero__actions" style={{ marginTop: '0.75rem' }}>
              <a className="btn btn--primary" href="#contact">Enquire / Visit</a>
              <a className="btn btn--ghost" href="#schedule">View batches</a>
            </div>
          </div>
        </section>

        <Reveal>
          <section className="section" id="about" aria-labelledby="about-title">
            <div className="section__inner">
              <h2 id="about-title" className="section__title">
                {ABOUT.title(SITE.short)}
              </h2>
              <p className="section__intro">{ABOUT.intro}</p>
              <ul className="pillars">
                {ABOUT.pillars.map((p) => (
                  <li key={p.title}>
                    <h3>{p.title}</h3>
                    <p>{p.text}</p>
                  </li>
                ))}
              </ul>
            </div>
          </section>
        </Reveal>

        <Reveal delay={0.04}>
          <section
            className="section section--alt"
            id="faculty"
            aria-labelledby="faculty-stub"
          >
            <div className="section__inner" style={{ maxWidth: 640 }}>
              <h2 id="faculty-stub" className="section__title">
                Faculty
              </h2>
              <p className="section__intro">
                Experienced teachers run our Maths, Physics, and Biology batches in small groups. For who
                exactly teaches your child’s section, ask when you
                {' '}
                <a href="#contact">enquire or visit</a>
                — we’ll confirm after counselling.
              </p>
            </div>
          </section>
        </Reveal>

        <Reveal delay={0.05}>
          <section
            className="section"
            id="classes"
            aria-labelledby="classes-title"
          >
            <div className="section__inner">
              <h2 id="classes-title" className="section__title">
                {CLASSES.title}
              </h2>
              <p className="section__intro">{CLASSES.intro}</p>
              <div className="cards">
                {CLASSES.items.map((c) => (
                  <article key={c.title} className="card">
                    <h3>{c.title}</h3>
                    <p>{c.text}</p>
                  </article>
                ))}
              </div>
            </div>
          </section>
        </Reveal>

        <Reveal delay={0.06}>
          <section className="section section--alt" id="schedule" aria-labelledby="schedule-title">
            <div className="section__inner">
              <h2 id="schedule-title" className="section__title">
                {SCHEDULE.title}
              </h2>
              <p className="section__intro">{SCHEDULE.intro}</p>
              <div className="schedule">
                {SCHEDULE.sessions.map((s) => (
                  <div key={s.name} className="schedule__block">
                    <h3>{s.name}</h3>
                    <p className="schedule__time">{s.time}</p>
                    <p className="schedule__note">{s.note}</p>
                  </div>
                ))}
              </div>
              <p className="fineprint">{SCHEDULE.footnote}</p>
            </div>
          </section>
        </Reveal>

        <Reveal delay={0.07}>
          <AdmissionSection sectionClassName="section" />
        </Reveal>

        <Reveal delay={0.08}>
          <section
            className="section section--alt"
            id="contact"
            aria-labelledby="contact-title"
          >
            <div className="section__inner section__inner--contact">
              <div>
                <h2 id="contact-title" className="section__title">
                  {CONTACT.title}
                </h2>
                <p className="section__intro">{CONTACT.intro}</p>
                <ul className="contact-list">
                  <li>
                    <span className="contact-list__label">Address</span>
                    <span className="contact-list__value">
                      <AddressWithMapLink />
                    </span>
                  </li>
                  <li>
                    <span className="contact-list__label">Phone</span>
                    <a
                      className="contact-list__value"
                      href={`tel:${SITE.phoneTel}`}
                    >
                      {SITE.phoneDisplay}
                    </a>
                  </li>
                  <li>
                    <span className="contact-list__label">Email</span>
                    <a
                      className="contact-list__value"
                      href={`mailto:${SITE.email}`}
                    >
                      {SITE.email}
                    </a>
                  </li>
                </ul>
              </div>
              <ContactActions />
            </div>
          </section>
        </Reveal>
      </main>

      <SiteFooter />
    </>
  )
}
