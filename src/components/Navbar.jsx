import { useState, useEffect } from 'react'

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Produk', href: '#produk' },
  { label: 'Cara Order', href: '#order' },
  { label: 'Testimoni', href: '#testimoni' },
  { label: 'Lokasi', href: '#lokasi' },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/90 backdrop-blur-md shadow-lg'
          : 'bg-white/70 backdrop-blur-sm shadow-sm'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-16">
        <a href="#" className="flex items-center gap-2">
          <img src="/images/Gambar-removebg-preview.png" alt="Logo Konveksi Pak Ode" className="w-14 h-14 object-contain" />
          <span className="hidden sm:block font-bold text-gray-800 text-sm leading-tight">
            Konveksi<br /><span className="text-amber-500">Pak Ode</span>
          </span>
        </a>

        {/* Hamburger */}
        <button
          className="lg:hidden p-2 rounded-lg text-gray-600 hover:bg-gray-100 focus:outline-none transition"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle navigation"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>

        {/* Desktop nav */}
        <ul className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="relative px-4 py-2 text-sm font-medium text-gray-600 hover:text-amber-600 transition group"
              >
                {link.label}
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-amber-500 group-hover:w-4/5 transition-all duration-300 rounded-full" />
              </a>
            </li>
          ))}
          <li>
            <a
              href="https://wa.me/+6285930037310"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-4 bg-amber-500 hover:bg-amber-600 text-white text-sm font-semibold px-5 py-2 rounded-full transition shadow-md shadow-amber-200"
            >
              <i className="fab fa-whatsapp mr-1" /> WhatsApp
            </a>
          </li>
        </ul>

        {/* Mobile menu */}
        {isOpen && (
          <ul className="absolute top-full left-0 right-0 bg-white/95 backdrop-blur-sm shadow-xl border-t border-gray-100 flex flex-col py-3 px-6 gap-1">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="block py-2.5 text-sm font-medium text-gray-700 hover:text-amber-600 border-b border-gray-50 transition"
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li className="pt-2">
              <a
                href="https://wa.me/+6285930037310"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-center bg-amber-500 hover:bg-amber-600 text-white text-sm font-semibold px-5 py-2.5 rounded-full transition"
                onClick={() => setIsOpen(false)}
              >
                <i className="fab fa-whatsapp mr-1" /> WhatsApp
              </a>
            </li>
          </ul>
        )}
      </div>
    </nav>
  )
}
