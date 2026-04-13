import { FaPhone, FaWhatsapp } from 'react-icons/fa'

const steps = [
  { step: '01', icon: '🏫', title: 'Visit or Call Us', desc: 'Call us or visit the school to get a tour and learn about our programs.' },
  { step: '02', icon: '📝', title: 'Fill the Form', desc: 'Complete the simple admission form with your child\'s details.' },
  { step: '03', icon: '🎉', title: 'Confirm Admission', desc: 'Pay the fees and confirm your child\'s seat. Welcome to Future School!' },
]

export default function Admission() {
  return (
    <section id="admission" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-14">
          <span className="text-green-600 font-semibold uppercase tracking-widest text-sm">Join Us Today</span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-800 mt-2">
            Admission <span className="text-green-600">Process</span>
          </h2>
          <div className="w-16 h-1 bg-orange-400 mx-auto mt-3 rounded-full" />
          <p className="text-gray-500 mt-4 max-w-xl mx-auto">Simple 3-step process to secure your child's bright future. Seats are limited — act fast!</p>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-3 gap-8 mb-14">
          {steps.map((s, i) => (
            <div key={s.step} className="text-center relative">
              {/* Connector line */}
              {i < steps.length - 1 && (
                <div className="hidden md:block absolute top-10 left-1/2 w-full h-0.5 bg-dashed border-t-2 border-dashed border-green-200" />
              )}
              <div className="relative z-10 inline-flex flex-col items-center">
                <div className="w-20 h-20 bg-gradient-to-br from-green-400 to-teal-500 rounded-full flex items-center justify-center text-4xl shadow-lg mb-4">
                  {s.icon}
                </div>
                <span className="text-xs font-bold text-green-600 bg-green-100 px-3 py-1 rounded-full mb-3">Step {s.step}</span>
                <h3 className="font-extrabold text-gray-800 text-lg mb-2">{s.title}</h3>
                <p className="text-gray-500 text-sm max-w-xs">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Banner */}
        <div className="bg-gradient-to-r from-green-500 to-teal-600 rounded-3xl p-8 md:p-10 text-center shadow-xl">
          <div className="inline-block bg-white/20 text-white text-sm font-bold px-4 py-1.5 rounded-full mb-4 animate-pulse">
            Admissions Open for 2025–26
          </div>
          <h3 className="text-2xl md:text-3xl font-extrabold text-white mb-3">
            Ready to Enroll Your Child?
          </h3>
          <p className="text-white/80 mb-8 max-w-md mx-auto">
            Contact us today. Limited seats available for Play Group, Nursery, Jr. KG & Sr. KG.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:8830507689"
              className="flex items-center justify-center gap-2 bg-white text-green-700 font-bold px-8 py-4 rounded-full shadow-lg hover:bg-green-50 transition text-lg"
            >
              <FaPhone /> Call: 8830507689
            </a>
            <a
              href="https://wa.me/918830507689"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 bg-green-800 text-white font-bold px-8 py-4 rounded-full shadow-lg hover:bg-green-900 transition text-lg"
            >
              <FaWhatsapp /> WhatsApp Us
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
