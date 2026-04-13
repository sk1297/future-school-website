import { useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'

const links = [
  { label: 'About', href: '#about' },
  { label: 'Programs', href: '#programs' },
  { label: 'Features', href: '#features' },
  { label: 'Activities', href: '#activities' },
  { label: 'Admission', href: '#admission' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo + Name */}
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-full bg-gradient-to-br from-yellow-400 to-orange-500 flex items-center justify-center text-white font-bold text-lg shadow">
            FPS
          </div>
          <div>
            <p className="font-bold text-blue-700 text-sm leading-tight">Future Pre-Primary School</p>
            <p className="text-xs text-orange-500 font-medium">First Digital School in Dhule</p>
          </div>
        </div>

        {/* Desktop Links */}
        <ul className="hidden md:flex gap-6">
          {links.map(l => (
            <li key={l.href}>
              <a href={l.href} className="text-gray-700 hover:text-blue-600 font-medium text-sm transition-colors">
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden text-blue-700 text-2xl"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-white border-t border-gray-100 px-4 pb-4">
          <ul className="flex flex-col gap-3 pt-3">
            {links.map(l => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="block text-gray-700 hover:text-blue-600 font-medium py-1"
                  onClick={() => setOpen(false)}
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  )
}
