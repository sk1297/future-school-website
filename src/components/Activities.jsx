const activities = [
  {
    emoji: '🧮',
    title: 'Abacus',
    desc: 'Develop mental math skills and concentration through the ancient art of abacus — fun for young minds!',
    color: 'from-orange-400 to-red-500',
  },
  {
    emoji: '🎨',
    title: 'Arts & Craft',
    desc: 'Unleash creativity with painting, clay, paper craft, and more. Every child is an artist at heart.',
    color: 'from-pink-400 to-purple-500',
  },
  {
    emoji: '🗣️',
    title: 'Spoken English',
    desc: 'Build confidence and communication skills through fun conversation classes and group activities.',
    color: 'from-blue-400 to-cyan-500',
  },
  {
    emoji: '💡',
    title: 'Creative Learning',
    desc: 'Puzzle-solving, storytelling, and STEM-inspired activities that make every day an exciting discovery.',
    color: 'from-green-400 to-teal-500',
  },
]

export default function Activities() {
  return (
    <section id="activities" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-14">
          <span className="text-teal-600 font-semibold uppercase tracking-widest text-sm">Beyond the Classroom</span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-800 mt-2">
            Fun <span className="text-teal-600">Activities</span>
          </h2>
          <div className="w-16 h-1 bg-orange-400 mx-auto mt-3 rounded-full" />
          <p className="text-gray-500 mt-4 max-w-xl mx-auto">Every child has a hidden talent. Our activities help them discover, explore, and excel.</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {activities.map(a => (
            <div key={a.title} className="rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition hover:-translate-y-1">
              <div className={`bg-gradient-to-br ${a.color} p-8 text-center`}>
                <div className="text-6xl mb-3">{a.emoji}</div>
              </div>
              <div className="bg-white p-5">
                <h3 className="font-extrabold text-gray-800 text-lg mb-2">{a.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{a.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
