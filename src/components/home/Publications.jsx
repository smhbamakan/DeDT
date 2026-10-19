import { motion } from 'framer-motion'
import { FiExternalLink } from 'react-icons/fi'
import Section, { fadeUp } from '../ui/Section.jsx'
import { publications } from '../../data/project.js'

export default function Publications() {
  return (
    <Section id="publications" eyebrow="Research outputs" title="Publications">
      <div className="space-y-5">
        {publications.map((p) => (
          <motion.article key={p.title} {...fadeUp} className="card p-6 sm:p-8">
            <p className="flex flex-wrap gap-2 mb-3 text-xs">
              {p.featured && <span className="chip !bg-amber-100 !text-amber-800">★ Featured output</span>}
              <span className="chip">{p.type}</span>
              <span className="chip !bg-slate-100 !text-ink-soft">{p.year}</span>
              {p.wps?.map((n) => (
                <a key={n} href={`#/wp/${n}`} className="chip !bg-accent-light !text-accent hover:underline">
                  WP{n}
                </a>
              ))}
            </p>
            <h3 className="text-lg sm:text-xl font-semibold text-ink leading-snug">{p.title}</h3>
            <p className="mt-1 text-sm text-ink-muted">
              {p.authors} · <em>{p.venue}</em>
              {p.doi && (
                <>
                  {' · '}
                  <a href={`https://doi.org/${p.doi}`} target="_blank" rel="noreferrer" className="hover:underline">
                    doi:{p.doi}
                  </a>
                </>
              )}
            </p>
            <p className="mt-4 text-ink-soft leading-relaxed">{p.abstract}</p>
            {p.url && (
              <a href={p.url} target="_blank" rel="noreferrer" className="btn-outline mt-5 text-sm">
                Read the article <FiExternalLink />
              </a>
            )}
          </motion.article>
        ))}
      </div>
    </Section>
  )
}
