/** Centre location — Google Maps links use the full mailing address. */
const MAP_QUERY = [
  '1-1-294,298/A/2',
  "People's High School premises, Opp. Syndicate Bank",
  'Ashok Nagar, Hyderabad',
  '500 020, Telangana, India',
].join(', ')

export const SITE = {
  name: 'Murthy Educational Academy',
  short: 'MEA',
  tagline: 'Focused tuition in Maths, Physics & Biology for Classes 7–10.',
  city: 'Hyderabad — Ashok Nagar (500 020), Telangana, India',
  address: [
    '1-1-294,298/A/2',
    "People's High School premises, Opp. Syndicate Bank",
    'Ashok Nagar, Hyderabad',
    '500 020, Telangana, India',
  ],
  /** Tap-to-call lines (business card). Header uses the first. */
  phoneLines: [
    { display: '+91 94418 96898', tel: '+919441896898' },
    { display: '+91 94404 42666', tel: '+919440442666' },
  ],
  phoneDisplay: '+91 94418 96898',
  phoneTel: '+919441896898',
  email: 'murthyeducationacademy@gmail.com',
  instagram: 'https://www.instagram.com/murthy_voora_87/',
  /** Opening post / reel to highlight in the “Reel” layout (full URL). */
  featuredReel: 'https://www.instagram.com/murthy_voora_87/',
  whatsapp: 'https://wa.me/919441896898',
  googleMapsUrl: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(MAP_QUERY)}`,
  googleMapsEmbedUrl: `https://www.google.com/maps?hl=en&q=${encodeURIComponent(MAP_QUERY)}&z=17&output=embed`,
}

export const NAV = [
  { href: '#about', label: 'About' },
  { href: '#classes', label: 'Classes' },
  { href: '#faculty', label: 'Faculty' },
  { href: '#gallery', label: 'Gallery' },
  { href: '#schedule', label: 'Schedule' },
  { href: '#admission', label: 'Admission' },
  { href: '#contact', label: 'Contact' },
]

export const TEACHING_STAFF = {
  title: 'Meet the faculty',
  intro:
    'Murthy Educational Academy has coached Mathematics & Sciences for Classes 7–10 since 1987. Our lead faculty combine board-focused teaching with patient doubt-solving.',
  members: [
    {
      name: 'V.S.R. Chandra Murthy',
      subjects: 'M.Sc., M.Ed., PGDCA · Mathematics & Sciences',
      yearsExp: 'Founder & lead faculty · with MEA since 1987',
      image: '/faculty/chandra-murthy.png',
      color: '#fef3d9',
      shadow: 'color-mix(in srgb, #f4c430 45%, #c9a227)',
    },
    {
      name: 'V. Anuradha',
      subjects: 'B.Sc. · Sciences & student support',
      yearsExp: 'Correspondent & Faculty',
      image: '/faculty/anuradha.png',
      color: '#ffe8e0',
      shadow: 'color-mix(in srgb, #e8a090 50%, #c45c48)',
    },
  ],
}

export const HERO_COPY = {
  eyebrow: 'Est. 1987 · Tuition · Classes 7–10',
  lede: SITE.tagline,
  card: {
    label: 'This term',
    title: 'Board-ready practice',
    body:
      'Concept clarity, problem-solving routines, and exam-style drills tailored for Classes 7–10.',
  },
}

export const STATS = [
  { k: '2 hr', v: 'Focused sessions' },
  { k: 'AM & PM', v: 'Morning & evening' },
]

export const IMPACT = {
  eyebrow: 'By the numbers',
  title: 'Trust built over decades',
  intro:
    'A snapshot of our reach at a glance — decades of coaching and focused batches at the centre.',
  stats: [
    { value: '3,500+', label: 'Students trained & guided', tone: 'gold' },
    { value: '2.1k+', label: 'Class hours (last year, est.)', tone: 'teal' },
    { value: '100%', label: 'Focus on every doubt', tone: 'ember' },
    { value: '39+', label: 'Years since 1987', tone: 'sage' },
  ],
}

