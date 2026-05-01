import { GALLERY } from '../data/siteContent.jsx'

export function GallerySection() {
  const { title, intro, images } = GALLERY
  return (
    <section
      className="section section--alt"
      id="gallery"
      aria-labelledby="gallery-title"
    >
      <div className="section__inner section__inner--gallery">
        <h2 id="gallery-title" className="section__title">
          {title}
        </h2>
        <p className="section__intro">{intro}</p>
        {images.length === 0 ? (
          <p className="gallery__empty">
            Batch photos will be added here soon — check back for memories from
            recent years at the centre.
          </p>
        ) : (
          <>
            <div className="gallery__scroller">
              <ul
                className="gallery__grid"
                role="list"
                aria-label="Batch photos — swipe sideways on small screens to see more"
              >
                {images.map((img) => (
                  <li key={img.src} className="gallery__cell">
                    <div className="gallery__thumb">
                      <img
                        className="gallery__img"
                        src={img.src}
                        alt={img.alt}
                        loading="lazy"
                        decoding="async"
                      />
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            {images.length > 2 ? (
              <p className="gallery__hint">Swipe sideways for more photos</p>
            ) : null}
          </>
        )}
      </div>
    </section>
  )
}
