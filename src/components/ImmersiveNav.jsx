import { motion as Motion } from 'framer-motion'
import { NAV, SITE } from '../data/siteContent.jsx'

const hdr = {
  initial: { y: -12, opacity: 0 },
  animate: { y: 0, opacity: 1 },
  transition: { duration: 0.45, ease: [0.16, 1, 0.3, 1] },
}

export function ImmersiveNav({ className = '' }) {
  return (
    <Motion.header className={className} {...hdr}>
      <div className="l-imm-nav__inner">
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
  )
}
