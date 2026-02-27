export default function Footer() {
  return (
    <footer className="bg-[#050505] pt-20 pb-10 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
        <div>
          <h3 className="text-2xl font-black text-white mb-6 tracking-tighter">NYANETIC</h3>
          <p className="text-gray-500 text-sm leading-relaxed max-w-xs">
            Leading digital agency specialized in building high-performance web solutions and AI-driven experiences.
          </p>
        </div>
        <div>
          <h4 className="text-white font-bold mb-6 uppercase tracking-widest text-xs">Navigation</h4>
          <ul className="space-y-4 text-sm text-gray-500">
            <li><a href="/about" className="hover:text-emerald-500 transition">Our Story</a></li>
            <li><a href="/services" className="hover:text-emerald-500 transition">Services</a></li>
            <li><a href="/projects" className="hover:text-emerald-500 transition">Case Studies</a></li>
          </ul>
        </div>
        <div>
          <h4 className="text-white font-bold mb-6 uppercase tracking-widest text-xs">Connect</h4>
          <ul className="space-y-4 text-sm text-gray-500">
            <li>Email: <span className="text-white">hello@nyanetic.com</span></li>
            <li>Location: <span className="text-white">Yangon, Myanmar</span></li>
          </ul>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-6 pt-10 border-t border-white/5 text-center">
        <p className="text-gray-600 text-xs">© 2026 NYANETIC. Digital Solutions by Visionaries.</p>
      </div>
    </footer>
  )
}