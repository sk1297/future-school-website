import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Programs from './components/Programs'
import Features from './components/Features'
import Activities from './components/Activities'
import Gallery from './components/Gallery'
import Testimonials from './components/Testimonials'
import Admission from './components/Admission'
import FAQ from './components/FAQ'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <Navbar />
      <main className="pt-16">
        <Hero />
        <About />
        <Programs />
        <Features />
        <Activities />
        <Gallery />
        <Testimonials />
        <Admission />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

export default App
