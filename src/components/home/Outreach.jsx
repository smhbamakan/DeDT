import { motion } from 'framer-motion'
import { FiExternalLink, FiVideo, FiFileText } from 'react-icons/fi'
import Section, { fadeUp } from '../ui/Section.jsx'
import { outreach } from '../../data/project.js'

const ICONS = { 'Video interview': FiVideo, 'Interview article': FiFileText }

export default function Outreach() {
  return (
    <Section
      id="outreach"
      eyebrow="Communication & knowledge transfer"
      title="Outreach"
      intro="Explaining digital twins and the project's results beyond the research community: interviews, social media and public events (WP5 · D5.7, WP6 · T6.3)."
      tinted
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {outreach.map((o) => {
          const Icon = ICONS[o.type] ?? FiFileText
          return (
            <motion.article key={o.title} {...fadeUp} className="card p-6 sm:p-7 flex flex-col">
              <p className="flex flex-wrap items-center gap-2 mb-3 text-xs">
                <span className="chip"><Icon aria-hidden="true" className="mr-1 inline" />{o.type}</span>
                <span className="chip !bg-slate-100 !text-ink-soft">{o.date}</span>
                {o.tags?.map((t) => (
                  <span key={t} className="chip !bg-accent-light !text-accent">{t}</span>
                ))}
              </p>
              <h3 className="text-lg font-semibold text-ink leading-snug">{o.title}</h3>
              <p className="mt-1 text-sm text-ink-muted">{o.channel}</p>
              <p className="mt-4 text-ink-soft leading-relaxed flex-grow">{o.text}</p>
              <p className="mt-5 flex flex-wrap gap-3">
                {o.links.map((l) => (
                  <a key={l.url} href={l.url} target="_blank" rel="noreferrer" className="btn-outline text-sm">
                    {l.label} <FiExternalLink />
                  </a>
                ))}
              </p>
            </motion.article>
          )
        })}
      </div>
    </Section>
  )
}
