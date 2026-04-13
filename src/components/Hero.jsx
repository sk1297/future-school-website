import { FaPhone, FaWhatsapp } from 'react-icons/fa'

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center text-center overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #0ea5e9 0%, #6366f1 40%, #f59e0b 100%)',
      }}
    >
      {/* Decorative circles */}
      <div className="absolute top-10 left-10 w-32 h-32 bg-yellow-300 opacity-20 rounded-full blur-2xl" />
      <div className="absolute bottom-20 right-10 w-48 h-48 bg-pink-400 opacity-20 rounded-full blur-3xl" />
      <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-white opacity-10 rounded-full blur-xl" />

      <div className="relative z-10 px-4 max-w-3xl mx-auto mt-16">
        {/* Badge */}
        <span className="inline-block bg-red-500 text-white text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wider mb-6 animate-pulse shadow-lg">
          Admissions Open – Limited Seats Available
        </span>

        {/* Title */}
        <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight drop-shadow-lg mb-4">
          Future<br />
          <span className="text-yellow-300">Pre-Primary School</span>
        </h1>

        {/* Subtitle */}
        <p className="text-xl md:text-2xl text-blue-100 font-semibold mb-3">
          First Digital School in Dhule
        </p>
        <p className="text-base md:text-lg text-white/80 mb-10 max-w-xl mx-auto">
          Nurturing young minds with smart education, play-based learning, and a safe environment.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="tel:8830507689"
            className="flex items-center justify-center gap-2 bg-white text-blue-700 font-bold px-8 py-4 rounded-full shadow-xl hover:bg-blue-50 transition text-lg"
          >
            <FaPhone /> Call Now
          </a>
          <a
            href="https://wa.me/918830507689"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 bg-green-500 text-white font-bold px-8 py-4 rounded-full shadow-xl hover:bg-green-600 transition text-lg"
          >
            <FaWhatsapp /> WhatsApp Us
          </a>
        </div>

        {/* Stats Row */}
        <div className="mt-14 grid grid-cols-3 gap-4 max-w-md mx-auto">
          {[['500+', 'Happy Students'], ['10+', 'Expert Teachers'], ['5★', 'Parent Rating']].map(([n, l]) => (
            <div key={l} className="bg-white/20 backdrop-blur rounded-2xl py-3 px-2">
              <p className="text-2xl font-extrabold text-white">{n}</p>
              <p className="text-xs text-white/80 mt-1">{l}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
