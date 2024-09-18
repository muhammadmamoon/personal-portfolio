
import About from './components/about'
import Contact from './components/contact'
import Footer from './components/footer'
import Hero from './components/hero'
import Navebar from './components/navebar'
import Skills from './components/skills'
import Whatido from './components/whatido'
import Work from './components/work'
import styles from './page.module.css'

export default function Home() {
  return (
    <div>
    <main>
      <Navebar/>
      <Hero/>
      <About/>
      <Whatido/>
      <Skills/>
      <Work/>
      <Contact/>
    </main>
    <footer>
      <Footer/>
    </footer>
    </div>
  )
}
