// Starter content. The site uses Sanity content when it exists and falls back to this.
// The Studio's "Starter content" tool copies this into Sanity (with the /seed media).

export const site = {
  name: 'Bluewater Post-Acute',
  formerName: 'Westlake Nursing and Rehab Center',
  phone: '(954) 927-0508',
  phoneHref: '+19549270508',
  fax: '',
  email: '',
  street: '440 Phippen Waiters Road',
  city: 'Dania Beach',
  state: 'FL',
  zip: '33004',
  beds: 88,
  ga4Id: 'G-YG72GB3P07',
  careersUrl:
    'https://workforcenow.adp.com/mascsr/default/mdf/recruitment/recruitment.html?cid=6cce395c-2392-4106-a2e8-7c1489b89156&ccId=9206980123213_2&lang=en_US',
  mapsUrl: 'https://www.google.com/maps/place/440+Phippen+Waiters+Rd,+Dania+Beach,+FL+33004',
};

export const home = {
  heroTitle: 'Skilled nursing and short-term rehab in Dania Beach',
  heroText:
    'An 88-bed skilled nursing facility with registered nurses on duty 24 hours a day and an in-house therapy team focused on getting you back to your highest level of independence.',
  heroProof: ['Medicare & Medicaid accepted', 'Registered nurses 24/7', 'In-house PT, OT & speech therapy'],
  heroVideos: ['/seed/hero-1.mp4', '/seed/hero-2.mp4', '/seed/hero-3.mp4'],
  heroPoster: '/seed/hero.jpg',
  payers: ['Medicare', 'Medicaid'],
  introTitle: 'Care built around getting you back to your highest level of function',
  introText:
    'Whether you need a few weeks of rehab after surgery or longer-term skilled nursing, our team builds an individualized care plan around you, and families are encouraged to join therapy sessions and caregiver training.',
  introPoints: [
    '24-hour skilled nursing with registered nurses around the clock',
    'In-house physical, occupational and speech therapy',
    'Onsite Medical Director and an on-staff registered dietitian',
  ],
  introImage: '/seed/ot-kitchen.jpg',
  chapterTitle: 'New name. New ownership. The same commitment to every resident.',
  chapterText: [
    'Bluewater Post-Acute is under new ownership with a new leadership team, focused on doing the everyday things well: consistent nursing, attentive therapy and clear communication with families.',
    "We'd love for you to see the difference for yourself. Stop by for a tour, meet our team and ask us anything.",
  ],
  steps: [
    { title: 'Call or schedule a tour', body: 'Talk with our team or come see the facility in person.' },
    { title: 'We handle the transition', body: 'Our social services team takes care of the administrative details and supports your family through the move.' },
    { title: 'A plan built for you', body: 'Nursing and therapy build an individualized care plan around your goals.' },
    { title: 'Family stays involved', body: 'Families are welcome in therapy sessions and receive caregiver education and training.' },
  ],
  gallery: [
    { image: '/seed/courtyard.jpg', caption: 'Outdoor courtyard' },
    { image: '/seed/private-room.jpg', caption: 'Private room' },
    { image: '/seed/therapy-gym.jpg', caption: 'Therapy gym' },
    { image: '/seed/dining.jpg', caption: 'Dining room' },
  ],
  lifeImage: '/seed/garden.jpg',
  activities: [
    'Musical performances', 'Gardening', 'Field trips & outings', 'Fitness & stretching', 'Trivia & games',
    'Religious meetings', 'Current events', 'Resident & family councils', 'Volunteer program', 'Community celebrations',
  ],
  stats: [
    { value: '88', label: 'Beds' },
    { value: '24/7', label: 'Registered nurses on duty' },
    { value: '3', label: 'In-house therapy disciplines' },
  ],
  faqs: [
    { q: 'Do you accept Medicare and Medicaid?', a: 'Yes. Bluewater accepts both Medicare and Medicaid, and we work with many Medicare Advantage and managed care plans. Call us and we will check your coverage with you.' },
    { q: 'What kinds of therapy do you offer?', a: 'Our in-house team provides physical, occupational and speech therapy, with an individualized program for each resident. Families are encouraged to join sessions and caregiver training.' },
    { q: 'Is a nurse on site around the clock?', a: 'Yes. We provide 24-hour skilled nursing with registered nurses on duty, overseen by our Director of Nursing and an onsite Medical Director.' },
    { q: 'Can you help with the move from the hospital?', a: 'Yes. Our social services team handles the administrative details and supports you and your family through every step of the transition.' },
    { q: 'Was Bluewater formerly Westlake Nursing and Rehab Center?', a: 'Yes. The facility is now Bluewater Post-Acute, under new ownership with a new leadership team. We invite you to tour and meet the team.' },
  ],
};

