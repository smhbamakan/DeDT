import { motion } from 'framer-motion'
import { FiGithub, FiFolder } from 'react-icons/fi'
import Section, { fadeUp } from '../ui/Section.jsx'
import StatusBadge from '../ui/StatusBadge.jsx'
import { meta, codeModules } from '../../data/project.js'

export default function SourceCode() {
  return (
    <Section
      id="code"
      eyebrow="Open science"
      title="Open-source code"
      intro="All platform code is released under the MIT licence. Each work package has its own module, with documentation, tests and diagrams."
    >
      <div className="grid sm:grid-cols-2 gap-5">
        {codeModules.map((m, i) => {
          const live = m.status !== 'planned'
          const Card = live ? motion.a : motion.div
          return (
            <Card
              key={m.folder}
              {...fadeUp}
              transition={{ ...fadeUp.transition, delay: i * 0.05 }}
              {...(live ? { href: `${meta.github}/tree/main/${m.folder}`, target: '_blank', rel: 'noreferrer' } : {})}
              className={`card p-5 flex flex-col ${live ? 'card-hover' : 'opacity-80'}`}
            >
              <div className="flex items-center justify-between gap-3 mb-2">
                <span className="inline-flex items-center gap-1.5 text-sm font-mono text-ink-soft min-w-0">
                  <FiFolder className="shrink-0 text-brand" />
                  <span className="truncate">{m.folder}/</span>
                </span>
                <StatusBadge status={m.status} />
              </div>
              <h3 className="font-semibold text-ink">
                WP{m.wp} · {m.title}
              </h3>
              <p className="mt-1 text-sm text-ink-soft leading-relaxed flex-1">{m.text}</p>
              <p className="mt-3 text-xs font-medium text-ink-muted">{m.tech}</p>
            </Card>
          )
        })}
      </div>
      <motion.div {...fadeUp} className="mt-8">
        <a href={meta.github} target="_blank" rel="noreferrer" className="btn-primary">
          <FiGithub /> github.com/smhbamakan/DeDT-platform
        </a>
      </motion.div>
    </Section>
  )
}
