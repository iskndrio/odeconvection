export default function Location() {
  return (
    <section id="lokasi" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div data-animate className="text-center mb-12">
          <span className="text-amber-500 text-sm font-semibold uppercase tracking-widest">Kunjungi Kami</span>
          <h1 className="text-4xl font-extrabold text-gray-900 mt-2">Temukan Kami Di Sini</h1>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Info panel */}
          <div className="lg:w-1/3 flex flex-col gap-5">
            <div data-animate className="bg-stone-50 rounded-2xl p-6 border border-gray-100 anim-delay-1">
              <div className="w-10 h-10 bg-amber-100 rounded-xl flex items-center justify-center mb-4">
                <i className="fas fa-phone text-amber-600" />
              </div>
              <h4 className="font-bold text-gray-800 mb-1">Telepon / WhatsApp</h4>
              <a
                href="https://wa.me/+6285930037310"
                className="text-amber-600 hover:text-amber-700 font-medium transition"
              >
                +62 859-3003-7310
              </a>
            </div>

            <div data-animate className="bg-stone-50 rounded-2xl p-6 border border-gray-100 anim-delay-2">
              <div className="w-10 h-10 bg-amber-100 rounded-xl flex items-center justify-center mb-4">
                <i className="fas fa-map-marker-alt text-amber-600" />
              </div>
              <h4 className="font-bold text-gray-800 mb-1">Alamat</h4>
              <p className="text-gray-500 text-sm leading-relaxed">
                Gg. Pemuda Gg. SD Kalangsari I, Babakan Anyar,<br />
                Kec. Cipedes, Kab. Tasikmalaya,<br />
                Jawa Barat 46131
              </p>
            </div>

            <div data-animate className="bg-stone-50 rounded-2xl p-6 border border-gray-100 anim-delay-3">
              <div className="w-10 h-10 bg-amber-100 rounded-xl flex items-center justify-center mb-4">
                <i className="fas fa-clock text-amber-600" />
              </div>
              <h4 className="font-bold text-gray-800 mb-1">Jam Operasional</h4>
              <p className="text-gray-500 text-sm">Senin – Sabtu: 08.00 – 17.00</p>
              <p className="text-gray-400 text-sm">Minggu: Tutup</p>
            </div>
          </div>

          {/* Map */}
          <div data-animate="left" className="lg:w-2/3 rounded-2xl overflow-hidden shadow-xl border border-gray-100 anim-delay-2">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1978.6621825166624!2d108.22476308892593!3d-7.317412699401962!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e6f5730f2c01247%3A0xf233ba2057eb5dc1!2sKONVEKSI%20PAK%20ODE%20TASIKMALAYA!5e0!3m2!1sid!2sid!4v1755273402832!5m2!1sid!2sid"
              className="w-full h-full min-h-[450px]"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Lokasi Konveksi Pak Ode Tasikmalaya"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
