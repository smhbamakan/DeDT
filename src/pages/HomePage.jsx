import Hero from '../components/home/Hero.jsx'
import About from '../components/home/About.jsx'
import Objectives from '../components/home/Objectives.jsx'
import WorkPackages from '../components/home/WorkPackages.jsx'
import Timeline from '../components/home/Timeline.jsx'
import SourceCode from '../components/home/SourceCode.jsx'
import Publications from '../components/home/Publications.jsx'
import Team from '../components/home/Team.jsx'
import Contact from '../components/home/Contact.jsx'

export default function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <Objectives />
      <WorkPackages />
      <Timeline />
      <SourceCode />
      <Publications />
      <Team />
      <Contact />
    </>
  )
}
