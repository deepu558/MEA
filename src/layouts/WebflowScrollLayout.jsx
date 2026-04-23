import { motion as Motion } from 'framer-motion'
import { AdmissionForm } from '../components/AdmissionForm.jsx'
import { ContactActions } from '../components/ContactActions.jsx'
import { HeroTitle } from '../components/HeroTitle.jsx'
import { ImmersiveNav } from '../components/ImmersiveNav.jsx'
import { Reveal } from '../components/Reveal.jsx'
import { SiteFooter } from '../components/SiteFooter.jsx'
import { WEBFLOW_PUBLISH_URL } from '../config/immersive.js'
import { useLenis } from '../hooks/useLenis.js'
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

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
}

const child = {
  hidden: { opacity: 0, y: 22 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } },
}

export function WebflowScrollLayout() {
  useLenis(true)
  const embed = WEBFLOW_PUBLISH_URL && /^https:\/\//i.test(WEBFLOW_PUBLISH_URL)

  return (
    <div className="l-imm l-imm--wf">
      <ImmersiveNav className="l-imm-nav l-imm-nav--wf" />

      {embed && (
        <div className="l-imm-wf-embed" aria-label="Webflow site preview">
          <iframe
            title="Webflow published site"
            src={WEBFLOW_PUBLISH_URL}
            className="l-imm-wf-embed__frame"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
          <a className="l-imm-wf-embed__open" href={WEBFLOW_PUBLISH_URL} target="_blank" rel="noreferrer">
            Open in new tab
          </a>
        </div>
      )}

      <main id="top" className="l-imm-wf-main">
        <section className="l-imm-wf-hero" aria-labelledby="hero-title">
          <Motion.div
            className="l-imm-wf-hero__grid"
            variants={stagger}
            initial="hidden"
            animate="show"
          >
            <Motion.div className="l-imm-wf-hero__col" variants={child}>
              <p className="l-imm-wf-kicker">{HERO_COPY.eyebrow}</p>
              <HeroTitle id="hero-title" className="l-imm-wf-title" />
              <p className="l-imm-wf-lede">{HERO_COPY.lede}</p>
              <div className="l-imm-wf-cta">
                <a className="btn btn--primary" href="#contact">Enquire / Visit</a>
                <a className="btn btn--ghost" href="#contact-wf">Webflow + React</a>
              </div>
            </Motion.div>
            <Motion.div className="l-imm-wf-panels" variants={child}>
              {STATS.map((s) => (
                <div key={s.k} className="l-imm-wf-metric">
                  <span className="l-imm-wf-metric__k">{s.k}</span>
                  <span className="l-imm-wf-metric__v">{s.v}</span>
                </div>
              ))}
            </Motion.div>
          </Motion.div>
        </section>

        <section className="l-imm-wf-sticky" aria-labelledby="wf-bridge">
          <div className="l-imm-wf-sticky__rail" id="contact-wf">
            <h2 id="wf-bridge" className="l-imm-wf-h2">Webflow for marketing, Vite for the app</h2>
            <p className="l-imm-wf-p">
              Ship scroll choreography and CMS-led landing pages in Webflow, then mount this React build for tailored
              class routing — or add a Spline stage as a full-viewport background layer.
            </p>
            <p className="l-imm-wf-p sm">
              Set <code className="l-imm-wf-code">VITE_WEBFLOW_URL</code> to your published collection URL to show the
              live embed above. Navigation below mirrors your sections for quick testing without leaving this preview.
            </p>
            <ul className="l-imm-wf-mini">
              {NAV.map((n) => (
                <li key={n.href}>
                  <a href={n.href}>{n.label}</a>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="l-imm-wf-horizontal" id="about" aria-labelledby="about-title">
          <h2 id="about-title" className="l-imm-wf-h2 l-imm-wf-h2--inline">{ABOUT.title(SITE.short)}</h2>
          <p className="l-imm-wf-p">{ABOUT.intro}</p>
          <div className="l-imm-wf-scroller" role="region" aria-label="Teaching pillars" tabIndex={0}>
            {ABOUT.pillars.map((p, i) => (
              <Motion.article
                key={p.title}
                className="l-imm-wf-tile"
                initial={{ opacity: 0, scale: 0.96 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
              >
                <span className="l-imm-wf-tile__i">{`0${i + 1}`}</span>
                <h3 className="l-split-h3" style={{ margin: '0.5rem 0 0.3rem' }}>{p.title}</h3>
                <p className="l-split-p sm" style={{ margin: 0 }}>{p.text}</p>
              </Motion.article>
            ))}
          </div>
        </section>

        <Reveal>
          <section className="l-imm-wf-rail" id="classes" aria-labelledby="classes-title">
            <h2 id="classes-title" className="l-imm-wf-h2">{CLASSES.title}</h2>
            <p className="l-imm-wf-p">{CLASSES.intro}</p>
            <div className="l-imm-wf-cols">
              {CLASSES.items.map((c) => (
                <div key={c.title} className="l-imm-wf-cols__cell">
                  <h3 className="l-split-h3" style={{ marginTop: 0 }}>{c.title}</h3>
                  <p className="l-split-p" style={{ margin: 0 }}>{c.text}</p>
                </div>
              ))}
            </div>
          </section>
        </Reveal>

        <Reveal delay={0.04}>
          <section className="l-imm-wf-rail l-imm-wf-rail--alt" id="schedule" aria-labelledby="schedule-title">
            <h2 id="schedule-title" className="l-imm-wf-h2">{SCHEDULE.title}</h2>
            <p className="l-imm-wf-p">{SCHEDULE.intro}</p>
            <ol className="l-imm-wf-steps">
              {SCHEDULE.sessions.map((s) => (
                <li key={s.name}>
                  <span className="l-imm-wf-steps__name">{s.name}</span>
                  <span className="l-imm-wf-steps__time">{s.time}</span>
                  <span className="l-imm-wf-steps__note">{s.note}</span>
                </li>
              ))}
            </ol>
            <p className="l-imm-wf-foot">{SCHEDULE.footnote}</p>
          </section>
        </Reveal>

        <Reveal delay={0.05}>
          <section className="l-imm-wf-rail" id="admission" aria-labelledby="admission-title">
            <h2 id="admission-title" className="l-imm-wf-h2">{ADMISSION.title}</h2>
            <p className="l-imm-wf-p">{ADMISSION.intro}</p>
            <AdmissionForm />
          </section>
        </Reveal>

        <Reveal delay={0.06}>
          <section className="l-imm-wf-rail" id="contact" aria-labelledby="contact-title">
            <div className="l-imm-wf-end">
              <div>
                <h2 id="contact-title" className="l-imm-wf-h2">{CONTACT.title}</h2>
                <p className="l-imm-wf-p">{CONTACT.intro}</p>
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
  )
}
