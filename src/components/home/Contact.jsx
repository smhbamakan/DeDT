import { motion } from 'framer-motion'
import { FiGithub, FiBookOpen } from 'react-icons/fi'
import Section, { fadeUp } from '../ui/Section.jsx'
import { meta } from '../../data/project.js'

export default function Contact() {
  return (
    <Section id="contact" eyebrow="Get involved" title="Collaborate with us">
      <motion.div {...fadeUp} className="card p-6 sm:p-10 bg-brand-light/50 border-brand/15">
        <p className="text-ink-soft text-lg leading-relaxed max-w-2xl">
          We welcome researchers, industry partners and digital twin teams interested in testing the platform, sharing use cases, or joining webinars and pilot experiments.
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <a href={meta.github} target="_blank" rel="noreferrer" className="btn-primary">
            <FiGithub /> Source code on GitHub
          </a>
          <a href={meta.scholar} target="_blank" rel="noreferrer" className="btn-outline bg-white">
            <FiBookOpen /> Google Scholar
          </a>
        </div>
      </motion.div>
    </Section>
  )
}
