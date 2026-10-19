import { motion } from 'framer-motion'
import Section, { fadeUp } from '../ui/Section.jsx'
import { meta, workPackages, supportPackages } from '../../data/project.js'

const TICKS = [1, 6, 12, 18, 24]

export default function Timeline() {
  const total = meta.duration
  const pct = (m) => ((m - 1) / total) * 100
  const rows = [...workPackages, ...supportPackages]

  return (
    <Section id="timeline" eyebrow="Timeline" title={`${total}-month work plan`} tinted>
      <motion.div {...fadeUp} className="card p-4 sm:p-6">
        {/* Month axis */}
        <div className="grid grid-cols-[4.5rem_1fr] sm:grid-cols-[14rem_1fr] gap-3 mb-2">
          <span />
          <div className="relative h-5 text-xs text-ink-muted">
            {TICKS.map((m) => (
              <span key={m} className="absolute -translate-x-1/2" style={{ left: `${pct(m) + 100 / total / 2}%` }}>
                M{m}
              </span>
            ))}
          </div>
        </div>

        <ul className="space-y-2.5">
          {rows.map((wp) => {
            const [start, end] = wp.months
            const isMain = 'deliverables' in wp
            const label = (
              <>
                <span className="font-bold text-brand">WP{wp.n}</span>
                <span className="hidden sm:inline text-ink-soft"> · {wp.title}</span>
              </>
            )
            return (
              <li key={wp.n} className="grid grid-cols-[4.5rem_1fr] sm:grid-cols-[14rem_1fr] gap-3 items-center">
                {isMain ? (
                  <a href={`#/wp/${wp.n}`} className="text-sm truncate hover:underline">{label}</a>
                ) : (
                  <span className="text-sm truncate">{label}</span>
                )}
                <div className="relative h-6 rounded-md bg-slate-100">
                  <div
                    className={`absolute inset-y-0 rounded-md ${isMain ? 'bg-brand/85' : 'bg-slate-300'}`}
                    style={{ left: `${pct(start)}%`, width: `${((end - start + 1) / total) * 100}%` }}
                  />
                  {(wp.milestones ?? []).map((m) => (
                    <span
                      key={m.id}
                      title={`${m.id}: ${m.title} (M${m.month})`}
                      className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-3 h-3 rotate-45 bg-amber-400 border border-white"
                      style={{ left: `${pct(m.month) + 100 / total / 2}%` }}
                    />
                  ))}
                </div>
              </li>
            )
          })}
        </ul>
        <p className="mt-4 text-xs text-ink-muted flex items-center gap-2">
          <span className="inline-block w-2.5 h-2.5 rotate-45 bg-amber-400" /> Milestone (hover for details)
        </p>
      </motion.div>
    </Section>
  )
}
