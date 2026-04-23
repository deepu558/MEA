import { motion as Motion } from 'framer-motion'
import { AddressWithMapLink } from '../components/AddressWithMapLink.jsx'
import { AdmissionForm } from '../components/AdmissionForm.jsx'
import { ContactActions } from '../components/ContactActions.jsx'
import { HeroTitle } from '../components/HeroTitle.jsx'
import { Reveal } from '../components/Reveal.jsx'
import { SiteFooter } from '../components/SiteFooter.jsx'
import {
  ABOUT,
  ADMISSION,
  CLASSES,
  CONTACT,
  HERO_COPY,
  NAV,
  SCHEDULE,
  SITE,
  STATS,
} from '../data/siteContent.jsx'

export function SplitLayout() {
  return (
    <>
      <Motion.header
        className="l-split-top"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="l-split-top__row">
          <a className="l-split-logo" href="#top">
            <span className="l-split-logo__badge">{SITE.short}</span>
            <div>
              <div className="l-split-logo__name">{SITE.name}</div>
              <div className="l-split-logo__sub">{SITE.city}</div>
            </div>
          </a>
          <nav className="l-split-nav" aria-label="Primary">
            {NAV.map((n) => (
              <a key={n.href} href={n.href}>
                {n.label}
              </a>
            ))}
          </nav>
        </div>
      </Motion.header>

      <div className="l-split" id="top">
        <div className="l-split-main">
          <section className="l-split-hero" aria-labelledby="hero-title">
            <p className="l-split-eyebrow">{HERO_COPY.eyebrow}</p>
            <HeroTitle id="hero-title" className="l-split-hero__title" />
            <p className="l-split-hero__lede">{HERO_COPY.lede}</p>
            <div className="l-split-hero__ctas">
              <a className="btn btn--primary" href="#contact">
                Enquire / Visit
              </a>
              <a className="btn btn--ghost" href="#schedule">
                See timings
              </a>
            </div>
            <div className="l-split-hero__card">
              <p className="l-split-hero__card-l">{HERO_COPY.card.label}</p>
              <p className="l-split-hero__card-t">{HERO_COPY.card.title}</p>
              <p className="l-split-hero__card-b">{HERO_COPY.card.body}</p>
            </div>
          </section>

          <Reveal>
          <section className="l-split-section" id="about">
            <h2 className="l-split-h2">{ABOUT.title(SITE.short)}</h2>
            <p className="l-split-p">{ABOUT.intro}</p>
            <ol className="l-split-ol">
              {ABOUT.pillars.map((p, i) => (
                <li key={p.title}>
                  <span className="l-split-ol__n">{String(i + 1).padStart(2, '0')}</span>
                  <div>
                    <h3 className="l-split-h3">{p.title}</h3>
                    <p className="l-split-p sm">{p.text}</p>
                  </div>
                </li>
              ))}
            </ol>
          </section>
          </Reveal>

          <Reveal delay={0.04}>
          <section className="l-split-section l-split-section--tint" id="classes">
            <h2 className="l-split-h2">{CLASSES.title}</h2>
            <p className="l-split-p">{CLASSES.intro}</p>
            <div className="l-split-two">
              {CLASSES.items.map((c) => (
                <div key={c.title} className="l-split-subject">
                  <h3 className="l-split-h3">{c.title}</h3>
                  <p className="l-split-p sm">{c.text}</p>
                </div>
              ))}
            </div>
          </section>
          </Reveal>

          <Reveal delay={0.06}>
          <section className="l-split-section" id="schedule">
            <h2 className="l-split-h2">{SCHEDULE.title}</h2>
            <p className="l-split-p">{SCHEDULE.intro}</p>
            <div className="l-split-two">
              {SCHEDULE.sessions.map((s) => (
                <div key={s.name} className="l-split-subject">
                  <h3 className="l-split-h3">{s.name}</h3>
                  <p className="schedule__time" style={{ margin: '0.1rem 0' }}>{s.time}</p>
                  <p className="l-split-p sm" style={{ margin: 0 }}>{s.note}</p>
                </div>
              ))}
            </div>
            <p className="l-split-fine">{SCHEDULE.footnote}</p>
          </section>
          </Reveal>

          <Reveal delay={0.07}>
          <section className="l-split-section l-split-section--tint" id="admission" aria-labelledby="admission-title">
            <h2 className="l-split-h2" id="admission-title">{ADMISSION.title}</h2>
            <p className="l-split-p">{ADMISSION.intro}</p>
            <AdmissionForm />
          </section>
          </Reveal>

          <Reveal delay={0.08}>
          <section className="l-split-section" id="contact">
            <h2 className="l-split-h2">{CONTACT.title}</h2>
            <p className="l-split-p">{CONTACT.intro}</p>
            <div className="l-split-addr">
              <AddressWithMapLink />
            </div>
            <p className="l-split-p sm">
              <a href={`tel:${SITE.phoneTel}`}>{SITE.phoneDisplay}</a>
              {' · '}
              <a href={`mailto:${SITE.email}`}>{SITE.email}</a>
            </p>
            <ContactActions className="l-split-mobile-actions" />
          </section>
          </Reveal>
        </div>

        <aside className="l-split-rail" aria-label="At a glance">
          <div className="l-split-rail__sticky">
            <h3 className="l-split-rail__h">Highlights</h3>
            <ul className="l-split-rail-stats">
              {STATS.map((s) => (
                <li key={s.k}>
                  <strong>{s.k}</strong>
                  <span>{s.v}</span>
                </li>
              ))}
            </ul>
            <div className="l-split-rail-sched" id="rail-schedule">
              <h3 className="l-split-rail__h">Batches</h3>
              {SCHEDULE.sessions.map((s) => (
                <div key={s.name} className="l-split-rail-block">
                  <p className="l-split-rail-block__l">{s.name}</p>
                  <p className="l-split-rail-block__t">{s.time}</p>
                  <p className="l-split-rail-block__n">{s.note}</p>
                </div>
              ))}
            </div>
            <a className="btn btn--primary btn--block" href={`tel:${SITE.phoneTel}`}>
              Call {SITE.short}
            </a>
            <a className="btn btn--ghost btn--block" href="#contact">
              Message
            </a>
          </div>
        </aside>
      </div>

      <SiteFooter />
    </>
  )
}
