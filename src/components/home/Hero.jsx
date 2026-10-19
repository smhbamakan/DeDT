import { motion } from 'framer-motion'
import { FiArrowRight } from 'react-icons/fi'
import { meta } from '../../data/project.js'
import { goToSection } from '../../hooks/useHashRoute.js'

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-b from-brand-light/70 to-white border-b border-slate-200">
      <div className="container-page py-20 lg:py-28">
        <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="max-w-3xl">
          <p className="chip mb-5">{meta.programme} · Masaryk University</p>
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-ink leading-[1.1]">
            {meta.title} <span className="text-brand">{meta.subtitle}</span>
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-ink-soft leading-relaxed">{meta.tagline}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <button onClick={() => goToSection('work-packages')} className="btn-primary">
              Explore Work Packages <FiArrowRight />
            </button>
            <button onClick={() => goToSection('about')} className="btn-outline">About the project</button>
          </div>
          <dl className="mt-12 grid grid-cols-3 gap-6 max-w-md">
            {[
              ['4', 'Objectives'],
              ['5', 'Work packages'],
              [`${meta.duration}`, 'Months'],
            ].map(([v, l]) => (
              <div key={l}>
                <dt className="text-3xl font-bold text-brand">{v}</dt>
                <dd className="text-sm text-ink-muted">{l}</dd>
              </div>
            ))}
          </dl>
        </motion.div>
      </div>
    </section>
  )
}