export const ABOUT = {
  title: (short) => `Why families choose ${short}`,
  intro:
    'We are a long-running Hyderabad tuition centre (established 1987), now focused on small batches, patience, and consistent practice for secondary grades. Our goal is not just marks — it is lasting understanding students can carry into senior classes.',
  pillars: [
    {
      title: 'Clear explanations',
      text:
        'Topics are broken down step by step, with emphasis on “why” before “how”.',
    },
    {
      title: 'Regular assessments',
      text:
        'Short checkpoints and mixed revision so gaps show up early — and get fixed.',
    },
    {
      title: 'Approachable faculty',
      text:
        'Doubts are welcome after class; we want students to speak up, not stay stuck.',
    },
  ],
}

export const CLASSES = {
  title: 'What we teach',
  intro: (
    <>
      Mathematics, Physics, and Biology for <strong>Classes 7–10</strong>{' '}
      (state syllabus). Batches are separate by grade and subject where
      enrollment allows.
    </>
  ),
  items: [
    {
      title: 'Mathematics',
      text:
        'Algebra, geometry, trigonometry, and arithmetic — with emphasis on accuracy and speed through structured homework.',
    },
    {
      title: 'Physics',
      text:
        'Mechanics, light, sound, electricity, and practical-linked theory — taught with diagrams, demos where possible, and numerical practice.',
    },
    {
      title: 'Biology',
      text:
        'Cell biology, human physiology, genetics, and ecology — with diagram practice, key terminology, and exam-style short answers for board papers.',
    },
  ],
}

export const SCHEDULE = {
  title: 'Batch timings',
  intro: (
    <>
      Each session runs for <strong>two hours</strong>. We run parallel morning
      and evening batches at our Hyderabad centre.
    </>
  ),
  /** Shown under the schedule cards (batch rules by grade). */
  byClass: (
    <>
      <strong>Batch by grade:</strong> Classes 7–8 — <em>evening only</em>. Class
      9 — <em>morning only</em>. Class 10 — <em>morning or evening</em> (both
      slots open).
    </>
  ),
  sessions: [
    { name: 'Morning', time: '5:30 AM – 7:30 AM', note: 'Ideal before school hours' },
    { name: 'Evening', time: '5:30 PM – 7:30 PM', note: 'After school hours' },
  ],
}

/** Batch photos: add files under `public/gallery/` and list them here. */
export const GALLERY = {
  title: 'Gallery',
  intro: 'Snapshots from past batches and celebrations at the centre.',
  /** `{ src, alt }` — shown in a responsive square grid. */
  images: [
    {
      src: '/gallery/gallery-01.png',
      alt: 'MEA batch photo — students and faculty in a line outdoors with a green landscape mural.',
    },
    {
      src: '/gallery/gallery-02.png',
      alt: 'MEA students group selfie outdoors near the courtyard mural.',
    },
    {
      src: '/gallery/gallery-04.png',
      alt: 'Classroom group photo — students and faculty arranged in rows at desks.',
    },
    {
      src: '/gallery/gallery-05.png',
      alt: 'MEA batch outdoors — students and faculty in front of the painted hills and tree mural.',
    },
    {
      src: '/gallery/gallery-06.png',
      alt: 'Large MEA batch — seated and standing rows in front of a bright sky and balloon mural.',
    },
    {
      src: '/gallery/gallery-07.png',
      alt: 'MEA batch group portrait with mural — seated front row and standing students.',
    },
    {
      src: '/gallery/gallery-08.png',
      alt: 'MEA students and faculty in a wide outdoor line in front of the landscape mural.',
    },
  ],
}

export const CONTACT = {
  title: 'Visit or reach out',
  intro:
    'Stop by during office hours, call, or message us on WhatsApp / Instagram. We will help you pick the right batch.',
}

/** Form submissions are sent by FormSubmit (no backend). First send may need inbox activation. */
export const ADMISSION = {
  title: 'Admission',
  intro:
    'Tell us about the student and we will get back to you on batches, timings, and a visit.',
  /** Receives the submission email (FormSubmit + mailto fallback). */
  notifyEmail: SITE.email,
  emailSubject: 'Murthy Educational Academy — Admission enquiry',
}

