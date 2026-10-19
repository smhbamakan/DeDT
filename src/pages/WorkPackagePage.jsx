import { motion } from 'framer-motion'
import { FiArrowLeft, FiArrowRight, FiFlag, FiGithub } from 'react-icons/fi'
import DeliverableCard from '../components/wp/DeliverableCard.jsx'
import { goToSection } from '../hooks/useHashRoute.js'
import { workPackages, objectives } from '../data/project.js'

export default function WorkPackagePage({ wp }) {
  const idx = workPackages.indexOf(wp)
  const prev = workPackages[idx - 1]
  const next = workPackages[idx + 1]
  const objs = objectives.filter((o) => wp.objectives.includes(o.id))

  return (
    <motion.div key={wp.n} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.3 }}>
      {/* Header */}
      <section className="bg-gradient-to-b from-brand-light/70 to-white border-b border-slate-200">
        <div className="container-page py-12 lg:py-16">
          <button onClick={() => goToSection('work-packages')} className="inline-flex items-center gap-1.5 text-sm font-medium text-brand hover:underline mb-6">
            <FiArrowLeft /> All work packages
          </button>
          <p className="eyebrow mb-2">
            Work package {wp.n} · Months {wp.months[0]}–{wp.months[1]}
          </p>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-ink">{wp.title}</h1>
          <p className="mt-4 text-lg text-ink-soft max-w-3xl">{wp.short}</p>
          <ul className="mt-6 flex flex-wrap gap-2">
            {objs.map((o) => (
              <li key={o.id} className="chip" title={o.text}>
                {o.id} · {o.title}
              </li>
            ))}
          </ul>
          {wp.code && (
            <a href={wp.code} target="_blank" rel="noreferrer" className="btn-primary mt-6">
              <FiGithub /> View code on GitHub
            </a>
          )}
        </div>
      </section>

      <div className="container-page py-12 space-y-14">
        {/* Problem → Solution → Techniques */}
        <section className="grid md:grid-cols-3 gap-5">
          {[
            ['Problem', wp.problem],
            ['Solution', wp.solution],
            ['Methods', wp.techniques],
          ].map(([label, text], i) => (
            <div key={label} className="card p-5">
              <p className="text-xs font-bold uppercase tracking-wider text-accent mb-2">
                {i + 1}. {label}
              </p>
              <p className="text-ink-soft leading-relaxed">{text}</p>
            </div>
          ))}
        </section>

        {/* Deliverables */}
        <section>
          <h2 className="text-2xl font-bold text-ink mb-5">Deliverables</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {wp.deliverables.map((d) => (
              <DeliverableCard key={d.id} d={d} />
            ))}
          </div>
        </section>

        {/* Tasks & milestones */}
        <section className="grid lg:grid-cols-[3fr_2fr] gap-8">
          <div>
            <h2 className="text-2xl font-bold text-ink mb-4">Tasks</h2>
            <ul className="space-y-2">
              {wp.tasks.map((t) => (
                <li key={t} className="flex gap-3 text-ink-soft">
                  <span className="mt-2 w-1.5 h-1.5 rounded-full bg-brand shrink-0" />
                  {t}
                </li>
              ))}
            </ul>
          </div>
          {wp.milestones.length > 0 && (
            <div>
              <h2 className="text-2xl font-bold text-ink mb-4">Milestones</h2>
              <ul className="space-y-3">
                {wp.milestones.map((m) => (
                  <li key={m.id} className="flex gap-3">
                    <FiFlag className="mt-1 text-amber-500 shrink-0" />
                    <span className="text-ink-soft">
                      <span className="font-semibold text-ink">{m.id}</span> · {m.title}{' '}
                      <span className="text-ink-muted text-sm">(M{m.month})</span>
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </section>

        {/* Prev / next */}
        <nav className="flex justify-between gap-4 pt-8 border-t border-slate-200">
          {prev ? (
            <a href={`#/wp/${prev.n}`} className="group text-sm">
              <span className="flex items-center gap-1 text-ink-muted"><FiArrowLeft /> WP{prev.n}</span>
              <span className="font-semibold text-ink group-hover:text-brand">{prev.title}</span>
            </a>
          ) : <span />}
          {next && (
            <a href={`#/wp/${next.n}`} className="group text-sm text-right">
              <span className="flex items-center justify-end gap-1 text-ink-muted">WP{next.n} <FiArrowRight /></span>
              <span className="font-semibold text-ink group-hover:text-brand">{next.title}</span>
            </a>
          )}
        </nav>
      </div>
    </motion.div>
  )
}
