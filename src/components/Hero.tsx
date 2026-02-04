import { useEffect, useState } from 'react';

export function Hero() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Animated background shapes */}
      <div className="absolute inset-0">
        {/* Large rotating ring */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-red-500/20 rounded-full animate-rotate-slow" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-red-500/30 rounded-full animate-rotate-slow" style={{ animationDirection: 'reverse', animationDuration: '15s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] border border-red-500/40 rounded-full animate-rotate-slow" style={{ animationDuration: '25s' }} />
        
        {/* Gradient orbs */}
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-red-600/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-orange-600/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
        {/* Badge */}
        <div className={`inline-flex items-center gap-2 px-4 py-2 glass rounded-full mb-8 transition-all duration-1000 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'}`}>
          <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
          <span className="text-sm text-gray-300">Connecting 20,000+ Alumni Worldwide</span>
        </div>

        {/* Main heading */}
        <h1 className={`text-5xl md:text-7xl lg:text-8xl font-black mb-6 leading-tight transition-all duration-1000 delay-200 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <span className="block">Alumni</span>
          <span className="block text-gradient animate-text-gradient">Relations Cell</span>
        </h1>

        {/* Subtitle */}
        <p className={`text-xl md:text-2xl text-gray-400 max-w-2xl mx-auto mb-8 transition-all duration-1000 delay-400 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          Building bridges between <span className="text-white font-semibold">past</span>, <span className="text-red-500 font-semibold">present</span> & <span className="text-orange-500 font-semibold">future</span> Thaparians
        </p>

        {/* TIET Badge */}
        <div className={`flex items-center justify-center gap-4 mb-12 transition-all duration-1000 delay-500 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="h-px w-16 bg-gradient-to-r from-transparent to-red-500" />
          <span className="text-gray-500 text-sm tracking-widest uppercase">Thapar Institute of Engineering & Technology</span>
          <div className="h-px w-16 bg-gradient-to-l from-transparent to-red-500" />
        </div>

        {/* CTA Buttons */}
        <div className={`flex flex-col sm:flex-row items-center justify-center gap-4 mb-16 transition-all duration-1000 delay-700 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <button className="w-full sm:w-auto relative group px-8 py-4 bg-gradient-to-r from-red-600 to-red-700 rounded-xl font-bold text-lg overflow-hidden hover-glow transition-all hover:scale-105">
            <span className="relative z-10 flex items-center justify-center gap-2">
              Explore Network
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-red-500 opacity-0 group-hover:opacity-100 transition-opacity" />
          </button>
          <button className="w-full sm:w-auto group px-8 py-4 glass rounded-xl font-bold text-lg hover:bg-white/10 transition-all hover:scale-105">
            <span className="flex items-center justify-center gap-2">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z" />
              </svg>
              Watch Story
            </span>
          </button>
        </div>

        {/* Scroll indicator - centered below buttons */}
        <div className={`flex justify-center transition-all duration-1000 delay-1000 ${loaded ? 'opacity-100' : 'opacity-0'}`}>
          <div className="w-6 h-10 border-2 border-gray-600 rounded-full flex justify-center pt-2 animate-bounce-slow">
            <div className="w-1.5 h-3 bg-red-500 rounded-full animate-pulse" />
          </div>
        </div>
      </div>
    </section>
  );
}
