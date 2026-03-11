const galleryImages = [
  { src: '/images/WA.jpg', alt: 'Galeri 1' },
  { src: '/images/WA2.jpg', alt: 'Galeri 2' },
  { src: '/images/WA3.jpg', alt: 'Galeri 3' },
  { src: '/images/WA4.jpg', alt: 'Galeri 4' },
]

const trustedBrands = [
  { src: '/images/emra.jpg', alt: 'Emra' },
  { src: '/images/shea.jpg', alt: 'Shea' },
  { src: '/images/beautyhijab.jpg', alt: 'Beauty Hijab' },
]

const stats = [
  { value: '500+', label: 'Produk Terjual' },
  { value: '100+', label: 'Pelanggan Puas' },
  { value: '5+', label: 'Tahun Pengalaman' },
]

export default function About() {
  return (
    <>
      {/* Intro + Stats */}
      <section className="bg-stone-50 py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
              <span className="text-amber-500 text-sm font-semibold uppercase tracking-widest">Tentang Kami</span>
              <h1 className="text-4xl font-extrabold text-gray-900 mt-2 mb-5 leading-tight">
                Konveksi Pak Ode<br />
                <span className="text-amber-500">Tasikmalaya</span>
              </h1>
              <p className="text-gray-500 leading-relaxed mb-8">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolore dolorem numquam dignissimos,
                obcaecati, nemo vitae iure praesentium blanditiis voluptates sequi omnis delectus fugiat.
              </p>
              <div className="flex gap-8">
                {stats.map((s) => (
                  <div key={s.label}>
                    <div className="text-3xl font-extrabold text-gray-900">{s.value}</div>
                    <div className="text-xs text-gray-500 mt-1">{s.label}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="md:w-1/2 grid grid-cols-2 gap-3">
              {galleryImages.map((img, i) => (
                <div key={img.alt} className={`overflow-hidden rounded-2xl ${i === 0 || i === 3 ? 'col-span-2' : ''}`}>
                  <img
                    src={img.src}
                    alt={img.alt}
                    className={`w-full object-cover hover:scale-105 transition duration-500 ${i === 0 || i === 3 ? 'h-56' : 'h-48'}`}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Trusted by */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-10">
            <span className="text-amber-500 text-sm font-semibold uppercase tracking-widest">Klien Kami</span>
            <h2 className="text-3xl font-extrabold text-gray-900 mt-2">Telah Dipercaya Oleh</h2>
          </div>
          <div className="flex justify-center flex-wrap gap-6">
            {trustedBrands.map((brand) => (
              <div key={brand.alt} className="group relative overflow-hidden rounded-2xl shadow-md hover:shadow-xl transition duration-300">
                <img
                  src={brand.src}
                  alt={brand.alt}
                  className="w-48 h-48 object-cover group-hover:scale-105 transition duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition" />
                <div className="absolute bottom-3 left-0 right-0 text-center text-white text-sm font-semibold opacity-0 group-hover:opacity-100 transition">{brand.alt}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tentang Kami detail */}
      <section className="py-20 bg-stone-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
              <span className="text-amber-500 text-sm font-semibold uppercase tracking-widest">Mengapa Kami</span>
              <h2 className="text-3xl font-extrabold text-gray-900 mt-2 mb-5">
                Kualitas Terbaik,<br />Harga Terjangkau
              </h2>
              <p className="text-gray-500 leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </p>
              <ul className="mt-6 space-y-3">
                {['Bahan berkualitas tinggi', 'Pengerjaan rapi & tepat waktu', 'Melayani partai kecil & besar'].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-gray-700 text-sm">
                    <span className="w-5 h-5 rounded-full bg-amber-100 text-amber-600 flex items-center justify-center flex-shrink-0">
                      <i className="fas fa-check text-xs" />
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="md:w-1/2">
              <img
                src="/images/Desain tanpa judul (1).png"
                alt="Gambar produksi"
                className="rounded-2xl w-full object-cover shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
