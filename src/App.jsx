import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Products from './components/Products'
import Testimonials from './components/Testimonials'
import OrderSteps from './components/OrderSteps'
import Location from './components/Location'
import Footer from './components/Footer'

function App() {
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
