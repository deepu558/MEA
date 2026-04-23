import { ADMISSION } from '../data/siteContent.jsx'
import { AdmissionForm } from './AdmissionForm.jsx'

/**
 * Default “classic” section shell; for immersive layouts, pass class names or
 * render ADMISSION + AdmissionForm inline.
 */
export function AdmissionSection({
  sectionClassName = 'section section--alt',
  titleId = 'admission-title',
}) {
  return (
    <section
      className={sectionClassName}
      id="admission"
      aria-labelledby={titleId}
    >
      <div className="section__inner section__inner--admission">
        <h2 id={titleId} className="section__title">
          {ADMISSION.title}
        </h2>
        <p className="section__intro">{ADMISSION.intro}</p>
        <AdmissionForm />
      </div>
    </section>
  )
}
