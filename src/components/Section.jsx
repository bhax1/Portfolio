import Reveal from './Reveal'

/**
 * Shared section shell: consistent id, spacing, eyebrow label and heading.
 *
 * `number` is supplied by App.jsx from the list of sections that actually
 * rendered, so both the numbering and the alternating background stay correct
 * when a section is hidden by emptying its data file.
 */
const Section = ({ id, number, eyebrow, title, description, children }) => {
  const label = number ? `${String(number).padStart(2, '0')} — ${eyebrow}` : eyebrow
  const alt = number % 2 === 1

  return (
    <section id={id} className={`section ${alt ? 'section--alt' : ''}`.trim()}>
      <div className="container">
        <Reveal className="section__header">
          {eyebrow && <p className="eyebrow">{label}</p>}
          <h2 className="section__title">{title}</h2>
          {description && <p className="section__description">{description}</p>}
        </Reveal>

        {children}
      </div>
    </section>
  )
}

export default Section
