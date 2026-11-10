// Add, remove or reorder projects here. Images live in src/assets/projects/.
// `demo` (live site) and `code` (repo) are both optional. Each button only
// shows if you give it a real URL — just leave the field out to hide it:
//   private repo + public site  → only `demo`
//   public repo, no website     → only `code`  (e.g. a mobile app)
//   neither                     → no buttons at all
// `image` is optional — leave it out and the card shows a plain placeholder.
import otakulinkImage from '../assets/projects/otakulink.png'
import tetrominoImage from '../assets/projects/tetromino.png'

const projects = [
  {
    title: 'Tetromino Stack',
    description:
      'A falling blocks game you play in the browser, with a twist: cards to help you or mess with your rival, plus odd 5-square shapes. Has solo modes, online 1v1 and 2v2 matches, and a leaderboard.',
    tech: ['TypeScript', 'Svelte', 'Three.js', 'Cloudflare Workers', 'Hono'],
    image: tetrominoImage,
    demo: 'https://play.tetromino-stack.workers.dev/'
  },
  {
    title: 'OtakuLink',
    description:
      'A cross-platform manga community application built with Flutter and Firebase. Features include manga bookmarking, social interactions, and real-time chat. Manga data is sourced from the Jikan API with custom caching solutions.',
    tech: ['Flutter', 'Firebase', 'Jikan API', 'Dart', 'Provider'],
    image: otakulinkImage,
    code: ''
  }
]

export default projects
