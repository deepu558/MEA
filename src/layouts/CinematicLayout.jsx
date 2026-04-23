import { motion as Motion } from 'framer-motion'
import { AddressWithMapLink } from '../components/AddressWithMapLink.jsx'
import { AdmissionForm } from '../components/AdmissionForm.jsx'
import { ContactActions } from '../components/ContactActions.jsx'
import { HeroTitle } from '../components/HeroTitle.jsx'
import { Reveal } from '../components/Reveal.jsx'
import { SiteFooter } from '../components/SiteFooter.jsx'
import {
  ADMISSION,
  ABOUT,
  CLASSES,
  CONTACT,
  HERO_COPY,
  NAV,
  SCHEDULE,
  SITE,
  STATS,
} from '../data/siteContent.jsx'

export function CinematicLayout() {
  return (
    <>
      <header className="l-nex-hdr l-flo-hdr" style={{ position: 'sticky', top: 0, zIndex: 5 }}>
        <div className="l-flo-hdr__row" style={{ maxWidth: 1200, margin: '0 auto', width: '100%' }}>
          <a className="logo" href="#top" style={{ textDecoration: 'none' }}>
            <span className="logo__mark">{SITE.short}</span>
            <span className="logo__name" style={{ marginLeft: 8, color: 'var(--ink)', fontWeight: 600 }}>{SITE.name}</span>
          </a>
          <nav style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }} aria-label="Primary">
            {NAV.map((n) => (
              <a key={n.href} href={n.href} style={{ fontSize: 13, fontWeight: 600 }}>{n.label}</a>
            ))}
          </nav>
          <a className="btn btn--header" href={`tel:${SITE.phoneTel}`}>Call</a>
        </div>
      </header>

      <main className="l-cin" id="top">
        <section className="l-cin-sec l-cin-sec--tint" aria-labelledby="hero-title">
          <div className="l-cin-sec__in l-cin-sec--alt">
            <p className="eyebrow" style={{ textAlign: 'center', display: 'block' }}>{HERO_COPY.eyebrow}</p>
            <HeroTitle id="hero-title" className="l-cin-hero--scale" />
            <p className="l-cin-p" style={{ textAlign: 'center', maxWidth: '36ch', margin: '0.6rem auto' }}>{HERO_COPY.lede}</p>
            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 8, marginTop: 12 }}>
              <Motion.a
                className="btn btn--primary"
                href="#contact"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: 'spring', stiffness: 400, damping: 22 }}
              >
                Enquire / Visit
              </Motion.a>
              <a className="btn btn--ghost" href="#schedule">Batches</a>
            </div>
            <p className="l-split-hero__card-l" style={{ textAlign: 'center', marginTop: 24, letterSpacing: '0.1em' }}>{HERO_COPY.card.label}</p>
            <p className="l-cin-p" style={{ textAlign: 'center', maxWidth: '50ch', margin: '0.4rem auto' }}>{HERO_COPY.card.body}</p>
          </div>
        </section>

        <section className="l-cin-sec l-cin-sec--deep" aria-label="At a glance">
          <div className="l-cin-sec__veil" aria-hidden="true" />
          <div className="l-cin-sec__in" style={{ maxWidth: 900, margin: '0 auto' }}>
            <h2 className="l-cin-h2" style={{ textAlign: 'center', color: 'inherit', fontSize: 13, letterSpacing: '0.2em', textTransform: 'uppercase' }}>Highlights</h2>
            <div className="l-cin-stats">
              {STATS.map((s) => (
                <div key={s.k} className="l-cin-stat">
                  <strong>{s.k}</strong>
                  <span>{s.v}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="l-cin-sec" id="about">
          <div className="l-cin-sec__in" style={{ maxWidth: 720, margin: '0 auto' }}>
            <Reveal>
              <h2 className="l-cin-h2" id="about-title" style={{ fontSize: 'clamp(1.5rem, 3vw, 2rem)' }}>{ABOUT.title(SITE.short)}</h2>
              <p className="l-cin-p">{ABOUT.intro}</p>
            </Reveal>
            <div className="l-cin-dual" style={{ marginTop: 16 }}>
              {ABOUT.pillars.map((p) => (
                <Reveal key={p.title} delay={0.05} className="l-per-tile" style={{ padding: '0.6rem' }}>
                  <h3 className="l-split-h3">{p.title}</h3>
                  <p className="l-cin-p" style={{ fontSize: '0.9rem' }}>{p.text}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section className="l-cin-sec l-cin-sec--tint" id="classes">
          <div className="l-cin-sec__in" style={{ maxWidth: 800, margin: '0 auto' }}>
            <h2 className="l-cin-h2" id="classes-title" style={{ fontSize: 'clamp(1.4rem, 2.5vw, 1.75rem)' }}>{CLASSES.title}</h2>
            <p className="l-cin-p">{CLASSES.intro}</p>
            <div className="l-cin-dual">
              {CLASSES.items.map((c) => (
                <Reveal key={c.title} className="l-nex-card" style={{ padding: '0.8rem' }}>
                  <h3 className="l-split-h3">{c.title}</h3>
                  <p className="l-cin-p" style={{ fontSize: 14 }}>{c.text}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section className="l-cin-sec" id="schedule">
          <div className="l-cin-sec__in" style={{ maxWidth: 600, margin: '0 auto' }}>
            <h2 className="l-cin-h2" id="schedule-title">{SCHEDULE.title}</h2>
            <p className="l-cin-p" style={{ textAlign: 'center' }}>{SCHEDULE.intro}</p>
            <div style={{ display: 'grid', gap: 8, marginTop: 8 }}>
              {SCHEDULE.sessions.map((s) => (
                <Reveal key={s.name} className="l-nex-card" style={{ padding: '0.7rem' }}>
                  <h3 className="l-split-h3" style={{ margin: 0 }}>{s.name}</h3>
                  <p className="schedule__time" style={{ margin: '0.1rem 0' }}>{s.time}</p>
                  <p className="l-split-fine" style={{ margin: 0 }}>{s.note}</p>
                </Reveal>
              ))}
            </div>
            <p className="l-split-fine" style={{ textAlign: 'center', marginTop: 12 }}>{SCHEDULE.footnote}</p>
          </div>
        </section>

        <section className="l-cin-sec l-cin-sec--tint" id="admission" aria-labelledby="admission-title">
          <div className="l-cin-sec__in" style={{ maxWidth: 640, margin: '0 auto' }}>
            <h2 className="l-cin-h2" id="admission-title">{ADMISSION.title}</h2>
            <p className="l-cin-p">{ADMISSION.intro}</p>
            <AdmissionForm />
          </div>
        </section>

        <section className="l-cin-sec l-cin-sec--deep" id="contact">
          <div className="l-cin-sec__in" style={{ textAlign: 'center', maxWidth: 500, margin: '0 auto' }}>
            <h2 className="l-cin-h2" id="contact-title" style={{ color: 'inherit' }}>{CONTACT.title}</h2>
            <p className="l-cin-p" style={{ textAlign: 'center' }}>{CONTACT.intro}</p>
            <p className="l-cin-p" style={{ fontSize: 14, lineHeight: 1.5 }}>
              <AddressWithMapLink />
            </p>
            <p className="l-cin-p">
              <a href={`tel:${SITE.phoneTel}`}>{SITE.phoneDisplay}</a> · <a href={`mailto:${SITE.email}`}>{SITE.email}</a>
            </p>
            <div style={{ maxWidth: 260, display: 'flex', flexDirection: 'column', margin: '0.6rem auto 0' }}>
              <ContactActions />
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </>
  )
}
