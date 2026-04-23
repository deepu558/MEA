/**
 * Pop-out portrait card: text slab + figure extending past the coloured panel;
 * hover scales the portrait and shows an offset “shadow” slab.
 */
export function StaffPopCard({ member, variant = 'default' }) {
  const { name, subjects, yearsExp, image, color, shadow } = member
  return (
    <article
      className={variant === 'feature' ? 'stf-card stf-card--feature' : 'stf-card'}
      style={{ '--stf-bg': color, '--stf-sh': shadow }}
    >
      <div className="stf-card__offset" aria-hidden />
      <div className="stf-card__slab">
        <div className="stf-card__text">
          <h3 className="stf-card__name">{name}</h3>
          <p className="stf-card__subj">{subjects}</p>
          <p className="stf-card__exp">{yearsExp}</p>
        </div>
        <div className="stf-card__portrait">
          <img
            className="stf-card__img"
            src={image}
            alt=""
            width={320}
            height={400}
            loading="lazy"
            decoding="async"
          />
        </div>
      </div>
    </article>
  )
}
