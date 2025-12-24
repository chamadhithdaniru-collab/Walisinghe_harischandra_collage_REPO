import principalImg from '@/assets/principal.jpg';
import { Quote, Award, Users, Heart, Star } from 'lucide-react';

const PrincipalSection = () => {
  const highlights = [
    { icon: Star, text: 'ශ්‍රී ලංකාවේ හොඳම රජයේ පාසල් අතරින් එකක්' },
    { icon: Users, text: 'සිසුන් 5000කට වැඩි පිරිසකට සේවය' },
    { icon: Award, text: 'ගුරුවරුන් 215 දෙනෙකුගෙන් සමන්විත' },
    { icon: Heart, text: 'ආදී ශිෂ්‍ය සංගමයේ ක්‍රියාකාරී සහභාගීත්වය' },
  ];

  return (
    <section className="py-20 md:py-28 bg-background relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute top-0 left-1/2 w-full h-1/2 bg-gradient-to-b from-secondary/30 to-transparent -translate-x-1/2" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
            විදුහල්පති
          </span>
          <h2 className="section-title text-foreground">
            <span className="gold-underline">විදුහල්පති පණිවිඩය</span>
          </h2>
        </div>

        {/* Content */}
        <div className="max-w-6xl mx-auto">
          <div className="glass-card rounded-3xl overflow-hidden">
            <div className="grid md:grid-cols-5 gap-0">
              {/* Image */}
              <div className="md:col-span-2 relative">
                <img 
                  src={principalImg} 
                  alt="විදුහල්පති" 
                  className="w-full h-full object-cover min-h-[400px]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent md:bg-gradient-to-r" />
                <div className="absolute bottom-6 left-6 md:hidden">
                  <p className="text-primary-foreground font-bold text-xl">විදුහල්පති</p>
                  <p className="text-gold">Principal</p>
                </div>
              </div>

              {/* Message */}
              <div className="md:col-span-3 p-8 md:p-12 relative">
                <Quote className="absolute top-6 right-6 w-12 h-12 text-gold/20" />
                
                <div className="hidden md:block mb-6">
                  <p className="text-2xl font-bold text-foreground">විදුහල්පති</p>
                  <p className="text-gold font-medium">Principal</p>
                </div>

                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    වලිසිංහ හරිශ්චන්ද්‍ර ජාතික විද්‍යාලය (WHC) ශ්‍රී ලංකාවේ හොඳම රජයේ පාසල් අතරින් එකකි.
                  </p>
                  <p>
                    1956 මිශ්‍ර බෞද්ධ පාසලක් ලෙස ආරම්භ කළ දා සිට, අතීත විදුහල්පතිවරු බෞද්ධ දර්ශනයේ 
                    ඇති පොහොසත් ආචාර ධර්මයන් පෝෂණය කිරීම සහ හැඩගැස්වීම සඳහා පාසලේ දැක්ම 
                    අනුගමනය කරමින් නොපසුබට උත්සාහයක් දැරූහ.
                  </p>
                  <p>
                    ජාතියේ පොහොසත්භාවයට සුවිශේෂී සේවයක් කළ දහස් ගණන් හොඳ පුරවැසියන් සහ 
                    මහත් බුද්ධිමතුන් බිහි කිරීමට පාසලට ආඩම්බරයෙන් හැකි විය. වර්තමානයේ සිසුන් 
                    5000කට වැඩි පිරිසක් හොඳින් පුහුණු ගුරුවරුන් 215 දෙනෙකුගේ මඟ පෙන්වීම යටතේ 
                    අධ්‍යාපනය ලබති.
                  </p>
                  <p>
                    ක්‍රීඩා, ක්‍රීඩා, රංග කලා, සමාජ හා සංගම් රාශියක්, ව්‍යාපෘති සහ සිදුවීම් ඇතුළු 
                    විවිධ පාසැල් බාහිර ක්‍රියාකාරකම් සඳහා පාසල විශිෂ්ට මධ්‍යස්ථානයකි. අපගේ සිසුන් 
                    අපගේ ශක්තිය සහ ආභාෂයයි. ආදී ශිෂ්‍ය සංගමයේ සහ පාසල් සංවර්ධන සමිතියේ 
                    ක්‍රියාකාරී සහභාගීත්වය ඉතා ප්‍රශංසනීයයි.
                  </p>
                  <p className="font-semibold text-primary pt-4 text-lg">
                    අපගේ මූර්ති පදය වන <span className="text-gold">'විදු නැණ මනස පුබුදයි'</span> – 
                    'අධ්‍යාපනය මනස බැබළවයි' යන්නෙන් ඉදිරියට යාමට අපගේ ශක්තිය වන්නට 
                    සියලුම යහපත් කැමැත්තන්ට පාසල සමඟ අත්වැල් බැඳ ගන්නා ලෙස ආරාධනා කරමි.
                  </p>
                </div>

                <div className="mt-8 pt-6 border-t border-border">
                  <p className="text-foreground font-bold">D. රණසිංහ මහතා</p>
                  <p className="text-muted-foreground text-sm">
                    විදුහල්පති, වලිසිංහ හරිශ්චන්ද්‍ර මහා විද්‍යාලය, අනුරාධපුරය
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Highlights */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
            {highlights.map((item, index) => (
              <div key={index} className="flex items-center gap-3 p-4 rounded-xl bg-secondary/50 border border-border">
                <item.icon className="w-5 h-5 text-gold shrink-0" />
                <span className="text-sm text-muted-foreground">{item.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PrincipalSection;