import { motion as Motion } from 'framer-motion'
import { AddressWithMapLink } from '../components/AddressWithMapLink.jsx'
import { AdmissionForm } from '../components/AdmissionForm.jsx'
import { ContactActions } from '../components/ContactActions.jsx'
import { HeroTitle } from '../components/HeroTitle.jsx'
import { ImmersiveNav } from '../components/ImmersiveNav.jsx'
import { SiteFooter } from '../components/SiteFooter.jsx'
import { CLASSROOM_BACKGROUNDS } from '../config/immersive.js'
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

const blocks = [
  { key: 'hero' },
  { key: 'about', href: 'about' },
  { key: 'classes', href: 'classes' },
  { key: 'schedule', href: 'schedule' },
  { key: 'admission', href: 'admission' },
  { key: 'contact', href: 'contact' },
]

export function ClassroomCinemaLayout() {
  return (
    <div className="l-imm l-imm--cinema">
      <ImmersiveNav className="l-imm-nav l-imm-nav--float" />
      <main className="l-imm-cinema">
        {blocks.map((b, i) => {
          const bg = CLASSROOM_BACKGROUNDS[i % CLASSROOM_BACKGROUNDS.length]
          const sectionId = b.key === 'hero' ? 'top' : b.href
          return (
            <section
              key={b.key}
              className="l-imm-cinema__frame"
              id={sectionId}
              data-block={b.key}
              style={{ '--cin-bg': `url(${bg})` }}
            >
              <div className="l-imm-cinema__bg" />
              {b.hasHero && (
                <div className="l-imm-cinema__content l-imm-cinema__content--hero">
                  <Motion.p
                    className="eyebrow"
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1, duration: 0.45 }}
                  >
                    {HERO_COPY.eyebrow}
                  </Motion.p>
                  <HeroTitle id="hero-title" className="l-imm-cinema__headline" />
                  <p className="l-imm-cinema__lede">{HERO_COPY.lede}</p>
                  <div className="hero__actions">
                    <a className="btn btn--primary" href="#contact">Enquire / Visit</a>
                    <a className="btn btn--ghost" href="#schedule">View batches</a>
                  </div>
                  <ul className="l-imm-cinema__stats" aria-label="Highlights">
                    {STATS.map((s) => (
                      <li key={s.k}><strong>{s.k}</strong><span>{s.v}</span></li>
                    ))}
                  </ul>
                </div>
              )}

              {b.key === 'about' && (
                <div className="l-imm-cinema__content" aria-labelledby="about-title">
                  <h2 id="about-title" className="l-imm-cinema__h2">{ABOUT.title(SITE.short)}</h2>
                  <p className="l-imm-cinema__body">{ABOUT.intro}</p>
                  <ul className="l-imm-cinema__stack">
                    {ABOUT.pillars.map((p) => (
                      <li key={p.title}>
                        <h3 className="l-split-h3" style={{ margin: '0 0 0.2rem' }}>{p.title}</h3>
                        <p className="l-split-p" style={{ margin: 0 }}>{p.text}</p>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {b.key === 'classes' && (
                <div className="l-imm-cinema__content" aria-labelledby="classes-title">
                  <h2 id="classes-title" className="l-imm-cinema__h2">{CLASSES.title}</h2>
                  <p className="l-imm-cinema__body">{CLASSES.intro}</p>
                  <div className="l-imm-cinema__pair">
                    {CLASSES.items.map((c) => (
                      <article key={c.title} className="l-imm-cinema__panel">
                        <h3 className="l-split-h3" style={{ marginTop: 0 }}>{c.title}</h3>
                        <p className="l-split-p" style={{ margin: 0 }}>{c.text}</p>
                      </article>
                    ))}
                  </div>
                </div>
              )}

              {b.key === 'schedule' && (
                <div className="l-imm-cinema__content" aria-labelledby="schedule-title">
                  <h2 id="schedule-title" className="l-imm-cinema__h2">{SCHEDULE.title}</h2>
                  <p className="l-imm-cinema__body">{SCHEDULE.intro}</p>
                  <ul className="l-imm-cinema__times">
                    {SCHEDULE.sessions.map((s) => (
                      <li key={s.name}>
                        <strong>{s.name}</strong>
                        <span className="schedule__time" role="text">{s.time}</span>
                        <span className="l-split-fine">{s.note}</span>
                      </li>
                    ))}
                  </ul>
                  <p className="l-imm-cinema__foot">{SCHEDULE.footnote}</p>
                </div>
              )}

              {b.key === 'admission' && (
                <div className="l-imm-cinema__content" aria-labelledby="admission-title">
                  <h2 id="admission-title" className="l-imm-cinema__h2">{ADMISSION.title}</h2>
                  <p className="l-imm-cinema__body">{ADMISSION.intro}</p>
                  <AdmissionForm />
                </div>
              )}

              {b.key === 'contact' && (
                <div className="l-imm-cinema__content" aria-labelledby="contact-title">
                  <h2 id="contact-title" className="l-imm-cinema__h2">{CONTACT.title}</h2>
                  <p className="l-imm-cinema__body">{CONTACT.intro}</p>
                  <div className="l-imm-cinema__contact">
                    <p className="l-split-addr" style={{ margin: 0 }}>
                      <AddressWithMapLink oneLine />
                    </p>
                    <p className="l-split-addr" style={{ margin: '0.4rem 0' }}>
                      <a href={`tel:${SITE.phoneTel}`}>{SITE.phoneDisplay}</a>
                      {' · '}
                      <a href={`mailto:${SITE.email}`}>{SITE.email}</a>
                    </p>
                    <ContactActions />
                  </div>
                </div>
              )}
            </section>
          )
        })}
      </main>
      <SiteFooter />
    </div>
  )
}
