import { FaBullseye, FaEye, FaHeart } from 'react-icons/fa'

export default function About() {
  return (
    <section id="about" className="py-20 bg-gradient-to-b from-blue-50 to-white">
      <div className="max-w-6xl mx-auto px-4">
        {/* Heading */}
        <div className="text-center mb-14">
          <span className="text-blue-600 font-semibold uppercase tracking-widest text-sm">Who We Are</span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-800 mt-2">
            About <span className="text-blue-600">Future School</span>
          </h2>
          <div className="w-16 h-1 bg-yellow-400 mx-auto mt-3 rounded-full" />
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text */}
          <div>
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              Future Pre-Primary School is the <strong>first digital school in Dhule</strong>, dedicated to providing a holistic, technology-driven early education experience. We believe every child is unique and deserves the best start in life.
            </p>
            <p className="text-gray-600 leading-relaxed mb-8">
              Our classrooms are equipped with smart boards, CCTV security, and biometric attendance — creating a modern, safe, and stimulating environment where children thrive.
            </p>

            <div className="space-y-5">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center text-blue-600 text-xl flex-shrink-0">
                  <FaBullseye />
                </div>
                <div>
                  <h3 className="font-bold text-gray-800 mb-1">Our Mission</h3>
                  <p className="text-gray-500 text-sm">To inspire curiosity and creativity in every child through innovative, play-based digital learning.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-yellow-100 rounded-xl flex items-center justify-center text-yellow-600 text-xl flex-shrink-0">
                  <FaEye />
                </div>
                <div>
                  <h3 className="font-bold text-gray-800 mb-1">Our Vision</h3>
                  <p className="text-gray-500 text-sm">To be the most trusted pre-primary school in Dhule, nurturing future leaders with strong values.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-pink-100 rounded-xl flex items-center justify-center text-pink-600 text-xl flex-shrink-0">
                  <FaHeart />
                </div>
                <div>
                  <h3 className="font-bold text-gray-800 mb-1">Our Values</h3>
                  <p className="text-gray-500 text-sm">Love, respect, creativity, discipline, and a passion for lifelong learning.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Visual Card */}
          <div className="grid grid-cols-2 gap-4">
            {[
              { emoji: '🎓', title: 'Digital Learning', desc: 'Smart board classrooms' },
              { emoji: '🔒', title: 'Safe & Secure', desc: 'CCTV + biometric entry' },
              { emoji: '👨‍🏫', title: 'Expert Teachers', desc: 'Trained & caring staff' },
              { emoji: '🌈', title: 'Fun Environment', desc: 'Play & learn approach' },
            ].map(item => (
              <div key={item.title} className="bg-white rounded-2xl p-5 shadow-md border border-gray-100 text-center hover:shadow-lg transition">
                <div className="text-4xl mb-3">{item.emoji}</div>
                <h4 className="font-bold text-gray-800 text-sm mb-1">{item.title}</h4>
                <p className="text-gray-500 text-xs">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
