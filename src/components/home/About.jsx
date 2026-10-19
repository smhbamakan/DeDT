import { motion } from 'framer-motion'
import Section, { fadeUp } from '../ui/Section.jsx'
import { about, challenges } from '../../data/project.js'

export default function About() {
  const figure = `${import.meta.env.BASE_URL}Figure_1.png`
  return (
    <Section id="about" eyebrow="About the project" title="Why decentralized digital twins?">
      <div className="grid lg:grid-cols-2 gap-10 items-start">
        <motion.div {...fadeUp} className="space-y-4 text-ink-soft leading-relaxed">
          {about.map((p) => (
            <p key={p}>{p}</p>
          ))}
          <div className="pt-4">
            <p className="font-semibold text-ink mb-3">Key challenges addressed</p>
            <ul className="flex flex-wrap gap-2">
              {challenges.map((c) => (
                <li key={c} className="chip">{c}</li>
              ))}
            </ul>
          </div>
        </motion.div>
        <motion.figure {...fadeUp} className="card p-3">
          <a href={figure} target="_blank" rel="noreferrer">
            <img src={figure} alt="DeDT framework: input data, physical and digital twins, key technologies and main challenges" className="w-full rounded-xl" loading="lazy" />
          </a>
          <figcaption className="text-xs text-ink-muted px-2 pt-3 pb-1">
            Decentralized Digital Twins platform: key technologies and critical challenges. Click to enlarge.
          </figcaption>
        </motion.figure>
      </div>
    </Section>
  )
}
