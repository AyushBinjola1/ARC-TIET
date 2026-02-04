import { useRef, useEffect, useState } from 'react';

export function CallToAction() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="relative py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className={`relative glass rounded-3xl p-12 md:p-16 lg:p-20 overflow-hidden transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {/* Background decoration */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-red-600/30 to-orange-600/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-tr from-red-600/20 to-transparent rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

          <div className="relative z-10 text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black mb-6">
              Ready to <span className="text-gradient">Reconnect</span>?
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-10">
              Join the vibrant community of 50,000+ Thaparians. Network, mentor, and grow together.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button className="group relative px-8 py-4 bg-gradient-to-r from-red-600 to-red-700 rounded-xl font-bold text-lg overflow-hidden hover-glow transition-all hover:scale-105 w-full sm:w-auto">
                <span className="relative z-10 flex items-center justify-center gap-2">
                  Register as Alumni
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-red-500 opacity-0 group-hover:opacity-100 transition-opacity" />
              </button>
              
              <button className="group px-8 py-4 glass rounded-xl font-bold text-lg hover:bg-white/10 transition-all hover:scale-105 w-full sm:w-auto">
                <span className="flex items-center justify-center gap-2">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  Contact Us
                </span>
              </button>
            </div>

            {/* Trust badges */}
            <div className="mt-12 flex flex-wrap items-center justify-center gap-8 text-gray-500">
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                </svg>
                <span className="text-sm">Verified Network</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-blue-500" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                </svg>
                <span className="text-sm">Official TIET Platform</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-yellow-500" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
                </svg>
                <span className="text-sm">75+ Years Legacy</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
