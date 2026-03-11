export default function Footer() {
  return (
    <footer className="bg-gray-950 text-gray-400">
      <div className="max-w-7xl mx-auto px-6 py-14">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img src="/images/Gambar-removebg-preview.png" alt="Logo" className="w-12 h-12 object-contain" />
              <div>
                <p className="text-white font-bold text-sm">Konveksi Pak Ode</p>
                <p className="text-amber-400 text-xs">Tasikmalaya</p>
              </div>
            </div>
            <p className="text-sm leading-relaxed">
              Konveksi lokal terpercaya di Tasikmalaya. Menghadirkan produk berkualitas dengan harga yang bersahabat.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-sm">Navigasi</h4>
            <ul className="space-y-2 text-sm">
              {['#home', '#produk', '#order', '#testimoni', '#lokasi'].map((href, i) => (
                <li key={href}>
                  <a href={href} className="hover:text-amber-400 transition">
                    {['Home', 'Produk', 'Cara Order', 'Testimoni', 'Lokasi'][i]}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-sm">Hubungi Kami</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-3">
                <i className="fas fa-map-marker-alt text-amber-400 mt-0.5" />
                <span>Gg. Pemuda Gg. SD Kalangsari I, Kec. Cipedes, Tasikmalaya 46131</span>
              </li>
              <li className="flex items-center gap-3">
                <i className="fas fa-phone text-amber-400" />
                <a href="https://wa.me/+6285930037310" className="hover:text-amber-400 transition">+62 859-3003-7310</a>
              </li>
            </ul>
            <div className="flex gap-3 mt-5">
              <a
                href="https://wa.me/+6285930037310"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-amber-500 flex items-center justify-center transition"
              >
                <i className="fab fa-whatsapp text-white" />
              </a>
              <a
                href="#"
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-amber-500 flex items-center justify-center transition"
              >
                <i className="fab fa-instagram text-white" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 mt-10 pt-6 text-center text-xs">
          © 2025 Konveksi Pak Ode Tasikmalaya. All Rights Reserved.
        </div>
      </div>
    </footer>
  )
}
