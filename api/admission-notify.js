/**
 * Vercel serverless: optional WhatsApp / SMS / webhook when the admission form is submitted.
 *
 * Configure one or more of these in Vercel → Project → Settings → Environment Variables:
 *
 * 1) WhatsApp (CallMeBot — free tier, link WhatsApp once: https://www.callmebot.com/blog/free-api-whatsapp-messages/)
 *    - CALLMEBOT_APIKEY
 *    - CALLMEBOT_PHONE   recipient, E.164 digits only e.g. 919441896898
 *
 * 2) SMS (Twilio — paid)
 *    - TWILIO_ACCOUNT_SID, TWILIO_AUTH_TOKEN
 *    - TWILIO_SMS_FROM   your Twilio number e.g. +15017122661
 *    - TWILIO_NOTIFY_SMS_TO  academy mobile e.g. +919441896898
 *
 * 3) Custom automation (Make / Zapier / n8n)
 *    - ADMISSION_NOTIFY_WEBHOOK_URL  receives POST JSON { source, text, payload }
 *
 * Without any of the above, this handler returns 200 and { skipped: true } (no-op).
 */

function buildNotifyText(payload) {
  const val = (k) => {
    const v = payload[k]
    return v == null || v === '' ? '—' : String(v)
  }
  const lines = [
    'New MEA admission enquiry',
    '',
    `Student: ${val('student_name')}`,
    `Class: ${val('class')}`,
    `School: ${val('school_name')}`,
    `Father: ${val('father_name')}`,
    `Father phone: ${val('father_phone')}`,
    `Mother: ${val('mother_name')}`,
    `Mother phone: ${val('mother_phone')}`,
    `Batch: ${val('batch')}`,
    `Prev Maths: ${val('previous_maths')}`,
    `Prev Science: ${val('previous_science')}`,
    `Prev Physics: ${val('previous_physics')}`,
    `Prev Biology: ${val('previous_biology')}`,
  ]
  const text = lines.join('\n')
  return text.length > 3800 ? `${text.slice(0, 3797)}…` : text
}

export default async function handler(req, res) {
  res.setHeader('Content-Type', 'application/json')
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST')
    return res.status(405).json({ ok: false, error: 'method_not_allowed' })
  }

  const payload = req.body
  if (!payload || typeof payload !== 'object' || Array.isArray(payload)) {
    return res.status(400).json({ ok: false, error: 'invalid_body' })
  }

  const text = buildNotifyText(payload)
  const results = []

  const apikey = process.env.CALLMEBOT_APIKEY
  const phone = process.env.CALLMEBOT_PHONE
  if (apikey && phone) {
    try {
      const url = `https://api.callmebot.com/whatsapp.php?${new URLSearchParams({
        phone: String(phone).replace(/^\+/, ''),
        apikey: String(apikey),
        text,
      })}`
      const r = await fetch(url)
      const body = await r.text()
      results.push({
        channel: 'whatsapp_callmebot',
        ok: r.ok,
        status: r.status,
        detail: body.slice(0, 200),
      })
    } catch (e) {
      results.push({
        channel: 'whatsapp_callmebot',
        ok: false,
        error: String(e?.message || e),
      })
    }
  }

  const sid = process.env.TWILIO_ACCOUNT_SID
  const token = process.env.TWILIO_AUTH_TOKEN
  const twFrom = process.env.TWILIO_SMS_FROM
  const twTo = process.env.TWILIO_NOTIFY_SMS_TO
  if (sid && token && twFrom && twTo) {
    try {
      const auth = Buffer.from(`${sid}:${token}`).toString('base64')
      const r = await fetch(
        `https://api.twilio.com/2010-04-01/Accounts/${sid}/Messages.json`,
        {
          method: 'POST',
          headers: {
            Authorization: `Basic ${auth}`,
            'Content-Type': 'application/x-www-form-urlencoded',
          },
          body: new URLSearchParams({
            To: twTo,
            From: twFrom,
            Body: text,
          }),
        },
      )
      results.push({
        channel: 'sms_twilio',
        ok: r.ok,
        status: r.status,
      })
    } catch (e) {
      results.push({
        channel: 'sms_twilio',
        ok: false,
        error: String(e?.message || e),
      })
    }
  }

  const hook = process.env.ADMISSION_NOTIFY_WEBHOOK_URL
  if (hook) {
    try {
      const r = await fetch(hook, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          source: 'mea-admission',
          text,
          payload,
        }),
      })
      results.push({
        channel: 'webhook',
        ok: r.ok,
        status: r.status,
      })
    } catch (e) {
      results.push({
        channel: 'webhook',
        ok: false,
        error: String(e?.message || e),
      })
    }
  }

  const configured = Boolean(
    (apikey && phone) || (sid && token && twFrom && twTo) || hook,
  )

  return res.status(200).json({
    ok: true,
    skipped: !configured,
    notified: results.some((x) => x.ok),
    results,
  })
}
