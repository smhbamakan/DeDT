import { FiExternalLink } from 'react-icons/fi'
import StatusBadge from '../ui/StatusBadge.jsx'

export default function DeliverableCard({ d }) {
  return (
    <article className="card p-5 flex flex-col">
      <div className="flex items-center justify-between gap-3 mb-2">
        <span className="text-sm font-bold text-brand">{d.id}</span>
        <StatusBadge status={d.status} />
      </div>
      <h3 className="font-semibold text-ink leading-snug">{d.title}</h3>
      <p className="mt-1.5 text-sm text-ink-soft leading-relaxed">{d.description}</p>
      {d.summary && <p className="mt-3 text-sm text-ink leading-relaxed border-l-2 border-accent pl-3">{d.summary}</p>}
      {d.links?.length > 0 && (
        <p className="mt-4 flex flex-wrap gap-x-4 gap-y-2 text-sm">
          {d.links.map((l) => (
            <a key={l.url} href={l.url} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 font-semibold text-brand hover:underline">
              {l.label} <FiExternalLink className="w-3.5 h-3.5" />
            </a>
          ))}
        </p>
      )}
    </article>
  )
}
