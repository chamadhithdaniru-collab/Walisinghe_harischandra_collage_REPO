import { useState, useEffect } from 'react';
import { Menu, X, Globe } from 'lucide-react';
import schoolLogo from '@/assets/school-logo.png';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [language, setLanguage] = useState<'si' | 'en'>('si');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = {
    si: ['මුල් පිටුව', 'අපි ගැන', 'ඉතිහාසය', 'අධ්‍යාපනය', 'ජයග්‍රහණ', 'ක්‍රියාකාරකම්', 'වීඩියෝ', 'ගැලරිය', 'සම්බන්ධ වන්න'],
    en: ['Home', 'About', 'History', 'Academics', 'Achievements', 'Activities', 'Videos', 'Gallery', 'Contact']
  };

  const navLinks = ['#home', '#about', '#history', '#academics', '#achievements', '#activities', '#videos', '#gallery', '#contact'];

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled 
          ? 'bg-card/95 backdrop-blur-xl shadow-elegant py-2' 
          : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-3 group">
            <img 
              src={schoolLogo} 
              alt="වලිසිංහ හරිශ්චන්ද්‍ර මහා විද්‍යාලය" 
              className="w-12 h-12 md:w-14 md:h-14 rounded-full shadow-royal object-contain bg-white"
            />
            <div className="hidden sm:block">
              <p className={`font-bold text-sm md:text-base transition-colors duration-300 ${
                isScrolled ? 'text-primary' : 'text-primary-foreground'
              }`}>
                {language === 'si' ? 'වලිසිංහ හරිශ්චන්ද්‍ර' : 'Walisinghe Harischandra'}
              </p>
              <p className={`text-xs transition-colors duration-300 ${
                isScrolled ? 'text-muted-foreground' : 'text-primary-foreground/80'
              }`}>
                {language === 'si' ? 'මහා විද්‍යාලය' : 'College'}
              </p>
            </div>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navItems[language].map((item, index) => (
              <a 
                key={index}
                href={navLinks[index]}
                className={`text-sm font-medium transition-all duration-300 hover:scale-105 ${
                  isScrolled 
                    ? 'text-foreground hover:text-primary' 
                    : 'text-primary-foreground hover:text-gold'
                }`}
              >
                {item}
              </a>
            ))}
          </div>

          {/* Language Toggle & Mobile Menu */}
          <div className="flex items-center gap-4">
            <button 
              onClick={() => setLanguage(lang => lang === 'si' ? 'en' : 'si')}
              className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                isScrolled 
                  ? 'bg-secondary text-secondary-foreground hover:bg-primary hover:text-primary-foreground' 
                  : 'bg-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/30'
              }`}
            >
              <Globe className="w-4 h-4" />
              {language === 'si' ? 'EN' : 'සිං'}
            </button>

            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`lg:hidden p-2 rounded-lg transition-colors ${
                isScrolled ? 'text-foreground' : 'text-primary-foreground'
              }`}
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-card/98 backdrop-blur-xl shadow-elegant animate-fade-in">
            <div className="container mx-auto px-4 py-6 flex flex-col gap-4">
              {navItems[language].map((item, index) => (
                <a 
                  key={index}
                  href={navLinks[index]}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-foreground hover:text-primary font-medium py-2 border-b border-border/50 transition-colors"
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
