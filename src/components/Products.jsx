const crinkleItems = [
  { src: '/Crinkle_cotton___linen_blouse-removebg-preview.png', name: 'Baju Crinkle', tag: 'Bestseller' },
  { src: '/Crinkle_cotton___linen_blouse-removebg-preview.png', name: 'Baju Crinkle', tag: 'New' },
  { src: '/Crinkle_cotton___linen_blouse-removebg-preview.png', name: 'Baju Crinkle', tag: null },
  { src: '/Crinkle_cotton___linen_blouse-removebg-preview.png', name: 'Baju Crinkle', tag: null },
]


function ProductCard({ item }) {
  return (
    <div className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition duration-300 border border-gray-100">
      <div className="relative overflow-hidden bg-gray-50 p-4">
        {item.tag && (
          <span className="absolute top-3 left-3 z-10 bg-amber-500 text-white text-xs font-bold px-2.5 py-1 rounded-full">
            {item.tag}
          </span>
        )}
        <img
          src={item.src}
          alt={item.name}
          className="w-full h-52 object-contain group-hover:scale-105 transition duration-500"
        />
      </div>
      <div className="p-4">
        <h4 className="font-semibold text-gray-800">{item.name}</h4>
        <a
          href="https://wa.me/+6285930037310"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-3 flex items-center gap-2 text-amber-600 text-sm font-medium hover:text-amber-700 transition"
        >
          <i className="fab fa-whatsapp" /> Tanya Harga
        </a>
      </div>
    </div>
  )
}

function ProductCategory({ title, items }) {
  return (
    <div className="mt-16">
      <div className="flex items-center gap-4 mb-8">
        <div>
          <h2 className="text-2xl font-extrabold text-gray-900">{title}</h2>
          <div className="h-1 w-12 bg-amber-500 rounded-full mt-1" />
        </div>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
        {items.map((item, idx) => (
          <ProductCard key={idx} item={item} />
        ))}
      </div>
    </div>
  )
}

export default function Products() {
  return (
    <section id="produk" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-4">
          <span className="text-amber-500 text-sm font-semibold uppercase tracking-widest">Koleksi Kami</span>
          <h1 className="text-4xl font-extrabold text-gray-900 mt-2">Contoh Produk</h1>
        </div>

        <ProductCategory title="Crinkle" items={crinkleItems} />

        <div className="mt-14 flex flex-col sm:flex-row items-center justify-center gap-4 bg-amber-50 rounded-2xl p-8 border border-amber-100">
          <div>
            <p className="text-gray-800 font-semibold text-lg">Mau lihat koleksi lebih banyak?</p>
            <p className="text-gray-500 text-sm">Hubungi kami langsung via WhatsApp</p>
          </div>
          <a
            href="https://wa.me/+6285930037310"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-amber-500 hover:bg-amber-600 text-white font-semibold px-7 py-3 rounded-full transition shadow-md shadow-amber-200 whitespace-nowrap text-sm"
          >
            <i className="fab fa-whatsapp mr-2" />Chat Sekarang
          </a>
        </div>
      </div>
    </section>
  )
}
