const steps = [
  {
    number: 1,
    icon: '/images/Black and White Simple Modern Letter G Monogram Logo.png',
    title: 'Konsultasi via WhatsApp',
    desc: 'Ceritakan kebutuhan dan desain yang kamu inginkan. Tim kami siap membantu 24 jam.',
  },
  {
    number: 2,
    icon: '/images/pembayaran dp.png',
    title: 'Pembayaran DP',
    desc: 'Lakukan dp untuk mengkonfirmasi pesanan dan memulai proses produksi.',
  },
  {
    number: 3,
    icon: '/images/proses produksi.png',
    title: 'Proses Produksi',
    desc: 'Pesanan kamu diproduksi dengan teliti oleh tim kami menggunakan bahan berkualitas.',
  },
  {
    number: 4,
    icon: '/images/pengiriman.png',
    title: 'Pelunasan & Pengiriman',
    desc: 'Selesai produksi, lakukan pelunasan dan pesanan langsung dikirim ke alamatmu.',
  },
]

export default function OrderSteps() {
  const delayClasses = ['anim-delay-1', 'anim-delay-2', 'anim-delay-3', 'anim-delay-4']

  return (
    <section id="order" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-6">
        <div data-animate className="text-center mb-14">
          <span className="text-amber-400 text-sm font-semibold uppercase tracking-widest">Mudah & Cepat</span>
          <h1 className="text-4xl font-extrabold text-white mt-2">Cara Order</h1>
          <p className="text-gray-400 mt-3 max-w-md mx-auto text-sm">
            Hanya 4 langkah mudah untuk mendapatkan produk konveksi impianmu.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, idx) => (
            <div key={step.number} data-animate className={`relative group ${delayClasses[idx % delayClasses.length]}`}>
              {/* Connector line */}
              {idx < steps.length - 1 && (
                <div className="hidden lg:block absolute top-9 left-full w-full h-px bg-amber-500/30 z-0" style={{ width: 'calc(100% - 3rem)', left: '3rem' }} />
              )}
              <div className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition duration-300 relative z-10">
                {/* Number badge */}
                <div className="w-10 h-10 bg-amber-500 rounded-xl flex items-center justify-center font-bold text-white text-sm mb-5">
                  {step.number}
                </div>
                <img
                  src={step.icon}
                  alt={step.title}
                  className="w-16 h-16 object-contain mb-5"
                />
                <h5 className="font-bold text-white text-base">{step.title}</h5>
                <p className="text-gray-400 text-sm mt-2 leading-relaxed">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div data-animate className="text-center mt-12 anim-delay-2">
          <a
            href="https://wa.me/+6285930037310"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-600 text-white font-semibold px-8 py-3.5 rounded-full transition shadow-lg shadow-amber-900/40 text-sm"
          >
            <i className="fab fa-whatsapp text-base" /> Mulai Order Sekarang
          </a>
        </div>
      </div>
    </section>
  )
}
