import { motion } from 'framer-motion'
import { FiArrowRight } from 'react-icons/fi'
import Section, { fadeUp } from '../ui/Section.jsx'
import { workPackages, supportPackages } from '../../data/project.js'

export default function WorkPackages() {
  return (
    <Section
      id="work-packages"
      eyebrow="Work packages"
      title="How the project is organized"
      intro="Each work package delivers concrete results. Open a work package to see its tasks and deliverables."
    >
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {workPackages.map((wp, i) => {
          const ready = wp.deliverables.filter((d) => d.status === 'available').length
          return (
            <motion.a
              key={wp.n}
              href={`#/wp/${wp.n}`}
              {...fadeUp}
              transition={{ ...fadeUp.transition, delay: i * 0.05 }}
              className="card card-hover p-6 flex flex-col group"
            >
              <div className="flex items-center justify-between mb-3">
                <span className="text-sm font-bold text-brand">WP{wp.n}</span>
                <span className="text-xs text-ink-muted">M{wp.months[0]}–M{wp.months[1]}</span>
              </div>
              <h3 className="font-semibold text-lg text-ink leading-snug">{wp.title}</h3>
              <p className="mt-2 text-sm text-ink-soft leading-relaxed flex-1">{wp.short}</p>
              <div className="mt-5 flex items-center justify-between text-sm">
                <span className="text-ink-muted">
                  {wp.deliverables.length} deliverables{ready ? ` · ${ready} available` : ''}
                </span>
                <span className="inline-flex items-center gap-1 font-semibold text-brand group-hover:gap-2 transition-all">
                  View <FiArrowRight />
                </span>
              </div>
            </motion.a>
          )
        })}

        <motion.div {...fadeUp} className="rounded-2xl border border-dashed border-slate-300 p-6 bg-slate-50">
          <p className="text-sm font-bold text-ink-muted mb-3">Supporting work packages</p>
          <ul className="space-y-3">
            {supportPackages.map((s) => (
              <li key={s.n}>
                <p className="font-semibold text-ink">WP{s.n} · {s.title}</p>
                <p className="text-sm text-ink-soft">{s.text}</p>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </Section>
  )
}
