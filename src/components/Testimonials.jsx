const reviews = [
  {
    name: 'Priya Sharma',
    child: 'Parent of Aarav (Jr. KG)',
    text: 'My son loves going to school every day! The teachers are so caring and the smart classes keep him engaged. Best decision we made.',
    avatar: '👩',
  },
  {
    name: 'Rahul Patil',
    child: 'Parent of Sneha (Nursery)',
    text: 'Excellent school! The CCTV and biometric security gave us complete peace of mind. Sneha has improved so much in just 3 months.',
    avatar: '👨',
  },
  {
    name: 'Sunita Jadhav',
    child: 'Parent of Rohan (Sr. KG)',
    text: 'Future School is truly future-ready! The abacus and spoken English programs are amazing. Rohan speaks so confidently now.',
    avatar: '👩‍💼',
  },
]

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 bg-gradient-to-br from-blue-600 to-indigo-700">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-14">
          <span className="text-blue-200 font-semibold uppercase tracking-widest text-sm">What Parents Say</span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mt-2">
            Parent <span className="text-yellow-300">Testimonials</span>
          </h2>
          <div className="w-16 h-1 bg-yellow-400 mx-auto mt-3 rounded-full" />
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {reviews.map(r => (
            <div key={r.name} className="bg-white/10 backdrop-blur rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition">
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[1,2,3,4,5].map(s => (
                  <span key={s} className="text-yellow-400 text-lg">★</span>
                ))}
              </div>
              <p className="text-white/90 text-sm leading-relaxed mb-6 italic">"{r.text}"</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center text-2xl">
                  {r.avatar}
                </div>
                <div>
                  <p className="text-white font-bold text-sm">{r.name}</p>
                  <p className="text-blue-200 text-xs">{r.child}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
