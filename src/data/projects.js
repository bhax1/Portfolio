/**
 * PROJECTS
 * --------
 * ADD     copy any block below, paste it, edit the fields.
 * UPDATE  edit the block in place.
 * REMOVE  delete the block (or comment it out with a leading //).
 * REORDER move blocks around — the page follows this order exactly.
 *
 * Only `title` is required. Every other field can be left out or left empty,
 * and the card simply drops that part instead of showing a gap.
 *
 *   title       required — the project name
 *   year        shown as a small label in the card corner
 *   description one or two plain sentences
 *   tech        array of strings, rendered as tags
 *   image       filename only, e.g. 'otomoto.png'
 *               → put the file in src/assets/projects/ first
 *               → no import needed; a typo logs a warning in `npm run dev`
 *   demo        live URL — empty or missing hides the "Live demo" link
 *   code        repo URL — empty or missing hides the "Source code" link
 *   featured    true puts the card full-width with the image beside the text
 *
 * Emptying the whole array hides the Projects section and its nav link.
 */

export const projects = [
  {
    title: 'OtakuLink',
    year: '2025',
    description:
      'Cross-platform manga community app. Bookmarking, social feeds and real-time chat, with manga data pulled from the Jikan API behind a local cache layer.',
    tech: ['Flutter', 'Dart', 'Firebase', 'Jikan API'],
    image: 'otakulink.png',
    demo: '',
    code: '',
    featured: true,
  },
  {
    title: 'Otomoto',
    year: '2024',
    description:
      'Car rental system built across two Software Engineering courses: a desktop app for staff and a responsive site for customers, with authentication, live booking, return tracking and automated late fees.',
    tech: ['PHP', 'Flutter', 'Supabase', 'Firebase'],
    image: 'otomoto.png',
    demo: '',
    code: '',
  },
  {
    title: 'Codixs',
    year: '2024',
    description:
      'Web-based coding quiz platform with quiz authoring, per-user progress tracking and leaderboards.',
    tech: ['PHP', 'JavaScript', 'MySQL'],
    image: 'codixs.png',
    demo: '',
    code: '',
  },
  {
    title: 'SoloHub',
    year: '2024',
    description:
      'Productivity suite for freelancers covering task tracking and client management, with authenticated accounts and real-time updates.',
    tech: ['Python', 'Flask', 'Go', 'JavaScript', 'Firebase'],
    image: 'solohub.png',
    demo: '',
    code: '',
  },
  {
    title: 'Spam Detector',
    year: '2024',
    description:
      'Message classifier trained in Google Colab on a Naive Bayes model with text vectorization, served through a Streamlit interface.',
    tech: ['Python', 'Streamlit', 'scikit-learn'],
    image: 'spam-detector.png',
    demo: '',
    code: '',
  },
  {
    title: 'Library System',
    year: '2023',
    description:
      'Java desktop application for managing books and members: borrowing, returning, late fee calculation and file-based persistence.',
    tech: ['Java', 'Swing', 'File I/O'],
    image: 'slibrary.png',
    demo: '',
    code: '',
  },
]

/** Link shown under the project grid. Set to '' to hide it. */
export const moreProjectsUrl = 'https://github.com/bhax1'
