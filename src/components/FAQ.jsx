import { useState } from 'react'
import { FaChevronDown, FaChevronUp } from 'react-icons/fa'

const faqs = [
  { q: 'What age groups do you accept?', a: 'We accept children from 1.5 years to 5.5 years in Play Group, Nursery, Jr. KG, and Sr. KG programs.' },
  { q: 'How can I contact the school?', a: 'You can call us at 8830507689 or 8830507869, or WhatsApp us at +91 8830507689. We are happy to answer all your queries!' },
  { q: 'What activities are offered?', a: 'We offer Abacus, Arts & Craft, Spoken English, Creative Learning, music, dance, and outdoor play activities.' },
  { q: 'How is the school secured?', a: 'Our school has 24/7 CCTV monitoring, biometric attendance at entry, and trained security personnel to ensure every child\'s safety.' },
  { q: 'Are digital smart classes available?', a: 'Yes! Every classroom is equipped with interactive smart boards and digital teaching tools for modern, engaging lessons.' },
  { q: 'Where is the school located?', a: '94, Satya Sai Baba Society, Sakri Road, Dhule. You can find us on Google Maps for easy directions.' },
]

export default function FAQ() {
  const [open, setOpen] = useState(null)

  return (
    <section id="faq" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-3xl mx-auto px-4">
        <div className="text-center mb-14">
          <span className="text-purple-600 font-semibold uppercase tracking-widest text-sm">Have Questions?</span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-800 mt-2">
            Frequently Asked <span className="text-purple-600">Questions</span>
          </h2>
          <div className="w-16 h-1 bg-yellow-400 mx-auto mt-3 rounded-full" />
        </div>

        <div className="space-y-3">
          {faqs.map((f, i) => (
            <div key={i} className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
              <button
                className="w-full flex items-center justify-between px-6 py-5 text-left gap-4 hover:bg-purple-50 transition"
                onClick={() => setOpen(open === i ? null : i)}
              >
                <span className="font-semibold text-gray-800 text-sm md:text-base">{f.q}</span>
                <span className="text-purple-600 flex-shrink-0">
                  {open === i ? <FaChevronUp /> : <FaChevronDown />}
                </span>
              </button>
              {open === i && (
                <div className="px-6 pb-5 text-gray-500 text-sm leading-relaxed border-t border-gray-50">
                  <p className="pt-4">{f.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
