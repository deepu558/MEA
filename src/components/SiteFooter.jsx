import { SITE } from '../data/siteContent.jsx'

export function SiteFooter() {
  return (
    <footer className="footer">
      <div className="footer__inner">
        <p>
          © {new Date().getFullYear()} {SITE.name} ({SITE.short}). {SITE.city}.
        </p>
        <ul className="footer__links">
          <li>
            <a
              href={SITE.instagram}
              target="_blank"
              rel="noopener noreferrer"
            >
              Instagram
            </a>
          </li>
          <li>
            <a href={SITE.whatsapp}>WhatsApp</a>
          </li>
          <li>
            <a href={`mailto:${SITE.email}`}>Email</a>
          </li>
        </ul>
      </div>
    </footer>
  )
}
