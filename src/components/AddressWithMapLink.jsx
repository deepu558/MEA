import { SITE } from '../data/siteContent.jsx'

function MapPinIcon({ className = '' }) {
  return (
    <svg
      className={className}
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <path
        fill="currentColor"
        d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 110-5 2.5 2.5 0 010 5z"
      />
    </svg>
  )
}

/**
 * Centre address plus an embedded map preview and control to open the same
 * place in Google Maps (pin on map, not driving directions).
 */
export function AddressWithMapLink({ oneLine = false, className = '' }) {
  const wrap = [
    'address-with-map',
    oneLine ? 'address-with-map--one-line' : '',
    className,
  ]
    .filter(Boolean)
    .join(' ')
  return (
    <span className={wrap}>
      {oneLine ? (
        <span className="address-with-map__text">{SITE.address.join(' · ')}</span>
      ) : (
        <span className="address-with-map__text">
          {SITE.address.map((line) => (
            <span key={line}>
              {line}
              <br />
            </span>
          ))}
        </span>
      )}
      <div className="address-with-map__preview">
        <div className="address-with-map__frame">
          <iframe
            className="address-with-map__iframe"
            title="Map showing Murthy Education Academy, Ashok Nagar, Hyderabad"
            src={SITE.googleMapsEmbedUrl}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />
        </div>
        <a
          className="address-with-map__open"
          href={SITE.googleMapsUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          <MapPinIcon className="address-with-map__pin" />
          <span>Open in Google Maps</span>
        </a>
      </div>
    </span>
  )
}
