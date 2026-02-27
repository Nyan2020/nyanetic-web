import Link from 'next/link'

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 bg-black/60 backdrop-blur-xl border-b border-white/5">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <Link href="/" className="text-2xl font-black tracking-tighter text-emerald-500 hover:opacity-80 transition">
          NYANETIC
        </Link>
        
        <div className="hidden md:flex items-center gap-10 text-[13px] font-bold uppercase tracking-widest text-gray-400">
          <Link href="/about" className="hover:text-emerald-400 transition">About</Link>
          <Link href="/services" className="hover:text-emerald-400 transition">Services</Link>
          <Link href="/projects" className="hover:text-emerald-400 transition">Projects</Link>
          <Link href="/blog" className="hover:text-emerald-400 transition">Blog</Link>
          <Link href="/contact" className="bg-emerald-500 text-black px-6 py-2.5 rounded-full hover:bg-white transition shadow-[0_0_20px_rgba(16,185,129,0.2)]">
            Hire Us
          </Link>
        </div>
      </div>
    </nav>
  )
}