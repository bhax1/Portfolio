/**
 * Small subsequence matcher for the command palette.
 *
 * Every query character has to appear in order, so "spmdt" still finds
 * "Spam Detector". Matches score higher when characters land consecutively or
 * at the start of a word, which keeps the obvious result on top.
 */

const CONSECUTIVE_BONUS = 8
const WORD_START_BONUS = 12
const LEADING_PENALTY = 2

export function fuzzyScore(text, query) {
  if (!query) return 0

  const haystack = text.toLowerCase()
  const needle = query.toLowerCase()

  let score = 0
  let cursor = 0
  let previousIndex = -1

  for (const char of needle) {
    const index = haystack.indexOf(char, cursor)
    if (index === -1) return -1

    if (index === previousIndex + 1) score += CONSECUTIVE_BONUS
    if (index === 0 || /[\s\-/·]/.test(haystack[index - 1])) score += WORD_START_BONUS

    // Prefer matches that start early in the string.
    if (previousIndex === -1) score -= Math.min(index, 20) * LEADING_PENALTY

    previousIndex = index
    cursor = index + 1
    score += 1
  }

  // Shorter labels are usually the more precise hit.
  return score - haystack.length * 0.05
}

/** Filters and sorts commands by score, keeping original order when unqueried. */
export function filterCommands(commands, query) {
  if (!query.trim()) return commands

  return commands
    .map((command) => ({
      command,
      score: Math.max(
        fuzzyScore(command.label, query),
        // Matching the group and keywords too means "dark" finds "Toggle theme".
        fuzzyScore(`${command.group} ${command.keywords ?? ''}`, query) - 6
      ),
    }))
    .filter((entry) => entry.score > -1)
    .sort((a, b) => b.score - a.score)
    .map((entry) => entry.command)
}
