import { useEffect, useState } from 'react'

// Minimal hash router: '#/' → home, '#/wp/3' → work package 3.
// Hash routing keeps deep links working on GitHub Pages without a 404 fallback.
function parse(hash) {
  const m = hash.match(/^#\/wp\/(\d+)/)
  return m ? { page: 'wp', n: Number(m[1]) } : { page: 'home' }
}

export function useHashRoute() {
  const [route, setRoute] = useState(() => parse(window.location.hash))
  useEffect(() => {
    const onChange = () => setRoute(parse(window.location.hash))
    window.addEventListener('hashchange', onChange)
    return () => window.removeEventListener('hashchange', onChange)
  }, [])
  return route
}

// Scroll to a home-page section, navigating home first if needed.
export function goToSection(id) {
  const scroll = () => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  if (parse(window.location.hash).page === 'home') {
    scroll()
  } else {
    window.location.hash = '#/'
    setTimeout(scroll, 60)
  }
}
