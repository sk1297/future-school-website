import { FaPhone, FaWhatsapp, FaMapMarkerAlt, FaHeart } from 'react-icons/fa'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white pt-12 pb-6">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-yellow-400 to-orange-500 flex items-center justify-center text-white font-bold text-lg">
                FPS
              </div>
              <div>
                <p className="font-bold text-white leading-tight">Future Pre-Primary School</p>
                <p className="text-yellow-400 text-xs">First Digital School in Dhule</p>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Nurturing young minds with smart education, creativity, and a safe environment. Your child's bright future starts here.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-white mb-4 text-lg">Quick Links</h4>
            <ul className="space-y-2">
              {['About', 'Programs', 'Features', 'Activities', 'Admission', 'Contact'].map(l => (
                <li key={l}>
                  <a href={`#${l.toLowerCase()}`} className="text-gray-400 hover:text-yellow-400 transition text-sm">
                    → {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-white mb-4 text-lg">Contact</h4>
            <div className="space-y-3">
              <div className="flex items-start gap-2 text-gray-400 text-sm">
                <FaMapMarkerAlt className="text-orange-400 mt-0.5 flex-shrink-0" />
                <span>94, Satya Sai Baba Society, Sakri Road, Dhule</span>
              </div>
              <a href="tel:8830507689" className="flex items-center gap-2 text-gray-400 hover:text-green-400 transition text-sm">
                <FaPhone className="text-green-400" />
                8830507689
              </a>
              <a href="tel:8830507869" className="flex items-center gap-2 text-gray-400 hover:text-green-400 transition text-sm">
                <FaPhone className="text-green-400" />
                8830507869
              </a>
              <a
                href="https://wa.me/918830507689"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-gray-400 hover:text-green-400 transition text-sm"
              >
                <FaWhatsapp className="text-green-500" />
                WhatsApp Us
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-6 text-center text-gray-500 text-sm">
          <p>
            © 2025 Future Pre-Primary School, Dhule. All rights reserved. Made with{' '}
            <FaHeart className="inline text-red-500" /> for little learners.
          </p>
        </div>
      </div>
    </footer>
  )
}
