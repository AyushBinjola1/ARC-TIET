import { useEffect, useState, useRef } from 'react';

interface StatItemProps {
  value: number;
  suffix: string;
  label: string;
  delay: number;
}

function StatItem({ value, suffix, label, delay }: StatItemProps) {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    const timeout = setTimeout(() => {
      const duration = 2000;
      const steps = 60;
      const increment = value / steps;
      let current = 0;

      const timer = setInterval(() => {
        current += increment;
        if (current >= value) {
          setCount(value);
          clearInterval(timer);
        } else {
          setCount(Math.floor(current));
        }
      }, duration / steps);

      return () => clearInterval(timer);
    }, delay);

    return () => clearTimeout(timeout);
  }, [isVisible, value, delay]);

  return (
    <div ref={ref} className="text-center group p-4">
      <div className="relative inline-block">
        <span className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-gradient animate-text-gradient">
          {count.toLocaleString()}{suffix}
        </span>
        <div className="absolute -inset-4 bg-red-500/10 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
      </div>
      <p className="text-gray-400 mt-3 text-sm sm:text-base md:text-lg">{label}</p>
    </div>
  );
}

export function Stats() {
  const stats = [
    { value: 20000, suffix: '+', label: 'Global Alumni', delay: 0 },
    { value: 75, suffix: '+', label: 'Years of Legacy', delay: 200 },
    { value: 100, suffix: '+', label: 'Countries', delay: 400 },
    { value: 50, suffix: '+', label: 'Events Hosted', delay: 600 },
  ];

  return (
    <section className="relative py-24 overflow-hidden">
      {/* Background grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(220,38,38,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(220,38,38,0.03)_1px,transparent_1px)] bg-[size:50px_50px]" />
      
      <div className="relative max-w-7xl mx-auto px-6">
        <div className="glass rounded-3xl p-6 sm:p-12 md:p-16">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-8 md:gap-12">
            {stats.map((stat, i) => (
              <StatItem key={i} {...stat} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
