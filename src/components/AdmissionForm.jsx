import { useState } from 'react'
import { ADMISSION } from '../data/siteContent.jsx'

const formSubmitAjax = (email) =>
  `https://formsubmit.co/ajax/${encodeURIComponent(email)}`

/** Same-origin Vercel function: optional WhatsApp/SMS/webhook (see api/admission-notify.js). */
const admissionNotifyUrl = '/api/admission-notify'

const MORNING = 'Morning (5:30 – 7:30 AM)'
const EVENING = 'Evening (5:30 – 7:30 PM)'

function batchChoicesForClass(classValue) {
  if (classValue === 'Class 7' || classValue === 'Class 8') {
    return [{ value: EVENING, label: 'Evening (5:30 – 7:30 PM)' }]
  }
  if (classValue === 'Class 9') {
    return [{ value: MORNING, label: 'Morning (5:30 – 7:30 AM)' }]
  }
  if (classValue === 'Class 10') {
    return [
      { value: MORNING, label: 'Morning (5:30 – 7:30 AM)' },
      { value: EVENING, label: 'Evening (5:30 – 7:30 PM)' },
    ]
  }
  return []
}

/**
 * Submits to FormSubmit (free): delivers an email to `ADMISSION.notifyEmail`.
 * If FormSubmit is unavailable, offers a mailto: fallback.
 */
export function AdmissionForm() {
  const [status, setStatus] = useState('idle')
  const [studentClass, setStudentClass] = useState('')
  const [formError, setFormError] = useState('')
  // idle | sending | success | error

  const batchChoices = batchChoicesForClass(studentClass)
  const juniorClass = studentClass === 'Class 7' || studentClass === 'Class 8'

  const handleSubmit = async (e) => {
    e.preventDefault()
    setFormError('')
    const form = e.currentTarget
    const fd = new FormData(form)
    const batchVal = fd.get('batch')
    if (batchChoices.length > 0 && (batchVal == null || batchVal === '')) {
      setFormError('Please select a batch for your class.')
      return
    }

    const data = {
      _subject: ADMISSION.emailSubject,
      _template: 'table',
    }
    for (const [k, v] of fd.entries()) {
      if (v !== '' && v != null) {
        data[k] = v
      }
    }

    setStatus('sending')
    try {
      const res = await fetch(formSubmitAjax(ADMISSION.notifyEmail), {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify(data),
      })
      if (res.ok) {
        try {
          await fetch(admissionNotifyUrl, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data),
          })
        } catch {
          /* Email already saved; notify is best-effort (missing in local vite, or network). */
        }
        setStatus('success')
        form.reset()
        setStudentClass('')
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  if (status === 'success') {
    return (
      <div
        className="admission-form admission-form--ok"
        role="status"
      >
        <p className="admission-form__ok">
          Thank you. We have received your details and will contact you soon.
        </p>
        <button
          type="button"
          className="btn btn--ghost"
          onClick={() => setStatus('idle')}
        >
          Send another
        </button>
      </div>
    )
  }

  return (
    <form className="admission-form" onSubmit={handleSubmit} noValidate>
      <div className="admission-form__grid">
        <label className="admission-form__field">
          <span className="admission-form__label">Student name *</span>
          <input
            name="student_name"
            type="text"
            required
            autoComplete="name"
            className="admission-form__input"
            placeholder="Full name as on school records"
          />
        </label>
        <label className="admission-form__field">
          <span className="admission-form__label">Class *</span>
          <select
            name="class"
            required
            className="admission-form__input"
            value={studentClass}
            onChange={(e) => setStudentClass(e.target.value)}
          >
            <option value="" disabled>
              — Select class —
            </option>
            <option value="Class 7">Class 7</option>
            <option value="Class 8">Class 8</option>
            <option value="Class 9">Class 9</option>
            <option value="Class 10">Class 10</option>
          </select>
        </label>
        <label className="admission-form__field admission-form__field--span2">
          <span className="admission-form__label">School name *</span>
          <input
            name="school_name"
            type="text"
            required
            className="admission-form__input"
            placeholder="Current school"
          />
        </label>
        <label className="admission-form__field">
          <span className="admission-form__label">Father&apos;s name *</span>
          <input
            name="father_name"
            type="text"
            required
            autoComplete="name"
            className="admission-form__input"
            placeholder="Full name"
          />
        </label>
        <label className="admission-form__field">
          <span className="admission-form__label">Father&apos;s phone *</span>
          <input
            name="father_phone"
            type="tel"
            required
            autoComplete="tel"
            className="admission-form__input"
            placeholder="Phone / WhatsApp"
          />
        </label>
        <div className="admission-form__field admission-form__field--span2">
          <span className="admission-form__label">Mother (optional)</span>
          <div className="admission-form__row">
            <input
              name="mother_name"
              type="text"
              className="admission-form__input"
              placeholder="Name"
            />
            <input
              name="mother_phone"
              type="tel"
              className="admission-form__input"
              placeholder="Phone / WhatsApp"
            />
          </div>
        </div>
        <fieldset
          className="admission-form__field admission-form__field--span2"
          key={studentClass || 'no-class'}
        >
          <legend className="admission-form__label">Batch preference *</legend>
          {batchChoices.length === 0 ? (
            <p className="admission-form__hint">
              Select your class above to see the batch options for your grade.
            </p>
          ) : (
            <div className="admission-form__radios">
              {batchChoices.map((opt) => (
                <label key={opt.value}>
                  <input
                    type="radio"
                    name="batch"
                    value={opt.value}
                    required={batchChoices.length > 0}
                  />
                  {opt.label}
                </label>
              ))}
            </div>
          )}
        </fieldset>
        <div className="admission-form__field admission-form__field--span2">
          <span className="admission-form__label">Previous year marks (optional)</span>
          <div
            className={
              juniorClass
                ? 'admission-form__marks admission-form__marks--junior'
                : 'admission-form__marks'
            }
          >
            <input
              name="previous_maths"
              type="text"
              className="admission-form__input"
              placeholder="Maths (e.g. 85% or A)"
            />
            {juniorClass ? (
              <input
                name="previous_science"
                type="text"
                className="admission-form__input"
                placeholder="Science (e.g. 82% or A)"
              />
            ) : (
              <>
                <input
                  name="previous_physics"
                  type="text"
                  className="admission-form__input"
                  placeholder="Physics (e.g. 82% or A)"
                />
                <input
                  name="previous_biology"
                  type="text"
                  className="admission-form__input"
                  placeholder="Biology (e.g. 80% or A)"
                />
              </>
            )}
          </div>
        </div>
      </div>
      {formError ? (
        <p className="admission-form__err admission-form__err--field" role="alert">
          {formError}
        </p>
      ) : null}
      {status === 'error' && (
        <p className="admission-form__err" role="alert">
          Something went wrong. You can still email us directly or use the button
          below to open your mail app.
        </p>
      )}
      <div className="admission-form__actions">
        <button
          type="submit"
          className="btn btn--primary"
          disabled={status === 'sending'}
        >
          {status === 'sending' ? 'Sending…' : 'Submit application'}
        </button>
        {status === 'error' && (
          <a
            className="btn btn--ghost"
            href={`mailto:${ADMISSION.notifyEmail}?subject=${encodeURIComponent(ADMISSION.emailSubject)}&body=Please paste your details in this email.`}
          >
            Open email app
          </a>
        )}
      </div>
    </form>
  )
}
