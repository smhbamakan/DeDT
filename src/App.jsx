import { useEffect } from 'react'
import Navbar from './components/layout/Navbar.jsx'
import Footer from './components/layout/Footer.jsx'
import HomePage from './pages/HomePage.jsx'
import WorkPackagePage from './pages/WorkPackagePage.jsx'
import { useHashRoute } from './hooks/useHashRoute.js'
import { workPackages } from './data/project.js'

export default function App() {
  const route = useHashRoute()
  const wp = route.page === 'wp' ? workPackages.find((w) => w.n === route.n) : null

  useEffect(() => {
    window.scrollTo({ top: 0 })
  }, [route.page, route.n])

  return (
    <div className="min-h-screen flex flex-col overflow-x-hidden">
      <Navbar />
      <main className="flex-1">{wp ? <WorkPackagePage wp={wp} /> : <HomePage />}</main>
      <Footer />
    </div>
  )
}
