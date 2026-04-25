/** Ashok Nagar centre — coordinates match the Google Maps pin you use. */
const MAP_CENTER = { lat: 17.404388, lng: 78.489365 }

export const SITE = {
  name: 'Murthy Education Academy',
  short: 'MEA',
  mapCenter: MAP_CENTER,
  tagline: 'Focused tuition in Maths, Physics & Biology for secondary school.',
  city: 'Hyderabad — Ashok Nagar (500 020), Telangana, India',
  address: [
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
  email: 'admissions@murthyeducationacademy.in',
  instagram: 'https://www.instagram.com/murthy_voora_87/',
  /** Opening post / reel to highlight in the “Reel” layout (full URL). */
  featuredReel: 'https://www.instagram.com/murthy_voora_87/',
  whatsapp: 'https://wa.me/919441896898',
  /**
   * Opens Google Maps at this pin (same as your shared link).
   */
  googleMapsUrl: 'https://maps.google.com/?q=17.404388,78.489365',
  /**
   * Same location as `mapCenter` — embedded map preview on the site.
   */
  googleMapsEmbedUrl: `https://www.google.com/maps?hl=en&q=${encodeURIComponent(
    `${MAP_CENTER.lat},${MAP_CENTER.lng}`,
  )}&z=16&output=embed`,
}

export const NAV = [
  { href: '#about', label: 'About' },
  { href: '#classes', label: 'Classes' },
  { href: '#faculty', label: 'Faculty' },
  { href: '#schedule', label: 'Schedule' },
  { href: '#admission', label: 'Admission' },
  { href: '#contact', label: 'Contact' },
]

/** Pop-out cards use placeholder photos — swap `image` URLs for your own files when ready. */
export const TEACHING_STAFF = {
  title: 'Meet the faculty',
  intro:
    'Murthy Education Academy has coached Mathematics & Sciences from Class VI to X since 1988. Our lead faculty combine board-focused teaching with patient doubt-solving.',
  members: [
    {
      name: 'V.S.R. Chandra Murthy',
      subjects: 'M.Sc., M.Ed., PGDCA · Mathematics & Sciences (VI–X)',
      yearsExp: 'Founder & lead faculty · with MEA since 1988',
      image:
        'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=400&h=500&q=80',
      color: '#fef3d9',
      shadow: 'color-mix(in srgb, #f4c430 45%, #c9a227)',
    },
    {
      name: 'V. Anuradha',
      subjects: 'B.Sc. · Sciences & student support (VI–X)',
      yearsExp: 'Faculty & co-ordination',
      image:
        'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&h=500&q=80',
      color: '#ffe8e0',
      shadow: 'color-mix(in srgb, #e8a090 50%, #c45c48)',
    },
  ],
}

export const HERO_COPY = {
  eyebrow: 'Est. 1988 · Tuition · Classes 9 & 10',
  lede: SITE.tagline,
  card: {
    label: 'This term',
    title: 'Board-ready practice',
    body:
      'Concept clarity, problem-solving routines, and exam-style drills tailored for Class 9 & 10.',
  },
}

export const STATS = [
  { k: '2 hr', v: 'Focused sessions' },
  { k: 'AM & PM', v: 'Morning & evening' },
]

/** Placeholder metrics — replace with verified figures from your records when ready. */
export const IMPACT = {
  eyebrow: 'By the numbers',
  title: 'Trust built over decades',
  intro:
    'A snapshot of our reach at a glance. These are illustrative for now; swap in your real student counts and milestones anytime.',
  stats: [
    { value: '1,180+', label: 'Students trained & guided', tone: 'gold' },
    { value: '2.1k+', label: 'Class hours (last year, est.)', tone: 'teal' },
    { value: '100%', label: 'Focus on every doubt', tone: 'ember' },
    { value: '36+', label: 'Years since 1988', tone: 'sage' },
  ],
}

export const ABOUT = {
  title: (short) => `Why families choose ${short}`,
  intro:
    'We are a long-running Hyderabad tuition centre (established 1988), now focused on small batches, patience, and consistent practice for secondary grades. Our goal is not just marks — it is lasting understanding students can carry into senior classes.',
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
      Mathematics, Physics, and Biology for <strong>Class 9</strong> and{' '}
      <strong>Class 10</strong> (state / CBSE-style syllabi). Batches are
      separate by grade and subject where enrolment allows.
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
  footnote:
    'Exact section assignment (grade / subject) is confirmed after a short counselling call or walk-in visit.',
  sessions: [
    { name: 'Morning', time: '5:30 AM – 7:30 AM', note: 'Ideal before school hours' },
    { name: 'Evening', time: '5:30 PM – 7:30 PM', note: 'After school / college prep' },
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
  /** Receives the submission email. */
  notifyEmail: 'manideepgrandhe@gmail.com',
  emailSubject: 'Murthy Education Academy — Admission enquiry',
}

