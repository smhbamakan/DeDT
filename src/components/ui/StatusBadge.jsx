const STYLES = {
  planned: { label: 'Coming soon', cls: 'bg-slate-100 text-ink-muted' },
  'in-progress': { label: 'In progress', cls: 'bg-amber-50 text-amber-700' },
  available: { label: 'Available', cls: 'bg-accent-light text-accent' },
}

export default function StatusBadge({ status }) {
  const s = STYLES[status] ?? STYLES.planned
  return (
    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold ${s.cls}`}>
      {s.label}
    </span>
  )
}
