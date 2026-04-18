export default function Hero() {
  return (
    <section id="home" className="relative w-full overflow-hidden">
      <img
        src="/images/Gambar WhatsApp 2025-08-06 pukul 23.59.07_fdcdb1a8.jpg"
        alt="Hero Konveksi Pak Ode"
        className="w-full object-cover h-screen md:h-[85vh]"
      />
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/10" />

      {/* Content */}
      <div className="absolute inset-0 flex flex-col justify-end pb-16 px-6 md:px-16 max-w-4xl">
        {/* Badge */}
        <div data-animate className="mb-4 inline-flex">
          <span className="bg-amber-500/90 text-white text-xs font-semibold px-4 py-1.5 rounded-full tracking-wider uppercase">
            Tasikmalaya, Jawa Barat
          </span>
        </div>

        <h1 data-animate className="text-white text-4xl md:text-6xl font-extrabold leading-tight mb-2 drop-shadow-xl anim-delay-1">
          KONVEKSI<br />
          <span className="text-amber-400">PAK ODE</span> <br />
          Tasikmalaya
        </h1>
        <p data-animate className="text-gray-200 text-base md:text-lg mb-8 max-w-md leading-relaxed anim-delay-2">
          Produksi konveksi berkualitas — crinkle, gamis, dan lebih banyak lagi.
          Harga terjangkau, hasil memuaskan.
        </p>

        <div data-animate className="flex gap-3 flex-wrap anim-delay-3">
          <a href="#produk">
            <button className="bg-amber-500 hover:bg-amber-600 text-white font-semibold px-7 py-3 rounded-full transition shadow-lg shadow-amber-900/40 text-sm">
              Lihat Produk
            </button>
          </a>
          <a href="https://wa.me/+6285930037310" target="_blank" rel="noopener noreferrer">
            <button className="border-2 border-white/70 text-white hover:bg-white hover:text-gray-900 font-semibold px-7 py-3 rounded-full transition backdrop-blur-sm text-sm">
              <i className="fab fa-whatsapp mr-2" />Hubungi Kami
            </button>
          </a>
        </div>
      </div>

    </section>
  )
}
