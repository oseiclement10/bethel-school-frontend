import graduatingStudent from "@/assets/images/bfs-students.jpg"
import { FadeUpStagger } from "@/components/animations/fades";
import { SlideFromLeft } from "@/components/animations/slide";

export default function FashionSchoolStats() {
  const stats = [
    { number: '1000+', label: 'Students Enrolled', sublabel: 'Since 1999' },
    { number: '26+', label: 'Years of Excellence', sublabel: 'Industry Leader' },
    { number: '99%', label: 'Success Rate', sublabel: 'Career Placement' },
    { number: '30+', label: 'Industry Partners', sublabel: 'Global Network' }
  ];

  return (
    <section className="bg-linear-to-b from-neutral-50 to-white py-20 md:px-4">
      <div className="md:max-w-[90%] mx-auto">
        {/* Stats Grid */}
        <FadeUpStagger delayChildren={0.3} className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center group cursor-default"
            >
              <div className="transition-transform duration-300 group-hover:scale-105">
                <div className="text-5xl md:text-6xl font-light text-neutral-900 mb-2 tracking-tight">
                  {stat.number}
                </div>
                <div className="text-sm md:text-base font-medium text-neutral-800 mb-1 uppercase tracking-wider">
                  {stat.label}
                </div>
                <div className="text-xs md:text-sm text-neutral-500 tracking-wide">
                  {stat.sublabel}
                </div>
              </div>
            </div>
          ))}
        </FadeUpStagger>

        {/* CTA Image Section */}
        <div className="relative h-[600px] md:h-[500px] rounded-sm overflow-hidden group">
          {/* Background Image with Overlay */}
          <div
            className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
            style={{ backgroundImage: `url(${graduatingStudent})` }}
          >
            <div className="absolute inset-0 bg-linear-to-r from-black/60 via-black/50 md:via-black/30 to-transparent"></div>
          </div>

          {/* Content */}
          <div className="relative h-full flex flex-col justify-center px-8 md:px-16 max-w-2xl">
            <SlideFromLeft delay={0.4}>
              <div className="space-y-6">
                <h2 className="text-4xl md:text-6xl font-light text-white leading-tight tracking-tight">
                  Shape Your
                  <span className="block font-normal italic">Creative Future</span>
                </h2>
                <p className="text-base md:text-lg text-neutral-200 leading-relaxed max-w-xl">
                  Join the next generation of fashion innovators. Our comprehensive programs combine traditional craftsmanship with cutting-edge design technology.
                </p>
                <button className="group/btn inline-flex items-center gap-3 bg-blue-600 text-white px-8 py-4 rounded-sm font-medium text-sm uppercase tracking-widest cursor-pointer transition-all duration-300 hover:bg-blue-800 hover:text-white">
                  Enroll Now
                  <svg
                    className="w-4 h-4 transition-transform duration-300 group-hover/btn:translate-x-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </SlideFromLeft>

          </div>

          {/* Decorative Element */}
          <div className="absolute bottom-0 right-0 w-64 h-64 bg-white/5 backdrop-blur-sm transform rotate-45 translate-x-32 translate-y-32"></div>
        </div>
      </div>
    </section>
  );
}