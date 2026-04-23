import { motion as Motion } from 'framer-motion'
import { AddressWithMapLink } from '../components/AddressWithMapLink.jsx'
import { AdmissionForm } from '../components/AdmissionForm.jsx'
import { ContactActions } from '../components/ContactActions.jsx'
import { HeroTitle } from '../components/HeroTitle.jsx'
import { ImmersiveNav } from '../components/ImmersiveNav.jsx'
import { Reveal } from '../components/Reveal.jsx'
import { SplineBackground } from '../components/SplineBackground.jsx'
import { SiteFooter } from '../components/SiteFooter.jsx'
import { CLASSROOM_BACKGROUNDS } from '../config/immersive.js'
import { useLenis } from '../hooks/useLenis.js'
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

export function SplineParallaxLayout() {
  useLenis(true)

  return (
    <div className="l-imm l-imm--spline-parallax">
      <ImmersiveNav className="l-imm-nav l-imm-nav--solid" />
      <main id="top">
        <section className="l-imm-spline-hero" aria-labelledby="hero-title">
          <div className="l-imm-spline-hero__scene">
            <SplineBackground />
          </div>
          <div className="l-imm-spline-hero__copy">
            <p className="eyebrow">{HERO_COPY.eyebrow}</p>
            <HeroTitle id="hero-title" />
            <p className="hero__lede">{HERO_COPY.lede}</p>
            <div className="hero__actions">
              <a className="btn btn--primary" href="#contact">Enquire / Visit</a>
              <a className="btn btn--ghost" href="#schedule">View batches</a>
            </div>
            <ul className="l-imm-spline-hero__stats" aria-label="Highlights">
              {STATS.map((s) => (
                <li key={s.k}><strong>{s.k}</strong><span>{s.v}</span></li>
              ))}
            </ul>
          </div>
        </section>

        <section
          className="l-imm-classroom"
          id="about"
          aria-labelledby="about-title"
          style={{ '--imm-bg': `url(${CLASSROOM_BACKGROUNDS[0]})` }}
        >
          <div className="l-imm-classroom__veil" />
          <div className="l-imm-classroom__inner">
            <h2 id="about-title" className="l-imm-classroom__h2">{ABOUT.title(SITE.short)}</h2>
            <p className="l-imm-classroom__intro">{ABOUT.intro}</p>
            <ul className="l-imm-classroom__bento">
              {ABOUT.pillars.map((p, i) => (
                <Motion.li
                  key={p.title}
                  className="l-imm-classroom__card"
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-8%' }}
                  transition={{ duration: 0.45, delay: i * 0.05, ease: [0.16, 1, 0.3, 1] }}
                >
                  <span className="l-imm-classroom__tag">{`0${i + 1}`}</span>
                  <h3 className="l-split-h3" style={{ marginTop: 0 }}>{p.title}</h3>
                  <p className="l-split-p" style={{ margin: 0 }}>{p.text}</p>
                </Motion.li>
              ))}
            </ul>
          </div>
        </section>

        <section
          className="l-imm-classroom l-imm-classroom--short"
          id="classes"
          aria-labelledby="classes-title"
          style={{ '--imm-bg': `url(${CLASSROOM_BACKGROUNDS[1]})` }}
        >
          <div className="l-imm-classroom__veil" />
          <div className="l-imm-classroom__inner">
            <h2 id="classes-title" className="l-imm-classroom__h2">{CLASSES.title}</h2>
            <p className="l-imm-classroom__intro">{CLASSES.intro}</p>
            <div className="l-imm-cards l-imm-cards--on-dark">
              {CLASSES.items.map((c) => (
                <article key={c.title} className="l-imm-card">
                  <h3>{c.title}</h3>
                  <p>{c.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <Reveal>
          <section className="l-imm-rail l-imm-rail--flush" id="schedule" aria-labelledby="schedule-title">
            <h2 id="schedule-title" className="section__title">{SCHEDULE.title}</h2>
            <p className="section__intro">{SCHEDULE.intro}</p>
            <div className="l-imm-sch">
              {SCHEDULE.sessions.map((s) => (
                <div key={s.name} className="l-imm-sch__block">
                  <h3>{s.name}</h3>
                  <p className="schedule__time">{s.time}</p>
                  <p className="l-split-fine" style={{ margin: 0 }}>{s.note}</p>
                </div>
              ))}
            </div>
            <p className="fineprint">{SCHEDULE.footnote}</p>
          </section>
        </Reveal>

        <Reveal>
          <section className="l-imm-rail l-imm-rail--flush" id="admission" aria-labelledby="admission-title">
            <h2 id="admission-title" className="section__title">{ADMISSION.title}</h2>
            <p className="section__intro">{ADMISSION.intro}</p>
            <AdmissionForm />
          </section>
        </Reveal>

        <section
          className="l-imm-classroom l-imm-classroom--short"
          id="contact"
          aria-labelledby="contact-title"
          style={{ '--imm-bg': `url(${CLASSROOM_BACKGROUNDS[3]})` }}
        >
          <div className="l-imm-classroom__veil" />
          <div className="l-imm-classroom__inner l-imm-classroom__inner--wide">
            <h2 id="contact-title" className="l-imm-classroom__h2">{CONTACT.title}</h2>
            <p className="l-imm-classroom__intro">{CONTACT.intro}</p>
            <div className="l-imm-cta">
              <div>
                <p className="l-split-addr" style={{ margin: 0, color: 'inherit' }}>
                  <AddressWithMapLink oneLine />
                </p>
                <p className="l-split-addr" style={{ margin: '0.4rem 0', color: 'inherit' }}>
                  <a href={`tel:${SITE.phoneTel}`}>{SITE.phoneDisplay}</a>
                  {' · '}
                  <a href={`mailto:${SITE.email}`}>{SITE.email}</a>
                </p>
              </div>
              <ContactActions />
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  )
}
