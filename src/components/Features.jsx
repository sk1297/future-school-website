const features = [
  { emoji: '🖥️', title: 'Digital Smart Classes', desc: 'Interactive smart boards and digital content make learning engaging and modern.', color: 'bg-blue-100 text-blue-600' },
  { emoji: '📷', title: 'CCTV Security', desc: '24/7 camera monitoring ensures your child is always safe inside school premises.', color: 'bg-red-100 text-red-600' },
  { emoji: '🖐️', title: 'Biometric Attendance', desc: 'Fingerprint-based entry and attendance tracking for maximum safety and accuracy.', color: 'bg-purple-100 text-purple-600' },
  { emoji: '👩‍🏫', title: 'Expert Teachers', desc: 'Qualified, experienced, and caring teachers dedicated to every child\'s growth.', color: 'bg-green-100 text-green-600' },
  { emoji: '🎮', title: 'Play & Learn Method', desc: 'Our activity-based, play-first curriculum makes education joyful and effective.', color: 'bg-yellow-100 text-yellow-600' },
  { emoji: '🛡️', title: 'Safe Environment', desc: 'Child-safe furniture, hygienic spaces, and a secure campus parents can trust.', color: 'bg-orange-100 text-orange-600' },
]

export default function Features() {
  return (
    <section id="features" className="py-20 bg-gradient-to-b from-indigo-50 to-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-14">
          <span className="text-indigo-600 font-semibold uppercase tracking-widest text-sm">Why Choose Us</span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-800 mt-2">
            School <span className="text-indigo-600">Features</span>
          </h2>
          <div className="w-16 h-1 bg-yellow-400 mx-auto mt-3 rounded-full" />
          <p className="text-gray-500 mt-4 max-w-xl mx-auto">We combine modern technology with a caring environment to give your child the very best.</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map(f => (
            <div key={f.title} className="bg-white rounded-2xl p-6 shadow-md border border-gray-100 flex gap-4 items-start hover:shadow-lg transition hover:-translate-y-1">
              <div className={`w-14 h-14 rounded-2xl flex items-center justify-center text-3xl flex-shrink-0 ${f.color}`}>
                {f.emoji}
              </div>
              <div>
                <h3 className="font-bold text-gray-800 mb-1">{f.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{f.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
