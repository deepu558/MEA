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

const hdr = { initial: { y: -16, opacity: 0 }, animate: { y: 0, opacity: 1 }, transition: { duration: 0.45, ease: [0.16, 1, 0.3, 1] } }

export function AuroraLayout() {
  return (
    <div className="l-aur">
      <div className="l-aur__mesh" aria-hidden="true" />
      <div className="l-aur__noise" aria-hidden="true" />
      <div className="l-aur__content">
        <Motion.header className="l-aur-hdr" {...hdr}>
          <div className="l-aur-hdr__inner">
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
          <div className="l-aur-hero">
            <div className="l-aur-glass" style={{ padding: '1.1rem 1rem 1.2rem' }}>
              <p className="eyebrow" style={{ marginTop: 0 }}>{HERO_COPY.eyebrow}</p>
              <HeroTitle id="hero-title" />
              <p className="hero__lede" style={{ marginBottom: '0.8rem' }}>{HERO_COPY.lede}</p>
              <div className="hero__actions" style={{ marginBottom: 0 }}>
                <a className="btn btn--primary" href="#contact">Enquire / Visit</a>
                <a className="btn btn--ghost" href="#schedule">View batches</a>
              </div>
            </div>
            <div>
              <div className="l-aur-glass l-aur-glass--accent" style={{ padding: '1.1rem 1rem' }}>
                <p className="l-split-hero__card-l" style={{ color: 'inherit', opacity: 0.9 }}>{HERO_COPY.card.label}</p>
                <p className="l-split-hero__card-t" style={{ color: 'inherit' }}>{HERO_COPY.card.title}</p>
                <p className="l-split-hero__card-b" style={{ color: 'inherit' }}>{HERO_COPY.card.body}</p>
              </div>
              <div className="l-aur-statrow">
                {STATS.map((s) => (
                  <div key={s.k} className="l-aur-stat l-aur-glass" style={{ padding: '0.5rem' }}>
                    <strong>{s.k}</strong>
                    <span>{s.v}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <Reveal className="l-aur-sec" id="about">
            <h2 className="section__title" style={{ marginTop: 0 }}>{ABOUT.title(SITE.short)}</h2>
            <p className="section__intro" style={{ marginBottom: '0.75rem' }}>{ABOUT.intro}</p>
            <div className="l-aur-pill">
              {ABOUT.pillars.map((p) => (
                <div key={p.title} className="l-aur-pill__item">
                  <h3>{p.title}</h3>
                  <p>{p.text}</p>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal className="l-aur-sec" id="classes" delay={0.06}>
            <h2 className="section__title" style={{ marginTop: 0 }}>{CLASSES.title}</h2>
            <p className="section__intro" style={{ marginBottom: '0.5rem' }}>{CLASSES.intro}</p>
            <div className="l-aur-grid2">
              {CLASSES.items.map((c) => (
                <div key={c.title} className="l-aur-glass" style={{ padding: '0.8rem' }}>
                  <h3 className="l-split-h3" style={{ marginTop: 0 }}>{c.title}</h3>
                  <p className="l-split-p" style={{ margin: 0, fontSize: '0.9rem' }}>{c.text}</p>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal className="l-aur-sec" id="schedule" delay={0.1}>
            <h2 className="section__title" style={{ marginTop: 0 }}>{SCHEDULE.title}</h2>
            <p className="section__intro">{SCHEDULE.intro}</p>
            <div className="l-aur-sch">
              {SCHEDULE.sessions.map((s) => (
                <div key={s.name} className="l-aur-glass" style={{ padding: '0.7rem' }}>
                  <h3 className="l-split-h3" style={{ marginTop: 0 }}>{s.name}</h3>
                  <p className="schedule__time" style={{ margin: '0.1rem 0' }}>{s.time}</p>
                  <p className="l-split-fine" style={{ margin: 0 }}>{s.note}</p>
                </div>
              ))}
            </div>
            <p className="fineprint">{SCHEDULE.footnote}</p>
          </Reveal>

          <Reveal className="l-aur-sec" id="admission" delay={0.1}>
            <h2 className="section__title" style={{ marginTop: 0 }} id="admission-title">{ADMISSION.title}</h2>
            <p className="section__intro">{ADMISSION.intro}</p>
            <AdmissionForm />
          </Reveal>

          <Reveal className="l-aur-sec" id="contact" delay={0.1}>
            <h2 className="section__title" style={{ marginTop: 0 }}>{CONTACT.title}</h2>
            <p className="section__intro">{CONTACT.intro}</p>
            <div className="l-aur-glass" style={{ padding: '0.9rem', marginBottom: '0.6rem' }}>
              <p className="l-split-addr" style={{ margin: 0 }}>
                <AddressWithMapLink oneLine />
              </p>
              <p className="l-split-addr" style={{ margin: '0.3rem 0' }}>
                <a href={`tel:${SITE.phoneTel}`}>{SITE.phoneDisplay}</a> · <a href={`mailto:${SITE.email}`}>{SITE.email}</a>
              </p>
            </div>
            <ContactActions />
          </Reveal>
        </main>

        <SiteFooter />
      </div>
    </div>
  )
}
