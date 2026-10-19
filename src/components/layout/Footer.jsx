import { funding, meta } from '../../data/project.js'

export default function Footer() {
  return (
    <footer className="bg-ink text-slate-300">
      <div className="container-page py-10 grid gap-6 md:grid-cols-[2fr_1fr] items-start">
        <div>
          <p className="eyebrow !text-teal-300 mb-2">Funding</p>
          <p className="text-sm leading-relaxed text-slate-200">{funding}</p>
        </div>
        <div className="text-sm md:text-right space-y-1">
          <p className="font-semibold text-white">{meta.acronym} · {meta.programme}</p>
          <p>Masaryk University, Brno, Czech Republic</p>
          <p className="flex gap-4 md:justify-end pt-2">
            <a href={meta.github} target="_blank" rel="noreferrer" className="hover:text-white underline-offset-4 hover:underline">GitHub</a>
            <a href={meta.scholar} target="_blank" rel="noreferrer" className="hover:text-white underline-offset-4 hover:underline">Google Scholar</a>
          </p>
        </div>
      </div>
      <div className="border-t border-white/10">
        <p className="container-page py-4 text-xs text-slate-400">
          © 2024–{new Date().getFullYear()} {meta.acronym} Research Project · Dr. Seyed Mojtaba Hosseini Bamakan
        </p>
      </div>
    </footer>
  )
}
