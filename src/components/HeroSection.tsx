import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import heroBg from '@/assets/hero-bg.jpg';
import schoolLogo from '@/assets/school-logo.png';

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      image: heroBg,
      title: 'වලිසිංහ හරිශ්චන්ද්‍ර මහා විද්‍යාලය',
      subtitle: 'Walisinghe Harischandra College',
      tagline: 'විද්‍යා තුණ මනස පුබුදු',
    },
    {
      image: heroBg,
      title: 'අධ්‍යාපන විශිෂ්ටත්වය',
      subtitle: 'Excellence in Education Since 1955',
      tagline: 'අනුරාධපුරයේ ප්‍රමුඛතම ජාතික පාසල',
    },
    {
      image: heroBg,
      title: 'අනාගතය ගොඩනගන්නෝ',
      subtitle: 'Building Tomorrow\'s Leaders',
      tagline: 'බ්‍රහ්මචාරී වලිසිංහ හරිශ්චන්ද්‍ර තුමාගේ නාමයට ගරුත්වයක්',
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <section id="home" className="relative h-screen overflow-hidden">
      {/* Background Slides */}
      {slides.map((slide, index) => (
        <div 
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <img 
            src={slide.image} 
            alt="School Campus" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-primary/80 via-primary/70 to-primary-dark/90" />
        </div>
      ))}

      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-gold/10 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-40 right-20 w-48 h-48 bg-gold/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4">
        <div className="max-w-4xl mx-auto">
          {/* School Logo */}
          <div className="mb-6 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <img 
              src={schoolLogo} 
              alt="වලිසිංහ හරිශ්චන්ද්‍ර මහා විද්‍යාලය" 
              className="w-28 h-28 md:w-36 md:h-36 mx-auto rounded-full shadow-2xl border-4 border-gold/30 bg-white object-contain"
            />
          </div>

          {/* Title */}
          <h1 
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 text-primary-foreground text-shadow-lg animate-fade-in"
            style={{ animationDelay: '0.4s' }}
          >
            {slides[currentSlide].title}
          </h1>

          {/* Subtitle */}
          <p 
            className="text-xl sm:text-2xl md:text-3xl text-gold font-display mb-6 animate-fade-in"
            style={{ animationDelay: '0.6s' }}
          >
            {slides[currentSlide].subtitle}
          </p>

          {/* Tagline */}
          <p 
            className="text-lg sm:text-xl text-primary-foreground/90 mb-10 animate-fade-in"
            style={{ animationDelay: '0.8s' }}
          >
            {slides[currentSlide].tagline}
          </p>

          {/* CTA Buttons */}
          <div 
            className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in"
            style={{ animationDelay: '1s' }}
          >
            <a 
              href="#about"
              className="px-8 py-4 bg-gold text-primary-dark font-semibold rounded-full shadow-gold hover:shadow-2xl hover:scale-105 transition-all duration-300"
            >
              අපි ගැන දැනගන්න
            </a>
            <a 
              href="#contact"
              className="px-8 py-4 border-2 border-primary-foreground/50 text-primary-foreground font-semibold rounded-full backdrop-blur-sm hover:bg-primary-foreground/10 hover:border-primary-foreground transition-all duration-300"
            >
              සම්බන්ධ වන්න
            </a>
          </div>
        </div>

        {/* Slide Navigation */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex items-center gap-4">
          <button 
            onClick={prevSlide}
            className="p-2 rounded-full bg-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/30 transition-colors"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          
          <div className="flex gap-2">
            {slides.map((_, index) => (
              <button 
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide 
                    ? 'bg-gold w-8' 
                    : 'bg-primary-foreground/40 hover:bg-primary-foreground/60'
                }`}
              />
            ))}
          </div>

          <button 
            onClick={nextSlide}
            className="p-2 rounded-full bg-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/30 transition-colors"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-5 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary-foreground/50 rounded-full flex justify-center pt-2">
          <div className="w-1.5 h-3 bg-gold rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
