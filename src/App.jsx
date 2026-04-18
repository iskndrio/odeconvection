import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Products from './components/Products'
import Testimonials from './components/Testimonials'
import OrderSteps from './components/OrderSteps'
import Location from './components/Location'
import Footer from './components/Footer'
import { useEffect } from 'react'

function App() {
  useEffect(() => {
    const elements = document.querySelectorAll('[data-animate]')
    if (!elements.length) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            observer.unobserve(entry.target)
          }
        })
      },
      {
        threshold: 0.2,
        rootMargin: '0px 0px -60px 0px',
      }
    )

    elements.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  return (
    <div className="font-poppins">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Products />
        <Testimonials />
        <OrderSteps />
        <Location />
      </main>
      <Footer />
    </div>
  )
}

export default App
