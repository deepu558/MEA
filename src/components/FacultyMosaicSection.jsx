import { StaffPopCard } from './StaffPopCard.jsx'
import { TEACHING_STAFF } from '../data/siteContent.jsx'

/** Same faculty mosaic grid as Staff Mosaic layout (reused in Classic). */
export function FacultyMosaicSection() {
  const { members } = TEACHING_STAFF
  const pairLayout = members.length <= 2
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
        <div
          className={
            pairLayout
              ? 'stf-mosaic__grid stf-mosaic__grid--pair'
              : 'stf-mosaic__grid'
          }
          role="list"
        >
          {members.map((m, i) => (
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
