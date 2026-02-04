import { useState, useEffect } from 'react';

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = ['Home', 'About', 'Events', 'Alumni', 'Gallery', 'Contact'];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? 'glass py-3' : 'py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-3 group cursor-pointer">
          <div className="relative">
            <img 
              src="https://i.postimg.cc/630N5khp/Whats-App-Image-2026-02-05-at-1-46-21-AM.jpg" 
              alt="ARC Logo" 
              className="w-12 h-12 object-contain group-hover:scale-110 transition-transform"
            />
            <div className="absolute -inset-1 bg-red-500/20 rounded-xl blur-lg group-hover:blur-xl transition-all opacity-0 group-hover:opacity-100" />
          </div>
          <div className="hidden sm:block">
            <div className="font-bold text-lg">Alumni Relations Cell</div>
            <div className="text-xs text-gray-400">TIET Patiala</div>
          </div>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-8">
          {navItems.map((item, i) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="relative text-gray-300 hover:text-white transition-colors group"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              {item}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-red-500 to-orange-500 group-hover:w-full transition-all duration-300" />
            </a>
          ))}
        </div>

        {/* CTA Button */}
        <div className="hidden lg:block">
          <button className="relative px-6 py-2.5 bg-gradient-to-r from-red-600 to-red-700 rounded-lg font-semibold overflow-hidden group hover-glow transition-all">
            <span className="relative z-10">Join Network</span>
            <div className="absolute inset-0 bg-gradient-to-r from-red-500 to-orange-500 opacity-0 group-hover:opacity-100 transition-opacity" />
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="lg:hidden w-10 h-10 flex flex-col items-center justify-center gap-1.5"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span className={`w-6 h-0.5 bg-white transition-all ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`w-6 h-0.5 bg-white transition-all ${menuOpen ? 'opacity-0' : ''}`} />
          <span className={`w-6 h-0.5 bg-white transition-all ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`lg:hidden overflow-hidden transition-all duration-500 ${menuOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="glass mt-4 mx-6 rounded-2xl p-6 space-y-3">
          {navItems.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="block text-gray-300 hover:text-white transition-colors py-2 border-b border-white/10"
              onClick={() => setMenuOpen(false)}
            >
              {item}
            </a>
          ))}
          <div className="pt-4">
            <button className="w-full px-6 py-4 bg-gradient-to-r from-red-600 to-red-700 rounded-xl font-bold text-white text-lg shadow-lg shadow-red-500/30">
              🚀 Join Network
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