export type ServiceSection = { heading: string; text?: string; bullets?: string[] };
export type Service = {
  slug: string;
  title: string;
  summary: string;
  image: string;
  intro: string;
  sections: ServiceSection[];
  showOnHome: boolean;
  hasPage: boolean;
};

export const services: Service[] = [
  {
    slug: 'skilled-nursing',
    title: 'Skilled Nursing',
    summary: '24-hour nursing care with registered nurses on duty around the clock, led by an onsite Medical Director and Director of Nursing.',
    image: '/seed/skilled-nursing.jpg',
    intro: 'Our skilled nurses provide high-quality care 24 hours a day, 7 days a week. Injury and illness can come at an unexpected time, and we are here to get our residents to their highest level of independence and function.',
    sections: [
      {
        heading: 'What we provide',
        bullets: [
          'Onsite Medical Director who coordinates and improves medical services',
          'Director of Nursing who oversees all aspects of healthcare in the facility',
          'Individualized resident care plans', 'IV therapy', 'Dementia care', 'Wound care', 'Enteral feeding program',
          'Catheter, colostomy and ileostomy care', 'Off-site dialysis', 'Nutrition and hydration programs',
          'Medication management and education', 'Diabetic management and education', 'Restorative nursing', 'Pain management',
          'Post-hospital extended care', 'Hospice, respite and GIP services', 'Bowel and bladder programs', 'Family education',
          'In-house continued learning and CNA training programs', 'Psychologist', 'Audiology services', 'On-staff registered dietitian',
          'Laboratory testing and X-rays', 'Transportation service',
        ],
      },
      {
        heading: 'Restorative nursing',
        text: 'For long-term residents who need a specialized restorative program, our therapy and nursing teams build individualized plans. This service is included in the room and board fee.',
        bullets: [
          'Ambulation', 'Range of motion', 'Activities of daily living', 'Positioning and alignment', 'Skin integrity and wound management',
          'Contracture management', 'Bowel and bladder training', 'Rehabilitative and social dining', 'Strengthening and restraint reduction',
          'Weekly and monthly height and weight monitoring',
        ],
      },
      { heading: 'Dementia and Alzheimer’s care', text: 'Our nurses work with each family to create a comfortable environment, including simple routines and visual cues as a positive substitute for diminishing mental processes.' },
      { heading: 'Diabetes management', text: 'Our nurses help with every part of managing diabetes, including blood glucose monitoring, insulin administration and tracking, exercise plans, menu planning and education.' },
      { heading: 'Dietary program', text: 'Our dietary department prepares meals to meet each resident’s dietary and therapeutic needs, according to physician orders. Oral supplemental diets are available, and our registered dietitian performs regular nutritional assessments.' },
    ],
    showOnHome: true,
    hasPage: true,
  },
  {
    slug: 'rehabilitation',
    title: 'Short-Term Rehabilitation',
    summary: 'Physical, occupational and speech therapy to help you recover after surgery, injury or illness.',
    image: '/seed/rehabilitation.jpg',
    intro: 'Our in-house rehabilitation team is dedicated to restoring residents’ functional mobility through individualized programs that build independence. Families are encouraged to take part in therapy sessions, caregiver education and training.',
    sections: [
      {
        heading: 'Physical therapy',
        text: 'Our physical therapists evaluate each resident and build an individualized program aimed at the highest possible level of independence and safety.',
        bullets: [
          'Strength and mobility in the body and lower extremities', 'Motor control after a stroke',
          'Coordination, balance and walking after a fracture', 'Strength conditioning, range of motion and endurance',
          'Pain management', 'Proper body mechanics to prevent injury', 'Safety awareness',
        ],
      },
      {
        heading: 'Occupational therapy',
        text: 'Our occupational therapists use task-directed activities to help residents whose daily activities and independence have been affected by illness, injury or aging, including residents with arthritis or impaired vision or hearing.',
        bullets: [
          'Functional independence: eating, bathing, toileting, homemaking and cooking', 'Dressing and grooming',
          'Home assessments, modifications and adaptive equipment', 'Safety awareness',
        ],
      },
      {
        heading: 'Speech therapy',
        text: 'Our speech therapists help restore communication, swallowing and cognition for residents affected by stroke, brain injury, dementia, hearing impairment and other conditions.',
        bullets: [
          'Speech and voice clarity', 'Comprehension and verbal expression', 'Chewing and swallowing',
          'Memory, problem-solving and reasoning', 'Family and caregiver education and training',
        ],
      },
    ],
    showOnHome: true,
    hasPage: true,
  },
  {
    slug: 'wound-care',
    title: 'Wound Care',
    summary: 'Personalized treatment plans for diabetic and pressure ulcers, surgical wounds and other chronic, non-healing wounds.',
    image: '/seed/wound-care.jpg',
    intro: 'Our wound care team uses personalized treatment plans to promote healing for severe and chronic wounds, and guides each resident and family through every step.',
    sections: [
      {
        heading: 'We treat',
        bullets: [
          'Diabetic and pressure ulcers', 'Surgical wounds', 'Traumatic wounds', 'Persistent skin irritations',
          'Venous insufficiency', 'Neuropathic ulcers', 'Vasculitis and other inflammatory ulcers', 'Other chronic, non-healing wounds',
        ],
      },
    ],
    showOnHome: true,
    hasPage: true,
  },
  {
    slug: 'iv-therapy',
    title: 'IV Therapy',
    summary: 'Fluids, specialty medications and nutritional supplements, as prescribed, to support your recovery.',
    image: '/seed/iv-therapy.jpg',
    intro: '', sections: [], showOnHome: true, hasPage: false,
  },
  {
    slug: 'dementia-care',
    title: 'Dementia & Alzheimer’s Care',
    summary: 'Simple routines and visual cues, created together with your family, in a comfortable environment.',
    image: '/seed/dementia-care.jpg',
    intro: '', sections: [], showOnHome: true, hasPage: false,
  },
  {
    slug: 'post-hospital-care',
    title: 'Post-Hospital Extended Care',
    summary: 'Recently discharged but still need time to heal? Our team helps you get stronger before heading home.',
    image: '/seed/post-hospital.jpg',
    intro: '', sections: [], showOnHome: true, hasPage: false,
  },
  {
    slug: 'activities',
    title: 'Activities',
    summary: 'A full calendar of events, outings and celebrations that keep residents active and connected with family.',
    image: '/seed/garden.jpg',
    intro: 'Staying active and socially engaged matters for every resident’s health and well-being. Regular events bring families together and keep residents physically and mentally engaged.',
    sections: [
      {
        heading: 'We provide',
        bullets: [
          'Active resident and family councils', 'Musical performances', 'Current events updates', 'Reading the newspaper',
          'Singing exercises', 'Fitness and stretching', 'Religious meetings', 'Entertainment, games and trivia', 'History',
          'Gardening', 'Field trips and outings', 'Volunteer involvement',
        ],
      },
    ],
    showOnHome: false,
    hasPage: true,
  },
  {
    slug: 'social-services',
    title: 'Social Services',
    summary: 'Help with the move, paperwork and appointments so families can focus on recovery.',
    image: '/seed/post-hospital.jpg',
    intro: 'Moving into a nursing facility can be emotional. Our social services team guides you and your family through each step, from the administrative details to emotional support.',
    sections: [
      {
        heading: 'We assist with',
        bullets: [
          'Dental, vision, podiatry and audiology', 'Dementia assessment', 'Power of attorney',
          'Psychosocial and psychiatric evaluation', 'Individual therapy', 'Transportation to appointments',
          'Accompanying residents to appointments on request',
        ],
      },
    ],
    showOnHome: false,
    hasPage: true,
  },
];

