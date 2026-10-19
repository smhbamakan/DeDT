import { FiExternalLink, FiGithub } from 'react-icons/fi'

export default function PublicationCard({ p, showWps = true }) {
  return (
    <article className="card p-6 sm:p-8">
      <p className="flex flex-wrap gap-2 mb-3 text-xs">
        {p.featured && <span className="chip !bg-amber-100 !text-amber-800">★ Featured output</span>}
        <span className="chip">{p.type}</span>
        <span className="chip !bg-slate-100 !text-ink-soft">{p.year}</span>
        {showWps &&
          p.wps?.map((n) => (
            <a key={n} href={`#/wp/${n}`} className="chip !bg-accent-light !text-accent hover:underline">
              WP{n}
            </a>
          ))}
      </p>
      <h3 className="text-lg sm:text-xl font-semibold text-ink leading-snug">{p.title}</h3>
      <p className="mt-1 text-sm text-ink-muted">
        {p.authors} · <em>{p.venue}</em>
        {p.date && ` · ${p.date}`}
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

      {p.highlights?.length > 0 && (
        <dl className="mt-5 grid grid-cols-1 sm:grid-cols-3 gap-3">
          {p.highlights.map((h) => (
            <div key={h.label} className="rounded-xl bg-brand-light/60 px-4 py-3">
              <dt className="text-2xl font-bold text-brand">{h.value}</dt>
              <dd className="text-sm text-ink-soft leading-snug">{h.label}</dd>
            </div>
          ))}
        </dl>
      )}

      {p.keywords?.length > 0 && (
        <ul className="mt-4 flex flex-wrap gap-1.5">
          {p.keywords.map((k) => (
            <li key={k} className="chip !bg-slate-100 !text-ink-soft">{k}</li>
          ))}
        </ul>
      )}

      <p className="mt-5 flex flex-wrap gap-3">
        {p.url && (
          <a href={p.url} target="_blank" rel="noreferrer" className="btn-outline text-sm">
            Read the article <FiExternalLink />
          </a>
        )}
        {p.code && (
          <a href={p.code} target="_blank" rel="noreferrer" className="btn-outline text-sm">
            <FiGithub /> Implementation
          </a>
        )}
      </p>
    </article>
  )
}
