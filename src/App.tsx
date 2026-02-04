import { useState, useEffect } from 'react';
import { Hero } from './components/Hero';
import { Navbar } from './components/Navbar';
import { Stats } from './components/Stats';
import { Events } from './components/Events';
import { NotableAlumni } from './components/NotableAlumni';
import { Testimonials } from './components/Testimonials';
import { CallToAction } from './components/CallToAction';
import { Footer } from './components/Footer';

export function App() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="relative min-h-screen bg-black text-white overflow-x-hidden">
      {/* Animated background gradient that follows mouse */}
      <div 
        className="fixed inset-0 pointer-events-none opacity-50"
        style={{
          background: `radial-gradient(800px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(139, 0, 0, 0.15), transparent 40%)`
        }}
      />
      
      {/* Floating particles */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-red-500/30 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${5 + Math.random() * 10}s`
            }}
          />
        ))}
      </div>

      <Navbar />
      <Hero />
      <Stats />
      <Events />
      <NotableAlumni />
      <Testimonials />
      <CallToAction />
      <Footer />
    </div>
  );
}