export const leaders = [
  { name: '[Name]', role: 'Administrator', bio: '[One line on their background and what they focus on]', photo: '' },
  { name: '[Name]', role: 'Director of Nursing', bio: '[One line on their background and what they focus on]', photo: '' },
  { name: '[Name]', role: 'Medical Director', bio: '[One line on their background and what they focus on]', photo: '' },
];

export const legalPages = [
  {
    slug: 'privacy-policy',
    title: 'Privacy Policy',
    body: [
      'This policy explains how Bluewater Post-Acute handles information collected through this website. It does not cover protected health information, which is governed by our Notice of Privacy Practices.',
      '## Information we collect',
      'We collect the information you choose to send through our forms, such as your name, phone number, email address and message. We also collect standard, non-identifying website data such as browser type, pages visited and referring site.',
      '## How we use it',
      'We use your information to respond to your request, schedule tours, deliver greetings to residents and improve this website. We do not sell your personal information.',
      '## Analytics and cookies',
      'We use Google Analytics to understand how visitors use the site. Google Analytics uses cookies; you can block cookies in your browser settings.',
      '## Please do not send medical details',
      'Our website forms are not intended for medical information. Please call us at (954) 927-0508 to discuss care.',
      '## Contact',
      'Questions about this policy can be directed to Bluewater Post-Acute, 440 Phippen Waiters Road, Dania Beach, FL 33004, (954) 927-0508.',
    ],
  },
  {
    slug: 'terms-conditions',
    title: 'Terms & Conditions',
    body: [
      'By using this website you agree to these terms.',
      '## Information only',
      'Content on this site is general information about our services and is not medical advice. Contact a medical professional about your specific situation.',
      '## Use of content',
      'Text, photos and graphics on this site may not be copied or republished without written permission from Bluewater Post-Acute.',
      '## Links to other sites',
      'We are not responsible for the content or privacy practices of websites we link to.',
      '## Disclaimer',
      'This website is provided "as is." To the extent permitted by law, Bluewater Post-Acute is not liable for damages arising from its use.',
      '## Changes',
      'We may update these terms at any time. Continued use of the site means you accept the updated terms.',
    ],
  },
  {
    slug: 'web-accessibility',
    title: 'Web Accessibility',
    body: [
      'Bluewater Post-Acute is committed to making this website usable by everyone, including people with disabilities. We design to the Web Content Accessibility Guidelines (WCAG) 2.1 Level AA and review the site regularly.',
      'If you have trouble using any part of the site, please call us at (954) 927-0508 or use our contact form, and include the page address. We will work with you to provide the information you need.',
    ],
  },
];

export const greetingCards = ['Get well soon', 'Happy birthday', 'Holiday', 'Thinking of you'];

// Old WordPress URLs and where they now live.
export const redirects: [string, string][] = [
  ['/site-map', '/'],
  ['/our-team', '/about-us/#leadership'],
  ['/photo-gallery', '/about-us/#gallery'],
  ['/send-a-greeting/get-well-soon-cards', '/send-a-greeting/'],
  ['/send-a-greeting/happy-birthday-cards', '/send-a-greeting/'],
  ['/send-a-greeting/holiday-cards', '/send-a-greeting/'],
  ['/send-a-greeting/thinking-of-you-cards', '/send-a-greeting/'],
];
