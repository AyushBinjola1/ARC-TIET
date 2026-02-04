import { useRef, useEffect, useState } from 'react';

interface Alumni {
  name: string;
  batch: string;
  role: string;
  company: string;
  image: string;
  linkedin: string;
}

const alumni: Alumni[] = [
  {
    name: 'Alok Garg',
    batch: '1979',
    role: 'Director',
    company: 'Spaciya Advisors pvt ltd, Noida',
    image: 'https://d3sr7cc30ek8f4.cloudfront.net/images/size:200x200/type:crop/prod/5a719f8d71b4100007b555b3/1517395873-7-0564-2665/554318-471358459588454-1689035281-n.jpg',
    linkedin: '#',
  },
  {
    name: 'Anshul Khandelwal',
    batch: '2007',
    role: 'Operating Advisor',
    company: 'BlueStone, Bengaluru',
    image: 'https://d3sr7cc30ek8f4.cloudfront.net/images/size:200x200/type:crop/prod/5a717702791956000704eb42/1517385475-7-0157-0677/10368c2.jpg',
    linkedin: '#',
  },
  {
    name: 'Ashish Singla',
    batch: '2009',
    role: 'Vice President',
    company: ' Indiamart Intermesh Ltd, Noida',
    image: 'https://d3sr7cc30ek8f4.cloudfront.net/images/size:200x200/type:crop/prod/5a71a88ef00d8100063269c2/1517398159-7-0284-9933/0-i2oR-yPW-3hVmW-KTJIzBj0W6Kt9DWOKT0NnqgD5wq1voeuOipwcnR9FSwW.bin',
    linkedin: '#',
  },
  {
    name: 'Ashish Jindal',
    batch: '1992',
    role: 'CEO AFRICA BUSINESS',
    company: 'Jindal Steel & Power Ltd.',
    image: 'https://d3sr7cc30ek8f4.cloudfront.net/images/size:200x200/type:crop/prod/5a7180a935c03800071e48ed/1517387963-6-0428-9576/0-7Hn2yfbFgTkFD-sGId6GsmcFyGswD-sGIIHTsaMWtnReW1HuW4ch4kw5y5F.bin',
    linkedin: '#',
  },
  {
    name: 'Sidhanshu Bansal',
    batch: '1998',
    role: 'Vice President',
    company: 'Coforge Limited, Gurgaon',
    image: 'https://d3sr7cc30ek8f4.cloudfront.net/images/size:200x200/type:crop/prod/5abb94acb57c250016741b0c/1522242733-6-0311-1277/0.jpeg',
    linkedin: '#',
  },
  {
    name: 'Swatantar Kumar',
    batch: '1982',
    role: 'Executive Vice Preseident & COO',
    company: 'B&I at Punj Lloyd Limited',
    image: 'https://d3sr7cc30ek8f4.cloudfront.net/images/size:200x200/type:crop/prod/5a71a19f71b4100007b585cb/1517396384-12-0096-8089/0-1Wy6n3jYOKGZ3nqKK8T5BNgjxDiNLsZ0L7T-FxyZxfYBNnqJi8T3GMgjaDGNN4JVtv85BzpjgZGqnwBMkGDWTVyYoZGNnwLs8GDXq38OxCPgnpN18QjLtSl8Vt.bin',
    linkedin: '#',
  },
];

export function NotableAlumni() {
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
    <section ref={sectionRef} id="alumni" className="relative py-24 overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_center,rgba(220,38,38,0.1),transparent_70%)]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Section header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <span className="inline-block px-4 py-1 glass rounded-full text-red-400 text-sm font-medium mb-4">
            HALL OF FAME
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-4">
            Notable <span className="text-gradient">Thaparians</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Our alumni are leaders, innovators, and change-makers shaping industries worldwide
          </p>
        </div>

        {/* Alumni grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {alumni.map((person, index) => (
            <div
              key={index}
              className={`group text-center transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {/* Image */}
              <div className="relative mb-4 mx-auto w-28 h-28 md:w-32 md:h-32">
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-red-500 to-orange-500 opacity-0 group-hover:opacity-100 transition-opacity blur-lg" />
                <div className="relative w-full h-full rounded-full overflow-hidden border-2 border-gray-700 group-hover:border-red-500 transition-all">
                  <img
                    src={person.image}
                    alt={person.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                {/* Batch badge */}
                <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 px-2 py-0.5 bg-red-600 rounded-full text-xs font-bold">
                  '{person.batch.slice(-2)}
                </div>
              </div>

              {/* Info */}
              <h3 className="font-bold text-sm md:text-base group-hover:text-red-400 transition-colors truncate">
                {person.name}
              </h3>
              <p className="text-gray-500 text-xs md:text-sm truncate">{person.role}</p>
              <p className="text-gray-600 text-xs truncate">{person.company}</p>

              {/* LinkedIn icon on hover */}
              <a
                href={person.linkedin}
                className="inline-flex items-center justify-center w-8 h-8 mt-2 glass rounded-full opacity-0 group-hover:opacity-100 transition-all hover:bg-red-600"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>
            </div>
          ))}
        </div>

        {/* View all button */}
        <div className={`text-center mt-12 transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <button className="px-8 py-3 glass rounded-xl font-semibold hover:bg-white/10 transition-all group">
            View All Alumni
            <svg className="inline-block w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
