import { SITE } from '../data/siteContent.jsx'

/** Renders all tap-to-call numbers from `SITE.phoneLines` (falls back to primary). */
export function ContactPhoneList() {
  const lines = SITE.phoneLines ?? [
    { display: SITE.phoneDisplay, tel: SITE.phoneTel },
  ]
  return (
    <span className="contact-list__value contact-list__value--phone-lines">
      {lines.map((p) => (
        <a key={p.tel} href={`tel:${p.tel}`}>
          {p.display}
        </a>
      ))}
    </span>
  )
}
