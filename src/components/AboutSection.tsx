import { Users, GraduationCap, Award, Building, Globe, BookOpen } from 'lucide-react';
import schoolGate from '@/assets/school-gate.png';
import schoolLogo from '@/assets/school-logo.png';

const AboutSection = () => {
  const stats = [
    { icon: Users, value: '5647+', label: 'සිසුන්', labelEn: 'Students' },
    { icon: GraduationCap, value: '205+', label: 'ගුරුවරුන්', labelEn: 'Teachers' },
    { icon: Award, value: '70', label: 'වසර', labelEn: 'Years' },
    { icon: Building, value: '50+', label: 'පන්ති කාමර', labelEn: 'Classrooms' },
  ];

  const languages = ['English', 'Korean', 'Hindi', 'French', 'Japanese', 'German', 'Chinese'];
  const streams = ['Science', 'Commerce', 'Arts', 'Technology'];

  return (
    <section id="about" className="py-20 md:py-28 bg-background relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-gold/5 rounded-full translate-y-1/2 -translate-x-1/2" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
            අපි ගැන
          </span>
          <h2 className="section-title text-foreground">
            <span className="gold-underline">පාසල හැඳින්වීම</span>
          </h2>
          <p className="section-subtitle">
            ශ්‍රී ලංකාවේ ප්‍රචීන අගනුවර අනුරාධපුරයේ හදවතේ පිහිටි ප්‍රමුඛතම ජාතික පාසල
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          {/* Image */}
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-br from-primary to-primary-dark rounded-3xl transform rotate-3 group-hover:rotate-6 transition-transform duration-500" />
            <img 
              src={schoolGate} 
              alt="වලිසිංහ හරිශ්චන්ද්‍ර මහා විද්‍යාලය - ප්‍රධාන දොරටුව" 
              className="relative rounded-3xl shadow-elegant w-full h-auto object-cover"
            />
            {/* Logo Overlay */}
            <div className="absolute -bottom-8 -right-8 w-28 h-28">
              <img 
                src={schoolLogo} 
                alt="වලිසිංහ හරිශ්චන්ද්‍ර මහා විද්‍යාලය" 
                className="w-full h-full rounded-full shadow-xl bg-white object-contain"
              />
            </div>
          </div>

          {/* Text Content */}
          <div className="space-y-6">
            <h3 className="text-2xl md:text-3xl font-bold text-foreground">
              වලිසිංහ හරිශ්චන්ද්‍ර මහා විද්‍යාලය
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              ශ්‍රී ලංකාවේ ප්‍රචීන අගනුවර වූ අනුරාධපුරයේ හදවතේ පිහිටි වලිසිංහ හරිශ්චන්ද්‍ර මහා විද්‍යාලය, 
              නුවරගම් පාළාත - නැගෙනහිර කොට්ඨාශයට අයත් වන අතර, උතුරු මැද පළාතේ අනුරාධපුර 
              අධ්‍යාපන කලාපයට අයත් වේ.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              1955 සැප්තැම්බර් 07 වන දින ශ්‍රී ලාංකික ඉතිහාසයේ ප්‍රකට චරිතයක් වූ දිවංගත වලිසිංහ 
              හරිශ්චන්ද්‍ර තුමාගේ නාමයෙන් ආරම්භ කරන ලදී. ජයතිලක මහතාගේ නායකත්වය යටතේ 
              ගුරුවරුන් 03 දෙනෙකු සමඟ සිසුන් 42 දෙනෙකුට තනි ගොඩනැගිල්ලක සේවය ආරම්භ විය.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              වර්තමානයේ D. රණසිංහ මහතාගේ විදුහල්පති තනතුර යටතේ ගුරුවරුන් 205 දෙනෙකුගෙන් 
              සමන්විත කාර්ය මණ්ඩලයක් සේවය කරන අතර, සිසුන් 5647 දෙනෙකුට අධ්‍යාපනය ලබා දෙමින් 
              පළාත් අධ්‍යාපන දෙපාර්තමේන්තුවට අයත් විශාලතම හා ජනප්‍රියම පාසල් අතර ඉදිරියෙන්ම සිටී.
            </p>
            
            {/* Education Streams */}
            <div className="pt-4">
              <h4 className="text-lg font-semibold text-foreground mb-3 flex items-center gap-2">
                <BookOpen className="w-5 h-5 text-primary" />
                අධ්‍යාපන ධාරා
              </h4>
              <div className="flex flex-wrap gap-3">
                {streams.map((stream, index) => (
                  <span 
                    key={index}
                    className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium"
                  >
                    {stream}
                  </span>
                ))}
              </div>
            </div>

            {/* Languages */}
            <div className="pt-2">
              <h4 className="text-lg font-semibold text-foreground mb-3 flex items-center gap-2">
                <Globe className="w-5 h-5 text-gold" />
                භාෂා අධ්‍යාපනය
              </h4>
              <div className="flex flex-wrap gap-2">
                {languages.map((language, index) => (
                  <span 
                    key={index}
                    className="px-3 py-1.5 bg-gold/10 text-gold rounded-full text-xs font-medium"
                  >
                    {language}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Statistics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <div 
              key={index}
              className="glass-card rounded-2xl p-6 text-center card-hover group"
            >
              <div className="w-14 h-14 mx-auto mb-4 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                <stat.icon className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors" />
              </div>
              <p className="text-3xl md:text-4xl font-bold text-primary mb-2">{stat.value}</p>
              <p className="text-muted-foreground font-medium">{stat.label}</p>
              <p className="text-xs text-muted-foreground/70">{stat.labelEn}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;