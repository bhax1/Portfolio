import Reveal from '../components/Reveal'
import Section from '../components/Section'
import { profile, profilePhoto } from '../data'

const About = ({ number }) => (
  <Section id="about" number={number} eyebrow="About" title="Background">
    <div className="about">
      <Reveal className="about__body">
        {profile.about.map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}

        <dl className="facts">
          {profile.facts.map((fact) => (
            <div className="facts__row" key={fact.label}>
              <dt>{fact.label}</dt>
              <dd>{fact.value}</dd>
            </div>
          ))}
        </dl>
      </Reveal>

      <Reveal delay={0.1} className="about__aside">
        <img
          src={profilePhoto}
          alt={profile.name}
          className="about__photo"
          width="420"
          height="520"
          loading="lazy"
        />
      </Reveal>
    </div>
  </Section>
)

export default About
