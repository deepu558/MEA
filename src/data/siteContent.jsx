/** Map centre (Panjagutta) — used for embed preview; tweak if the pin is off. */
const MAP_CENTER = { lat: 17.4163, lng: 78.456 }

export const SITE = {
  name: 'Murthy Education Academy',
  short: 'MEA',
  mapCenter: MAP_CENTER,
  tagline: 'Focused tuition in Maths, Physics & Biology for secondary school.',
  city: 'Hyderabad, Telangana, India',
  address: [
    '2nd Floor, Srinidhi Plaza, Plot 18',
    'Road No. 5, Nagarjuna Hills, Panjagutta',
    'Hyderabad — 500082, Telangana, India',
  ],
  phoneDisplay: '+91 98482 91763',
  phoneTel: '+919848291763',
  email: 'admissions@murthyeducationacademy.in',
  instagram: 'https://www.instagram.com/murthy_education_academy/',
  /** Opening post / reel to highlight in the “Reel” layout (full URL). */
  featuredReel:
    'https://www.instagram.com/reel/DWfOmGiDCS6/?igsh=MTJnZXYxd3lpNHJzOQ==',
  whatsapp: 'https://wa.me/919848291763',
  /**
   * Opens Google Maps at this place (map + pin), not turn-by-turn directions.
   */
  googleMapsUrl:
    'https://www.google.com/maps/search/?api=1&query=' +
    encodeURIComponent(
      '2nd Floor, Srinidhi Plaza, Plot 18, Road No. 5, Nagarjuna Hills, Panjagutta, Hyderabad, Telangana 500082, India',
    ),
  /**
   * Same location as `mapCenter` — used only for the small embedded preview.
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

/** Placeholder portraits (replace with your team). Colours: pastel fills + offset-shadow tint. */
export const TEACHING_STAFF = {
  title: 'Meet the faculty',
  intro:
    'Experienced teachers who keep concepts clear, pace steady, and doubt-solving approachable.',
  members: [
    {
      name: 'Dr. Ananya Iyer',
      subjects: 'Mathematics · Classes 9 & 10',
      yearsExp: '14 years teaching',
      image:
        'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&h=500&q=80',
      color: '#fef3d9',
      shadow: 'color-mix(in srgb, #f4c430 45%, #c9a227)',
    },
    {
      name: 'R. Karthik Reddy',
      subjects: 'Physics · Classes 9 & 10',
      yearsExp: '11 years teaching',
      image:
        'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=400&h=500&q=80',
      color: '#ffe8e0',
      shadow: 'color-mix(in srgb, #e8a090 50%, #c45c48)',
    },
    {
      name: 'Sunita Menon',
      subjects: 'Mathematics · problem-solving focus',
      yearsExp: '9 years teaching',
      image:
        'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=400&h=500&q=80',
      color: '#d9f5ec',
      shadow: 'color-mix(in srgb, #5dbe9d 50%, #2d8a6a)',
    },
    {
      name: 'Vikram Prasad',
      subjects: 'Physics · numericals & practicals',
      yearsExp: '12 years teaching',
      image:
        'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&h=500&q=80',
      color: '#e3eefc',
      shadow: 'color-mix(in srgb, #6b9bd1 50%, #3d6fa8)',
    },
    {
      name: 'Dr. Meera Krishnan',
      subjects: 'Biology · Classes 9 & 10',
      yearsExp: '10 years teaching',
      image:
        'https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=400&h=500&q=80',
      color: '#ecfdf3',
      shadow: 'color-mix(in srgb, #22c55e 40%, #15803d)',
    },
  ],
}

export const HERO_COPY = {
  eyebrow: 'Tuition centre · Classes 9 & 10',
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
  { k: 'Hyderabad', v: 'Panjagutta centre' },
]

export const ABOUT = {
  title: (short) => `Why families choose ${short}`,
  intro:
    'We are a small-batch tuition centre in Hyderabad, built around patience, structure, and consistent practice. Our goal is not just marks — it is lasting understanding students can carry into senior classes.',
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

/** “Classic hero + search” layout — full-bleed class photos, slider copy, find form. */
export const HERO_SEARCH = {
  slides: [
    {
      image:
        'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=1920&h=900&q=80',
      eyebrow: `Welcome to ${SITE.short}`,
      title: 'Board-ready learning in a calm, steady classroom',
      sub: 'Maths, Physics & Biology for Classes 9 & 10 — Hyderabad, Panjagutta',
    },
    {
      image:
        'https://images.unsplash.com/photo-1580582932707-520ead9374d7?auto=format&fit=crop&w=1920&h=900&q=80',
      eyebrow: 'Small batches · clear explanations',
      title: 'Room to ask questions, space to revise',
      sub: 'Two-hour sessions, morning and evening, structured for exam confidence.',
    },
    {
      image:
        'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=1920&h=900&q=80',
      eyebrow: 'Parents & students',
      title: 'Visit us for a short counselling and batch pick',
      sub: "We're here to help you choose the right section — not a hard sell.",
    },
    {
      image:
        'https://images.unsplash.com/photo-1529390079861-591de354faf5?auto=format&fit=crop&w=1920&h=900&q=80',
      eyebrow: 'Your pathway forward',
      title: 'Build habits that outlast a single test',
      sub: 'Concept clarity, practice, and support through Class 9 & 10.',
    },
  ],
  promo:
    'Free counselling & batch visit — we help you pick Maths, Physics, Biology, and timing. Panjagutta, Hyderabad.',
  find: {
    title: 'Find the right class',
    sub:
      'Choose your options — on submit we take you to contact so you can call, WhatsApp, or visit.',
    cta: 'View contact & timings',
  },
  searchFields: [
    {
      id: 'field-grade',
      label: 'Class',
      name: 'grade',
      options: [
        { value: '', label: '— Select —' },
        { value: '9', label: 'Class 9' },
        { value: '10', label: 'Class 10' },
      ],
    },
    {
      id: 'field-syllabus',
      label: 'Syllabus',
      name: 'syllabus',
      options: [
        { value: '', label: '— Select —' },
        { value: 'state', label: 'State / SSC-style' },
        { value: 'cbse', label: 'CBSE-style' },
      ],
    },
    {
      id: 'field-subject',
      label: 'Subject',
      name: 'subject',
      options: [
        { value: '', label: '— Select —' },
        { value: 'maths', label: 'Mathematics' },
        { value: 'physics', label: 'Physics' },
        { value: 'biology', label: 'Biology' },
        { value: 'both', label: 'Maths + Physics' },
        { value: 'all_three', label: 'Maths + Physics + Biology' },
      ],
    },
    {
      id: 'field-slot',
      label: 'Batch timing',
      name: 'slot',
      options: [
        { value: '', label: '— Select —' },
        { value: 'morning', label: 'Morning (5:30 – 7:30)' },
        { value: 'evening', label: 'Evening (5:30 – 7:30)' },
        { value: 'unsure', label: 'Not sure yet' },
      ],
    },
  ],
}
