import { useRef, useEffect, useState } from 'react';

interface Event {
  title: string;
  date: string;
  type: string;
  image: string;
  description: string;
}

const events: Event[] = [
  {
    title: 'Homecoming 2025',
    date: 'January 15-17, 2026',
    type: 'Reunion',
    image: 'https://webkiosk.thapar.edu/acad/images/15005501011.jpg',
    description: 'Annual gathering of Thaparians from all batches. Three days of nostalgia, networking, and celebration.',
  },
  {
    title: 'Global Alumni Meet',
    date: 'November 25, 2025',
    type: 'Networking',
    image: 'https://ticc.thapar.edu/assets/ticc.jpg',
    description: 'Virtual meet connecting alumni across 120+ countries. Keynotes from industry leaders.',
  },
  {
    title: 'Mentorship Summit',
    date: 'October 22, 2025',
    type: 'Career',
    image: 'https://th-i.thgim.com/public/incoming/arcv59/article69236956.ece/alternates/LANDSCAPE_1200/Thapar%20Institute%20of%20Engineering.png',
    description: 'Alumni mentoring current students for career guidance and industry insights.',
  },
  {
    title: 'Tech Innovation Day',
    date: 'September 10, 2025',
    type: 'Innovation',
    image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=600&h=400&fit=crop',
    description: 'Showcasing groundbreaking innovations by Thaparite entrepreneurs and researchers.',
  },
];

export function Events() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} id="events" className="relative py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <span className="inline-block px-4 py-1 glass rounded-full text-red-400 text-sm font-medium mb-4">
            UPCOMING EVENTS
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-4">
            Don't Miss <span className="text-gradient">The Action</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Join exciting events that bring together the Thaparite community from around the globe
          </p>
        </div>

        {/* Events grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {events.map((event, index) => (
            <div
              key={index}
              className={`group relative glass rounded-2xl overflow-hidden hover-glow transition-all duration-500 hover:scale-[1.02] ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
                <span className="absolute top-4 left-4 px-3 py-1 bg-red-600 rounded-full text-sm font-medium">
                  {event.type}
                </span>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-center gap-2 text-red-400 text-sm mb-2">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  {event.date}
                </div>
                <h3 className="text-2xl font-bold mb-2 group-hover:text-red-400 transition-colors">
                  {event.title}
                </h3>
                <p className="text-gray-400 mb-4">{event.description}</p>
                <button className="flex items-center gap-2 text-red-400 font-medium group/btn">
                  Register Now
                  <svg className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </button>
              </div>

              {/* Hover gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-red-600/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
            </div>
          ))}
        </div>

        {/* View all button */}
        <div className={`text-center mt-12 transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <button className="px-8 py-3 glass rounded-xl font-semibold hover:bg-white/10 transition-all group">
            View All Events
            <svg className="inline-block w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
