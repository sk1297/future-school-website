const programs = [
  {
    emoji: '🍼',
    title: 'Play Group',
    age: '1.5 – 2.5 Years',
    desc: 'A gentle introduction to school life through songs, stories, and sensory play. Children develop social skills and basic motor abilities.',
    color: 'from-pink-400 to-rose-500',
    bg: 'bg-pink-50',
  },
  {
    emoji: '🌱',
    title: 'Nursery',
    age: '2.5 – 3.5 Years',
    desc: 'Building early language, number recognition, and creativity through activities, rhymes, and guided play.',
    color: 'from-green-400 to-emerald-500',
    bg: 'bg-green-50',
  },
  {
    emoji: '⭐',
    title: 'Jr. KG',
    age: '3.5 – 4.5 Years',
    desc: 'Introducing letters, numbers, arts, and structured learning with digital smart classes and activity-based methods.',
    color: 'from-yellow-400 to-orange-500',
    bg: 'bg-yellow-50',
  },
  {
    emoji: '🚀',
    title: 'Sr. KG',
    age: '4.5 – 5.5 Years',
    desc: 'School readiness with reading, writing, math basics, and life skills — preparing every child for primary school with confidence.',
    color: 'from-blue-500 to-indigo-600',
    bg: 'bg-blue-50',
  },
]

export default function Programs() {
  return (
    <section id="programs" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-14">
          <span className="text-orange-500 font-semibold uppercase tracking-widest text-sm">What We Offer</span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-800 mt-2">
            Our <span className="text-orange-500">Programs</span>
          </h2>
          <div className="w-16 h-1 bg-blue-500 mx-auto mt-3 rounded-full" />
          <p className="text-gray-500 mt-4 max-w-xl mx-auto">Age-appropriate programs designed to nurture every stage of your child's early development.</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {programs.map(p => (
            <div key={p.title} className={`rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition hover:-translate-y-1 ${p.bg} border border-gray-100`}>
              {/* Header */}
              <div className={`bg-gradient-to-r ${p.color} p-5 text-center`}>
                <div className="text-5xl mb-2">{p.emoji}</div>
                <h3 className="text-white font-extrabold text-xl">{p.title}</h3>
                <span className="text-white/80 text-xs font-medium">{p.age}</span>
              </div>
              {/* Body */}
              <div className="p-5">
                <p className="text-gray-600 text-sm leading-relaxed">{p.desc}</p>
                <div className="mt-4">
                  <a href="#admission" className="text-blue-600 font-semibold text-xs hover:underline">
                    Enroll Now →
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
