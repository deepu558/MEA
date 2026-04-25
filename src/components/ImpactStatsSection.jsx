import { motion as Motion, useReducedMotion } from 'framer-motion'
import { IMPACT } from '../data/siteContent.jsx'
import { Reveal } from './Reveal.jsx'

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.08, delayChildren: 0.06 },
  },
}

const item = (reduce) => ({
  hidden: reduce
    ? { opacity: 1, y: 0, scale: 1 }
    : { opacity: 0, y: 18, scale: 0.98 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: reduce
      ? { duration: 0 }
      : { duration: 0.45, ease: [0.16, 1, 0.3, 1] },
  },
})

export function ImpactStatsSection() {
  const reduce = useReducedMotion()

  return (
    <Reveal y={20}>
      <section
        className="section impact"
        id="impact"
        aria-labelledby="impact-title"
      >
        <div className="section__inner impact__inner">
          <header className="impact__head">
            <p className="eyebrow">{IMPACT.eyebrow}</p>
            <h2 id="impact-title" className="section__title">
              {IMPACT.title}
            </h2>
            <p className="section__intro impact__intro">{IMPACT.intro}</p>
          </header>
          <Motion.ul
            className="impact__grid"
            role="list"
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2, margin: '0px 0px -6% 0px' }}
          >
            {IMPACT.stats.map((s) => (
              <Motion.li
                key={s.label}
                className={`impact__card impact__card--${s.tone}`}
                role="listitem"
                variants={item(reduce)}
              >
                <span className="impact__value">{s.value}</span>
                <span className="impact__label">{s.label}</span>
              </Motion.li>
            ))}
          </Motion.ul>
        </div>
      </section>
    </Reveal>
  )
}
