import { motion } from 'framer-motion'

export const fadeUp = {
  initial: { opacity: 0, y: 16 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.15 },
  transition: { duration: 0.45, ease: 'easeOut' },
}

export default function Section({ id, eyebrow, title, intro, tinted = false, children }) {
  return (
    <section id={id} className={`py-16 lg:py-24 ${tinted ? 'bg-slate-50' : ''}`}>
      <div className="container-page">
        <motion.div {...fadeUp} className="max-w-3xl mb-10">
          {eyebrow && <p className="eyebrow mb-2">{eyebrow}</p>}
          <h2 className="heading">{title}</h2>
          {intro && <p className="mt-3 text-ink-soft text-lg leading-relaxed">{intro}</p>}
        </motion.div>
        {children}
      </div>
    </section>
  )
}
