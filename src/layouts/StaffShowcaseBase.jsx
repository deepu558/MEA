import { motion as Motion } from 'framer-motion'
import { AddressWithMapLink } from '../components/AddressWithMapLink.jsx'
import { AdmissionSection } from '../components/AdmissionSection.jsx'
import { ContactActions } from '../components/ContactActions.jsx'
import { HeroTitle } from '../components/HeroTitle.jsx'
import { Reveal } from '../components/Reveal.jsx'
import { StaffPopCard } from '../components/StaffPopCard.jsx'
import { SiteFooter } from '../components/SiteFooter.jsx'
import {
  ABOUT,
  CLASSES,
  CONTACT,
  HERO_COPY,
  NAV,
  SCHEDULE,
  SITE,
  STATS,
  TEACHING_STAFF,
} from '../data/siteContent.jsx'

function FacultyRail() {
  return (
    <section
      className="stf-rail-sec"
      id="faculty"
      aria-labelledby="faculty-title"
    >
      <div className="stf-rail-sec__inner">
        <h2 id="faculty-title" className="section__title" style={{ marginTop: 0 }}>
          {TEACHING_STAFF.title}
        </h2>
        <p className="stf-rail-sec__intro">{TEACHING_STAFF.intro}</p>
        <div className="stf-rail-sec__shell">
          <ul className="stf-rail-sec__track" aria-label="Teaching staff — scroll for more">
            {TEACHING_STAFF.members.map((m) => (
              <li key={m.name} className="stf-rail-sec__cell">
                <StaffPopCard member={m} />
              </li>
            ))}
          </ul>
          <p className="stf-rail-sec__hint">Scroll horizontally — hover a card to see the effect.</p>
        </div>
      </div>
    </section>
  )
}

function FacultyMosaic() {
  return (
    <section
      className="stf-mosaic-sec"
      id="faculty"
      aria-labelledby="faculty-title"
    >
      <div className="stf-mosaic-sec__inner">
        <h2 id="faculty-title" className="section__title" style={{ marginTop: 0 }}>
          {TEACHING_STAFF.title}
        </h2>
        <p className="stf-mosaic-sec__intro">{TEACHING_STAFF.intro}</p>
        <div className="stf-mosaic__grid" role="list">
          {TEACHING_STAFF.members.map((m, i) => (
            <div
              key={m.name}
              className={
                i === 0
                  ? 'stf-mosaic__item stf-mosaic__item--main'
                  : 'stf-mosaic__item'
              }
              role="listitem"
            >
              <StaffPopCard
                member={m}
                variant={i === 0 ? 'feature' : 'default'}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export function StaffShowcaseBase({ variant }) {
  const Faculty = variant === 'mosaic' ? FacultyMosaic : FacultyRail
  return (
    <>
      <Motion.header
        className="header"
        initial={{ opacity: 0, y: -12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
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
        <section className="hero" aria-labelledby="hero-title">
          <div className="hero__grid">
            <div className="hero__copy">
              <p className="eyebrow">{HERO_COPY.eyebrow}</p>
              <HeroTitle id="hero-title" />
              <p className="hero__lede">{HERO_COPY.lede}</p>
              <div className="hero__actions">
                <a className="btn btn--primary" href="#contact">Enquire / Visit</a>
                <a className="btn btn--ghost" href="#schedule">View batches</a>
              </div>
              <ul className="hero__stats" aria-label="Highlights">
                {STATS.map((s) => (
                  <li key={s.k}>
                    <strong>{s.k}</strong>
                    <span>{s.v}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="hero__panel" aria-hidden="true">
              <div className="hero__card">
                <p className="hero__card-label">{HERO_COPY.card.label}</p>
                <p className="hero__card-title">{HERO_COPY.card.title}</p>
                <p className="hero__card-body">{HERO_COPY.card.body}</p>
                <div className="hero__card-accent" />
              </div>
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

        <Faculty />

        <Reveal delay={0.04}>
          <section
            className="section section--alt"
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
          <section className="section" id="schedule" aria-labelledby="schedule-title">
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
          <AdmissionSection sectionClassName="section section--alt" />
        </Reveal>

        <Reveal delay={0.08}>
          <section
            className="section"
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
