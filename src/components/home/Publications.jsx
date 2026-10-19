import { motion } from 'framer-motion'
import Section, { fadeUp } from '../ui/Section.jsx'
import PublicationCard from '../ui/PublicationCard.jsx'
import { publications } from '../../data/project.js'

export default function Publications() {
  return (
    <Section id="publications" eyebrow="Research outputs" title="Publications">
      <div className="space-y-5">
        {publications.map((p) => (
          <motion.div key={p.title} {...fadeUp}>
            <PublicationCard p={p} />
          </motion.div>
        ))}
      </div>
    </Section>
  )
}
