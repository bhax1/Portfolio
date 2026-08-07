/**
 * PERSONAL INFORMATION
 * --------------------
 * Everything about you. Edit the values below — nothing else needs to change.
 */

export const profile = {
  // Shown in the browser tab, the nav mark and the footer.
  name: 'Bob Andre Ongoy',
  initials: 'BO',

  // One short line under your name. Keep it factual.
  role: 'Computer Science Student & Full-Stack Developer',

  // Two or three sentences max. This is the hero paragraph.
  summary:
    'I build web, desktop and mobile applications — mostly with React, Flutter and PHP. Currently finishing my CS degree at the University of Mindanao while working on projects that people actually use.',

  location: 'Davao City, Philippines',
  email: 'b.ongoy.534716@umindanao.edu.ph',

  // Set `available` to false to hide the status pill in the hero.
  status: {
    available: true,
    label: 'Open to internships',
  },

  // Longer bio for the About section. Add or remove paragraphs freely.
  about: [
    'I started with small Java desktop apps and gradually moved into full-stack work — building the database, the API and the interface for the same project. That end-to-end view is still how I like to work.',
    'Right now I am focused on getting better at machine learning and cloud deployment, while keeping my web and mobile skills sharp. I care about code that is readable six months later.',
  ],

  // Short scannable facts shown beside the bio. Add as many as you like.
  facts: [
    { label: 'Education', value: 'BS Computer Science, University of Mindanao' },
    { label: 'Focus', value: 'Full-stack web, mobile, data' },
    { label: 'Based in', value: 'Davao City, Philippines' },
    { label: 'Languages', value: 'English, Filipino, Bisaya' },
  ],
}

/**
 * SOCIAL LINKS
 * ------------
 * `icon` must be one of the keys in src/components/Icon.jsx.
 * Delete any entry you do not use — nothing breaks.
 */
export const socials = [
  { label: 'GitHub', href: 'https://github.com/bhax1', icon: 'github' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/bobandreongoy/', icon: 'linkedin' },
  { label: 'Email', href: 'mailto:b.ongoy.534716@umindanao.edu.ph', icon: 'mail' },
]

/**
 * NAVIGATION
 * ----------
 * Controls the header links and their order. The `id` must match the
 * section id rendered in src/App.jsx.
 */
export const navItems = [
  { id: 'about', label: 'About' },
  { id: 'projects', label: 'Projects' },
  { id: 'skills', label: 'Skills' },
  { id: 'experience', label: 'Experience' },
  { id: 'achievements', label: 'Achievements' },
  { id: 'contact', label: 'Contact' },
]
