import { motion } from 'framer-motion'
import Section, { fadeUp } from '../ui/Section.jsx'
import { team } from '../../data/project.js'

const initials = (name) =>
  name.replace(/^(Dr\.|Prof\.)\s*/, '').split(' ').filter(Boolean).map((w) => w[0]).slice(0, 2).join('')

export default function Team() {
  return (
    <Section id="team" eyebrow="Team" title="People" tinted>
      <div className="grid md:grid-cols-2 gap-5">
        {team.map((m) => (
          <motion.article key={m.name} {...fadeUp} className="card p-6 flex gap-5">
            <div className="shrink-0 w-16 h-16 rounded-2xl bg-brand-light text-brand font-bold text-xl flex items-center justify-center">
              {initials(m.name)}
            </div>
            <div className="min-w-0">
              <h3 className="font-semibold text-lg text-ink">{m.name}</h3>
              <p className="text-sm font-medium text-accent">{m.role}</p>
              <p className="text-sm text-ink-muted">{m.affiliation}</p>
              <ul className="mt-3 flex flex-wrap gap-1.5">
                {m.interests.map((t) => (
                  <li key={t} className="chip !bg-slate-100 !text-ink-soft">{t}</li>
                ))}
              </ul>
              {m.links.length > 0 && (
                <p className="mt-3 flex gap-4 text-sm">
                  {m.links.map((l) => (
                    <a key={l.url} href={l.url} target="_blank" rel="noreferrer" className="font-semibold text-brand hover:underline">
                      {l.label}
                    </a>
                  ))}
                </p>
              )}
            </div>
          </motion.article>
        ))}
      </div>
    </Section>
  )
}
