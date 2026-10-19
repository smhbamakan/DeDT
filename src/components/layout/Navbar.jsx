import { useState } from 'react'
import { FiGithub, FiMenu, FiX } from 'react-icons/fi'
import { goToSection } from '../../hooks/useHashRoute.js'
import { meta } from '../../data/project.js'

const LINKS = [
  ['about', 'About'],
  ['objectives', 'Objectives'],
  ['work-packages', 'Work Packages'],
  ['timeline', 'Timeline'],
  ['code', 'Open Source'],
  ['publications', 'Publications'],
  ['team', 'Team'],
  ['contact', 'Contact'],
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const go = (id) => {
    setOpen(false)
    goToSection(id)
  }

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur border-b border-slate-200">
      <nav className="container-page flex items-center justify-between h-16">
        <a href="#/" onClick={() => window.scrollTo({ top: 0 })} className="flex items-center gap-2 font-bold text-ink">
          <span className="inline-flex items-center justify-center w-8 h-8 rounded-lg bg-brand text-white text-sm">D</span>
          {meta.acronym}
        </a>

        <ul className="hidden lg:flex items-center gap-1">
          {LINKS.map(([id, label]) => (
            <li key={id}>
              <button onClick={() => go(id)} className="px-3 py-2 text-sm font-medium text-ink-soft hover:text-brand rounded-md">
                {label}
              </button>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-1">
          <a
            href={meta.github}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 px-3 py-2 text-sm font-semibold text-brand hover:bg-brand-light rounded-full"
            title="Source code on GitHub"
          >
            <FiGithub size={18} /> <span className="hidden sm:inline">Code</span>
          </a>
          <button className="lg:hidden p-2 -mr-2 text-ink" onClick={() => setOpen(!open)} aria-label="Toggle menu">
            {open ? <FiX size={22} /> : <FiMenu size={22} />}
          </button>
        </div>
      </nav>

      {open && (
        <ul className="lg:hidden border-t border-slate-200 bg-white container-page py-2">
          {LINKS.map(([id, label]) => (
            <li key={id}>
              <button onClick={() => go(id)} className="w-full text-left py-3 text-ink-soft hover:text-brand">
                {label}
              </button>
            </li>
          ))}
        </ul>
      )}
    </header>
  )
}
