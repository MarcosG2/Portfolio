import { Contact } from './components/Contact'
import { Experience } from './components/Experience'
import { Footer } from './components/Footer'
import { Hero } from './components/Hero'
import { Navbar } from './components/Navbar'
import { Projects } from './components/Projects'
import { Skills } from './components/Skills'
import { useLanguage } from './i18n/useLanguage'

function App() {
  const { t } = useLanguage()

  return (
    <>
      <a
        href="#inicio"
        className="sr-only focus:not-sr-only focus:absolute focus:z-[100] focus:top-4 focus:left-4 focus:bg-blue-600 focus:text-white focus:px-4 focus:py-2 focus:rounded-md"
      >
        {t.a11y.skipToContent}
      </a>

      <main className="relative min-h-screen">
        <Navbar />

        <div className="relative z-10 max-w-6xl mx-auto px-6 pt-16 pb-4">
          <Hero />
          <Skills />
          <Experience />
          <Projects />
          <Contact />
          <Footer />
        </div>
      </main>
    </>
  )
}

export default App
