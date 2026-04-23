import { useState } from 'react'
import { ADMISSION } from '../data/siteContent.jsx'

const formSubmitAjax = (email) =>
  `https://formsubmit.co/ajax/${encodeURIComponent(email)}`

/**
 * Submits to FormSubmit (free): delivers an email to `ADMISSION.notifyEmail`.
 * If FormSubmit is unavailable, offers a mailto: fallback.
 */
export function AdmissionForm() {
  const [status, setStatus] = useState('idle')
  // idle | sending | success | error

  const handleSubmit = async (e) => {
    e.preventDefault()
    const form = e.currentTarget
    const fd = new FormData(form)
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
        setStatus('success')
        form.reset()
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
            defaultValue=""
          >
            <option value="" disabled>
              — Select class —
            </option>
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
        <div className="admission-form__field admission-form__field--span2">
          <span className="admission-form__label">Father *</span>
          <div className="admission-form__row">
            <input
              name="father_name"
              type="text"
              required
              className="admission-form__input"
              placeholder="Name"
            />
            <input
              name="father_phone"
              type="tel"
              required
              className="admission-form__input"
              placeholder="Phone / WhatsApp"
            />
          </div>
        </div>
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
        <fieldset className="admission-form__field admission-form__field--span2">
          <legend className="admission-form__label">Batch preference *</legend>
          <div className="admission-form__radios">
            <label>
              <input
                type="radio"
                name="batch"
                value="Morning (5:30 – 7:30 AM)"
                required
              />
              Morning (5:30 – 7:30 AM)
            </label>
            <label>
              <input
                type="radio"
                name="batch"
                value="Evening (5:30 – 7:30 PM)"
              />
              Evening (5:30 – 7:30 PM)
            </label>
          </div>
        </fieldset>
        <div className="admission-form__field admission-form__field--span2">
          <span className="admission-form__label">Previous year marks (optional)</span>
          <div className="admission-form__marks">
            <input
              name="previous_maths"
              type="text"
              className="admission-form__input"
              placeholder="Maths (e.g. 85% or A)"
            />
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
          </div>
        </div>
      </div>
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
