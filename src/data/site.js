// ─────────────────────────────────────────────────────────────
//  SITE CONTENT — edit this file to change text, links and
//  contact details everywhere on the portfolio.
// ─────────────────────────────────────────────────────────────
import profilePhoto from '../assets/profile-pic.png'

export const profile = {
  name: 'Bob Andre Ongoy',
  firstName: 'Bob',
  tagline: 'Digital creator & problem solver',
  email: 'bobandre1904@gmail.com',
  location: 'Panabo City, Philippines',
  country: 'the Philippines',       // footer: "Made with ♥ in …"
  photo: profilePhoto
}

// Social links. `icon` is a Font Awesome class. Used in Contact + Footer.
export const socials = [
  { key: 'github', label: 'GitHub', url: 'https://github.com/bhax1', icon: 'fab fa-github' },
  { key: 'linkedin', label: 'LinkedIn', url: 'https://www.linkedin.com/in/bobandreongoy/', icon: 'fab fa-linkedin-in' },
  { key: 'facebook', label: 'Facebook', url: 'https://www.facebook.com/bobandre.joseongoy', icon: 'fab fa-facebook-f' },
  { key: 'twitter', label: 'Twitter', url: 'https://twitter.com/', icon: 'fab fa-twitter' }
]

export const blog = { label: 'Blog', url: 'https://dev.to/bhax1' }

export const getSocial = (key) => socials.find((s) => s.key === key)

export const navItems = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'journey', label: 'Journey' },
  { id: 'contact', label: 'Contact' }
]

export const hero = {
  pretitle: "Hello, I'm",
  subtitle: 'CS Student & Game Dev Hobbyist',
  description:
    'I make games and apps, and I like figuring out how they work. ' +
    'Mostly messing around with code and building stuff I want to play.',
  badgeText: 'Games • Web • Mobile • Always building •',
  primaryCta: 'View Projects',
  secondaryCta: "Let's Connect",
  // Icons in the scrolling marquee (devicon class names)
  techStack: [
    { name: 'JavaScript', icon: 'devicon-javascript-plain' },
    { name: 'TypeScript', icon: 'devicon-typescript-plain' },
    { name: 'React', icon: 'devicon-react-original' },
    { name: 'Svelte', icon: 'devicon-svelte-plain' },
    { name: 'Flutter', icon: 'devicon-flutter-plain' },
    { name: 'Java', icon: 'devicon-java-plain' },
    { name: 'Firebase', icon: 'devicon-firebase-plain' },
    { name: 'Supabase', icon: 'devicon-supabase-plain' },
    { name: 'PHP', icon: 'devicon-php-plain' },
    { name: 'MySQL', icon: 'devicon-mysql-plain' },
    { name: 'Flask', icon: 'devicon-flask-original' },
    { name: 'Git', icon: 'devicon-git-plain' },
    { name: 'Docker', icon: 'devicon-docker-plain' }
  ]
}

export const about = {
  // Use **double asterisks** for bold.
  paragraphs: [
    "I'm a Computer Science student. I started out writing small Java programs and " +
    'ended up building web and mobile apps along the way.',
    "These days I'm way more into **game development**. I like making things that " +
    "are fun to play, and I'm picking up new tools as I go."
  ],
  languagesTitle: 'Languages I Use',
  languages: ['Java', 'C++', 'JavaScript', 'TypeScript', 'PHP', 'Dart']
}

export const contact = {
  heading: "Let's chat",
  text:
    'Got a game idea, a project, or just want to say hi? ' +
    'Send me a message and I\'ll get back to you.',
  // Contact form is delivered via formsubmit.co to this address
  formRecipient: profile.email,
  formSubject: 'New message from portfolio!'
}

export const footer = {
  newsletterTitle: 'Stay Updated',
  newsletterPlaceholder: 'Your email address'
}
