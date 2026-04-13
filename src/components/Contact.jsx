import { FaPhone, FaWhatsapp, FaMapMarkerAlt } from 'react-icons/fa'

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-14">
          <span className="text-blue-600 font-semibold uppercase tracking-widest text-sm">Get In Touch</span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-800 mt-2">
            Contact <span className="text-blue-600">Us</span>
          </h2>
          <div className="w-16 h-1 bg-orange-400 mx-auto mt-3 rounded-full" />
        </div>

        <div className="grid md:grid-cols-2 gap-10 items-start">
          {/* Contact Info */}
          <div className="space-y-6">
            <div className="bg-blue-50 rounded-2xl p-6 flex items-start gap-4">
              <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center text-white text-xl flex-shrink-0">
                <FaMapMarkerAlt />
              </div>
              <div>
                <h3 className="font-bold text-gray-800 mb-1">Our Address</h3>
                <p className="text-gray-600 text-sm">94, Satya Sai Baba Society,<br />Sakri Road, Dhule – 424001<br />Maharashtra, India</p>
              </div>
            </div>

            <div className="bg-green-50 rounded-2xl p-6 flex items-start gap-4">
              <div className="w-12 h-12 bg-green-600 rounded-xl flex items-center justify-center text-white text-xl flex-shrink-0">
                <FaPhone />
              </div>
              <div>
                <h3 className="font-bold text-gray-800 mb-1">Phone Numbers</h3>
                <a href="tel:8830507689" className="block text-green-700 font-semibold hover:underline">8830507689</a>
                <a href="tel:8830507869" className="block text-green-700 font-semibold hover:underline">8830507869</a>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col gap-3">
              <a
                href="tel:8830507689"
                className="flex items-center justify-center gap-2 bg-blue-600 text-white font-bold px-6 py-4 rounded-xl shadow hover:bg-blue-700 transition"
              >
                <FaPhone /> Call Now
              </a>
              <a
                href="https://wa.me/918830507689"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-green-500 text-white font-bold px-6 py-4 rounded-xl shadow hover:bg-green-600 transition"
              >
                <FaWhatsapp /> Chat on WhatsApp
              </a>
              <a
                href="https://www.google.com/maps/search/94+Satya+Sai+Baba+Society+Sakri+Road+Dhule"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-orange-500 text-white font-bold px-6 py-4 rounded-xl shadow hover:bg-orange-600 transition"
              >
                <FaMapMarkerAlt /> Get Directions
              </a>
            </div>
          </div>

          {/* Map Embed */}
          <div className="rounded-2xl overflow-hidden shadow-lg border border-gray-100 h-[420px]">
            <iframe
              title="Future Pre-Primary School Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3726.8!2d74.77!3d20.90!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sSakri+Road%2C+Dhule%2C+Maharashtra!5e0!3m2!1sen!2sin!4v1"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
