import { Facebook, Mail, Instagram } from 'lucide-react';
import schoolLogo from '@/assets/school-logo.png';

const Footer = () => {
  const quickLinks = [
    { name: 'මුල් පිටුව', href: '#home' },
    { name: 'අපි ගැන', href: '#about' },
    { name: 'ඉතිහාසය', href: '#history' },
    { name: 'අධ්‍යාපනය', href: '#academics' },
    { name: 'ගැලරිය', href: '#gallery' },
    { name: 'සම්බන්ධ වන්න', href: '#contact' },
  ];

  return (
    <footer className="bg-gradient-to-b from-primary to-primary-dark text-primary-foreground relative overflow-hidden">
      {/* Top Wave */}
      <div className="absolute top-0 left-0 right-0 h-20 bg-background" style={{
        clipPath: 'ellipse(60% 100% at 50% 0%)'
      }} />

      <div className="container mx-auto px-4 md:px-6 pt-28 pb-8 relative z-10">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* School Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-4 mb-6">
              <img 
                src={schoolLogo} 
                alt="වලිසිංහ හරිශ්චන්ද්‍ර මහා විද්‍යාලය" 
                className="w-20 h-20 rounded-full shadow-royal object-contain bg-white"
              />
              <div>
                <h3 className="text-xl font-bold">වලිසිංහ හරිශ්චන්ද්‍ර මහා විද්‍යාලය</h3>
                <p className="text-gold">Walisinghe Harischandra College</p>
                <p className="text-primary-foreground/70 text-sm">A12, අනුරාධපුරය, ශ්‍රී ලංකාව</p>
              </div>
            </div>
            <p className="text-primary-foreground/80 leading-relaxed mb-6 max-w-md">
              1955 වසරේ සිට අධ්‍යාපන විශිෂ්ටත්වයේ සංකේතයක් ලෙස ක්‍රියාත්මක වන 
              වලිසිංහ හරිශ්චන්ද්‍ර මහා විද්‍යාලය, ශ්‍රී ලංකාවේ ප්‍රමුඛතම ජාතික පාසල්වලින් එකකි.
            </p>
            <div className="flex gap-4">
              <a href="https://www.facebook.com/walisinghe.harischndra.college" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-gold hover:text-primary-dark transition-all duration-300">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="https://www.instagram.com/walisinghe_harischndra_college" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-gold hover:text-primary-dark transition-all duration-300">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="mailto:walisinghecollege@gmail.com" className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-gold hover:text-primary-dark transition-all duration-300">
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-gold">ඉක්මන් සබැඳි</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href}
                    className="text-primary-foreground/80 hover:text-gold transition-colors duration-300 flex items-center gap-2"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-gold" />
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-gold">සම්බන්ධතා</h4>
            <ul className="space-y-4 text-primary-foreground/80">
              <li>
                <p className="font-medium text-primary-foreground">ලිපිනය:</p>
                <p>A12, අනුරාධපුරය, ශ්‍රී ලංකාව</p>
              </li>
              <li>
                <p className="font-medium text-primary-foreground">දුරකථනය:</p>
                <p>0252 235 451</p>
              </li>
              <li>
                <p className="font-medium text-primary-foreground">විද්‍යුත් තැපෑල:</p>
                <p>walisinghecollege@gmail.com</p>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-primary-foreground/20 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-primary-foreground/70 text-sm text-center md:text-left">
              © {new Date().getFullYear()} Walisinghe Harischandra College. All rights reserved.
              <span className="block md:inline"> සියලුම හිමිකම් ඇවිරිණි.</span>
            </p>
            <p className="text-primary-foreground/70 text-sm flex items-center gap-1">
              Created by <span className="text-gold font-semibold ml-1">Daniru</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
