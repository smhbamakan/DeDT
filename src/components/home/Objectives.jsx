import { motion } from 'framer-motion'
import Section, { fadeUp } from '../ui/Section.jsx'
import { objectives } from '../../data/project.js'

export default function Objectives() {
  return (
    <Section id="objectives" eyebrow="Research objectives" title="Four objectives" tinted>
      <div className="grid sm:grid-cols-2 gap-5">
        {objectives.map((o, i) => (
          <motion.article key={o.id} {...fadeUp} transition={{ ...fadeUp.transition, delay: i * 0.06 }} className="card p-6">
            <div className="flex items-center gap-3 mb-3">
              <span className="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-brand text-white font-bold">{o.id}</span>
              <h3 className="font-semibold text-lg text-ink">{o.title}</h3>
            </div>
            <p className="text-ink-soft leading-relaxed">{o.text}</p>
            <p className="mt-4 flex flex-wrap gap-2">
              {o.wps.map((n) => (
                <a key={n} href={`#/wp/${n}`} className="chip hover:bg-brand hover:text-white transition-colors">
                  WP{n} →
                </a>
              ))}
            </p>
          </motion.article>
        ))}
      </div>
    </Section>
  )
}
