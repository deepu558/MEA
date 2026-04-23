import { motion as Motion } from 'framer-motion'
import { AddressWithMapLink } from '../components/AddressWithMapLink.jsx'
import { AdmissionForm } from '../components/AdmissionForm.jsx'
import { ContactActions } from '../components/ContactActions.jsx'
import { HeroTitle } from '../components/HeroTitle.jsx'
import { ImmersiveNav } from '../components/ImmersiveNav.jsx'
import { Reveal } from '../components/Reveal.jsx'
import { SplineBackground } from '../components/SplineBackground.jsx'
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

const slide = { initial: { opacity: 0, y: 20 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true, margin: '-8%' }, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } }

export function SplineGlassLayout() {
  return (
    <div className="l-imm l-imm--spline-glass">
      <div className="l-imm-spline-layer" aria-hidden>
        <SplineBackground />
      </div>
      <div className="l-imm-stack">
        <ImmersiveNav className="l-imm-nav l-imm-nav--glass" />
        <main id="top">
          <section className="l-imm-hero-spline" aria-labelledby="hero-title">
            <div className="l-imm-hero-spline__grid">
              <Motion.div className="l-imm-glass" {...slide}>
                <p className="eyebrow" style={{ marginTop: 0 }}>{HERO_COPY.eyebrow}</p>
                <HeroTitle id="hero-title" />
                <p className="hero__lede">{HERO_COPY.lede}</p>
                <div className="hero__actions">
                  <a className="btn btn--primary" href="#contact">Enquire / Visit</a>
                  <a className="btn btn--ghost" href="#schedule">View batches</a>
                </div>
              </Motion.div>
              <Motion.div className="l-imm-glass l-imm-glass--teal" {...slide} transition={{ ...slide.transition, delay: 0.06 }}>
                <p className="l-split-hero__card-l" style={{ color: 'inherit', opacity: 0.9 }}>{HERO_COPY.card.label}</p>
                <p className="l-split-hero__card-t" style={{ color: 'inherit' }}>{HERO_COPY.card.title}</p>
                <p className="l-split-hero__card-b" style={{ color: 'inherit' }}>{HERO_COPY.card.body}</p>
              </Motion.div>
            </div>
            <ul className="l-imm-hero-spline__stats" aria-label="Highlights">
              {STATS.map((s) => (
                <li key={s.k} className="l-imm-pill">
                  <strong>{s.k}</strong>
                  <span>{s.v}</span>
                </li>
              ))}
            </ul>
            <p className="l-imm-hint">Drag the 3D scene — built with Spline, framed like a Webflow glass hero.</p>
          </section>

          <Reveal>
            <section className="l-imm-rail" id="about" aria-labelledby="about-title">
              <h2 id="about-title" className="section__title">{ABOUT.title(SITE.short)}</h2>
              <p className="section__intro">{ABOUT.intro}</p>
              <ul className="l-imm-bento">
                {ABOUT.pillars.map((p) => (
                  <li key={p.title} className="l-imm-bento__cell">
                    <h3 className="l-split-h3" style={{ marginTop: 0 }}>{p.title}</h3>
                    <p className="l-split-p" style={{ margin: 0 }}>{p.text}</p>
                  </li>
                ))}
              </ul>
            </section>
          </Reveal>

          <Reveal delay={0.05}>
            <section className="l-imm-rail l-imm-rail--alt" id="classes" aria-labelledby="classes-title">
              <h2 id="classes-title" className="section__title">{CLASSES.title}</h2>
              <p className="section__intro">{CLASSES.intro}</p>
              <div className="l-imm-cards">
                {CLASSES.items.map((c) => (
                  <article key={c.title} className="l-imm-card">
                    <h3>{c.title}</h3>
                    <p>{c.text}</p>
                  </article>
                ))}
              </div>
            </section>
          </Reveal>

          <Reveal delay={0.08}>
            <section className="l-imm-rail" id="schedule" aria-labelledby="schedule-title">
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

          <Reveal delay={0.09}>
            <section className="l-imm-rail l-imm-rail--alt" id="admission" aria-labelledby="admission-title">
              <h2 id="admission-title" className="section__title">{ADMISSION.title}</h2>
              <p className="section__intro">{ADMISSION.intro}</p>
              <AdmissionForm />
            </section>
          </Reveal>

          <Reveal delay={0.1}>
            <section className="l-imm-rail" id="contact" aria-labelledby="contact-title">
              <div className="l-imm-rail__split">
                <div>
                  <h2 id="contact-title" className="section__title">{CONTACT.title}</h2>
                  <p className="section__intro">{CONTACT.intro}</p>
                  <p className="l-split-addr" style={{ margin: 0 }}>
                    <AddressWithMapLink oneLine />
                  </p>
                  <p className="l-split-addr" style={{ margin: '0.4rem 0' }}>
                    <a href={`tel:${SITE.phoneTel}`}>{SITE.phoneDisplay}</a>
                    {' · '}
                    <a href={`mailto:${SITE.email}`}>{SITE.email}</a>
                  </p>
                </div>
                <ContactActions />
              </div>
            </section>
          </Reveal>
        </main>
        <SiteFooter />
      </div>
    </div>
  )
}
