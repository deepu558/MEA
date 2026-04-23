import { SITE } from '../data/siteContent.jsx'

export function ContactActions({ className = 'contact-actions' }) {
  return (
    <div className={className}>
      <a className="btn btn--primary btn--block" href={SITE.whatsapp}>
        WhatsApp
      </a>
      <a
        className="btn btn--ghost btn--block"
        href={SITE.instagram}
        target="_blank"
        rel="noopener noreferrer"
      >
        Instagram
      </a>
      <a className="btn btn--ghost btn--block" href={`mailto:${SITE.email}`}>
        Email us
      </a>
    </div>
  )
}
