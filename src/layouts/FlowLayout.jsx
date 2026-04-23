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

export function FlowLayout() {
  return (
    <>
      <header className="l-flo-hdr" style={{ position: 'sticky', top: 0, zIndex: 8, backdropFilter: 'blur(8px)' }}>
        <div className="l-flo-hdr__row" style={{ maxWidth: 1120, width: '100%' }}>
          <a className="logo" href="#top" style={{ textDecoration: 'none' }}>
            <span className="logo__mark">{SITE.short}</span>
            <span className="logo__name" style={{ marginLeft: 8, fontWeight: 800, color: 'var(--ink)' }}>{SITE.name}</span>
          </a>
          <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
            {NAV.map((n) => (
              <Motion.a
                key={n.href}
                href={n.href}
                whileHover={{ y: -1 }}
                transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                style={{ fontSize: 13, fontWeight: 700, textDecoration: 'none', color: 'var(--ink-muted)' }}
              >
                {n.label}
              </Motion.a>
            ))}
          </div>
          <a className="btn btn--header" href={`tel:${SITE.phoneTel}`}>Call us</a>
        </div>
      </header>

      <main id="top" style={{ maxWidth: 1120, margin: '0 auto', padding: '0 1.1rem 2rem' }}>
        <div className="l-flo-hero">
          <p className="eyebrow">{HERO_COPY.eyebrow}</p>
          <HeroTitle id="hero-title" className="hero__title" />
          <p className="l-split-hero__lede" style={{ maxWidth: 40 * 8 }}>{HERO_COPY.lede}</p>
          <a className="btn btn--primary" href="#contact" style={{ marginTop: 4, marginRight: 8, display: 'inline-flex' }}>Enquire</a>
          <a className="btn btn--ghost" href="#schedule" style={{ display: 'inline-flex' }}>Schedules</a>
        </div>

        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, margin: '0.8rem 0' }}>
          {STATS.map((s) => (
            <span key={s.k} className="l-aur-pill__item" style={{ fontSize: 12, fontWeight: 700, color: 'var(--teal)' }}>
              {s.k} <span style={{ color: 'var(--ink-muted)', fontWeight: 500 }}>· {s.v}</span>
            </span>
          ))}
        </div>

        <h2 className="l-split-h2" id="about" style={{ marginTop: 16 }}>Why {SITE.short}</h2>
        <p className="l-split-p" style={{ marginBottom: 8 }}>{ABOUT.intro}</p>
        <div className="l-flo-scroll" role="region" aria-label="Teaching approach">
          {ABOUT.pillars.map((p, i) => (
            <div key={p.title} className="l-flo-pill" role="article">
              <b>{`0${i + 1}`}</b>
              <h3 className="l-split-h3" style={{ fontSize: 15, margin: '0.1rem 0' }}>{p.title}</h3>
              <p className="l-split-fine" style={{ lineHeight: 1.35, margin: 0 }}>{p.text}</p>
            </div>
          ))}
        </div>

        <Reveal id="classes" style={{ marginTop: 20 }}>
          <h2 className="l-split-h2" id="classes-title">{CLASSES.title}</h2>
          <p className="l-split-p">{CLASSES.intro}</p>
          <div className="l-flo-subj">
            {CLASSES.items.map((c) => (
              <div key={c.title} className="l-flo-card">
                <h3 className="l-split-h3" style={{ margin: 0 }}>{c.title}</h3>
                <p className="l-split-p sm" style={{ margin: 0 }}>{c.text}</p>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal id="schedule" style={{ marginTop: 20 }} delay={0.05}>
          <h2 className="l-split-h2" id="schedule-title">{SCHEDULE.title}</h2>
          <p className="l-split-p">{SCHEDULE.intro}</p>
          <div className="l-flo-river" aria-label="Session times">
            {SCHEDULE.sessions.map((s) => (
              <div key={s.name} className="l-flo-step">
                <h3 className="l-split-h3" style={{ margin: 0, fontSize: 16 }}>{s.name}</h3>
                <p className="schedule__time" style={{ margin: '0.1rem 0' }}>{s.time}</p>
                <p className="l-split-fine" style={{ margin: 0 }}>{s.note}</p>
              </div>
            ))}
          </div>
          <p className="l-split-fine" style={{ marginTop: 8 }}>{SCHEDULE.footnote}</p>
        </Reveal>

        <Reveal id="admission" delay={0.06} style={{ marginTop: 20 }}>
          <h2 className="l-split-h2" id="admission-title">{ADMISSION.title}</h2>
          <p className="l-split-p">{ADMISSION.intro}</p>
          <AdmissionForm />
        </Reveal>

        <Reveal id="contact" delay={0.06} style={{ marginTop: 20 }}>
          <h2 className="l-split-h2" id="contact-title">{CONTACT.title}</h2>
          <p className="l-split-p">{CONTACT.intro}</p>
          <p className="l-split-addr" style={{ margin: '0.4rem 0' }}>
            <AddressWithMapLink oneLine />
          </p>
          <p className="l-split-p sm">
            <a href={`tel:${SITE.phoneTel}`}>{SITE.phoneDisplay}</a> · <a href={`mailto:${SITE.email}`}>{SITE.email}</a>
          </p>
          <ContactActions />
        </Reveal>
      </main>

      <SiteFooter />
    </>
  )
}
