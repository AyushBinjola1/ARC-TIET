import { useRef, useEffect, useState } from 'react';

interface Testimonial {
  quote: string;
  name: string;
  batch: string;
  role: string;
  image: string;
}

const testimonials: Testimonial[] = [
  {
    quote: "TIET gave me the foundation to dream big. The alumni network opened doors I never knew existed. Forever grateful to be a Thaparians!",
    name: " Krishan Kumar",
    batch: "1990",
    role: "Senior Project Manager (Vice President), UOB, Singapore",
    image: "https://d3sr7cc30ek8f4.cloudfront.net/images/size:200x200/type:crop/prod/5a71aa61b3c1560006984e4e/1517398627-12-0603-2976/0-0sHn70c8tfskx-pDywqr0BL5l1FGaYPmy0qlU3E8if6Cat0GdrzKjJ96TlwFaO-werzlZ7B-QECg70mdAMJZXch5QEGg7aSJAMND0I8ryRIg4xXJvWvFDxuU0.bin",
  },
  {
    quote: "The connections I made through ARC helped me launch my startup. The mentorship program is truly world-class!",
    name: "Atul Jaggi",
    batch: "1999",
    role: "President and Deputy Managing Director, Gabriel India Limited, Pune",
    image: "https://d3sr7cc30ek8f4.cloudfront.net/images/size:200x200/type:crop/prod/5a7178f2ce3ae50007239ee1/1517385983-7-0383-1745/0-0sHn70nhrxwGxKPDyHzzYd9-8f6GxYPHsrzlU3nQ-poFat0a00zPfO9-3ioGa-HIPzKjiB-QECg7xmZAMJZXch5QEGg7aSJAMND0I8ryRIg4xXJvWvwlRTg0.bin",
  },
  {
    quote: "Being part of the Thaparians family means having support wherever you go. I've found mentors and partners across continents!",
    name: "Sumeet Aggarwal",
    batch: "1994",
    role: "COO - Cash Equities Europe at Barclays Investment Bank, Barclays",
    image: "https://d3sr7cc30ek8f4.cloudfront.net/images/size:200x200/type:crop/prod/5a71a0c8f8906c00078887a5/1517396171-7-0822-9322/Profile-1.png",
  },
];

export function Testimonials() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
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

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section ref={sectionRef} className="relative py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-red-950/10 to-transparent" />
      </div>

      <div className="relative max-w-5xl mx-auto px-6">
        {/* Section header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <span className="inline-block px-4 py-1 glass rounded-full text-red-400 text-sm font-medium mb-4">
            TESTIMONIALS
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-4">
            Voices of <span className="text-gradient">Pride</span>
          </h2>
        </div>

        {/* Testimonial carousel */}
        <div className={`relative transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {/* Quote icon */}
          <div className="absolute -top-8 left-1/2 -translate-x-1/2 text-red-500/20">
            <svg className="w-24 h-24" fill="currentColor" viewBox="0 0 24 24">
              <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
            </svg>
          </div>

          <div className="glass rounded-3xl p-8 md:p-12 text-center">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className={`transition-all duration-500 ${index === activeIndex ? 'opacity-100 visible' : 'opacity-0 invisible absolute inset-0'}`}
              >
                <p className="text-xl md:text-2xl lg:text-3xl text-gray-200 mb-8 leading-relaxed">
                  "{testimonial.quote}"
                </p>
                <div className="flex items-center justify-center gap-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-14 h-14 rounded-full border-2 border-red-500 object-cover"
                  />
                  <div className="text-left">
                    <div className="font-bold">{testimonial.name}</div>
                    <div className="text-gray-400 text-sm">{testimonial.role}</div>
                    <div className="text-red-400 text-xs">Batch of '{testimonial.batch.slice(-2)}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Dots */}
          <div className="flex justify-center gap-3 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-3 h-3 rounded-full transition-all ${index === activeIndex ? 'bg-red-500 w-8' : 'bg-gray-600 hover:bg-gray-500'}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
