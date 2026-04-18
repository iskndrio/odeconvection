const testimonials = [
  {
    name: 'Emra',
    location: 'Tasikmalaya',
    text: 'Order crinkle buat stok toko datang rapi dan sesuai warna yang diminta. Komunikasinya enak, prosesnya juga cepat.',
  },
  {
    name: 'Shea',
    location: 'Tasikmalaya',
    text: 'Kami pesan beberapa model sekaligus, hasil jahitannya konsisten dan finishing-nya bersih. Sangat membantu untuk produksi rutin.',
  },
  {
    name: 'Beauty Hijab',
    location: 'Tasikmalaya',
    text: 'Pengerjaannya tepat waktu dan hasilnya sesuai contoh. Buat kami yang butuh barang siap jual, ini sangat aman buat repeat order.',
  },
]

export default function Testimonials() {
  const delayClasses = ['anim-delay-1', 'anim-delay-2', 'anim-delay-3']

  return (
    <section id="testimoni" className="py-20 bg-stone-50">
      <div className="max-w-7xl mx-auto px-6">
        <div data-animate className="text-center mb-12">
          <span className="text-amber-500 text-sm font-semibold uppercase tracking-widest">Ulasan Pelanggan</span>
          <h1 className="text-4xl font-extrabold text-gray-900 mt-2">Apa Kata Mereka?</h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, idx) => (
            <div
              key={idx}
              data-animate
              className={`bg-white rounded-2xl p-7 shadow-sm hover:shadow-lg transition duration-300 border border-gray-100 flex flex-col ${delayClasses[idx % delayClasses.length]}`}
            >
              {/* Stars */}
              <div className="flex gap-1 text-amber-400 text-sm mb-5">
                {[...Array(5)].map((_, i) => <i key={i} className="fas fa-star" />)}
              </div>
              {/* Quote */}
              <p className="text-gray-600 text-sm leading-relaxed flex-1 mb-6">&#8220;{t.text}&#8221;</p>
              {/* Profile */}
              <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
                <img
                  src="/images/icons8-profile-50.png"
                  alt="Foto Profil"
                  className="w-10 h-10 rounded-full object-cover bg-gray-100"
                />
                <div>
                  <p className="font-semibold text-gray-800 text-sm">{t.name}</p>
                  <p className="text-gray-400 text-xs">{t.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
