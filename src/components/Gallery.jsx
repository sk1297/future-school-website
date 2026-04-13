const items = [
  { emoji: '🖥️', label: 'Smart Classroom', bg: 'bg-blue-100' },
  { emoji: '🎨', label: 'Arts & Craft Room', bg: 'bg-pink-100' },
  { emoji: '🛝', label: 'Play Area', bg: 'bg-green-100' },
  { emoji: '📚', label: 'Library Corner', bg: 'bg-yellow-100' },
  { emoji: '🎵', label: 'Music Room', bg: 'bg-purple-100' },
  { emoji: '🏫', label: 'School Campus', bg: 'bg-orange-100' },
]

export default function Gallery() {
  return (
    <section id="gallery" className="py-20 bg-gradient-to-b from-yellow-50 to-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-14">
          <span className="text-yellow-600 font-semibold uppercase tracking-widest text-sm">Our School</span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-800 mt-2">
            School <span className="text-yellow-600">Gallery</span>
          </h2>
          <div className="w-16 h-1 bg-blue-500 mx-auto mt-3 rounded-full" />
          <p className="text-gray-500 mt-4 max-w-xl mx-auto">A peek into the vibrant, safe, and stimulating world of Future Pre-Primary School.</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-5">
          {items.map(item => (
            <div
              key={item.label}
              className={`${item.bg} rounded-2xl h-44 md:h-56 flex flex-col items-center justify-center gap-3 shadow-sm hover:shadow-md hover:scale-105 transition cursor-pointer`}
            >
              <span className="text-6xl">{item.emoji}</span>
              <span className="font-semibold text-gray-700 text-sm">{item.label}</span>
            </div>
          ))}
        </div>

        <p className="text-center text-gray-400 text-sm mt-8">
          📸 Visit us to see our beautiful campus in person!
        </p>
      </div>
    </section>
  )
}
