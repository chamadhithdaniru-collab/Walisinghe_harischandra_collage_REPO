import { Calendar, Milestone, Trophy, Star, Users, Building } from 'lucide-react';
import schoolBanner from '@/assets/school-banner.png';

const HistorySection = () => {
  const timeline = [
    {
      year: '1955',
      title: 'පාසල ආරම්භය',
      description: 'සැප්තැම්බර් 07 වන දින K.D. ජයතිලක මහතාගේ නායකත්වයෙන් ගුරුවරුන් 03 දෙනෙකු සමඟ සිසුන් 42 දෙනෙකු සහිතව ආරම්භ විය. අනුරාධපුර මධ්‍යම විද්‍යාලයේ ප්‍රාථමික පාසලක් ලෙස තනි ගොඩනැගිල්ලක ආරම්භ කරන ලදී.',
      icon: Calendar,
    },
    {
      year: '1960s-70s',
      title: 'වර්ධනය හා ප්‍රසාරණය',
      description: 'නව ගොඩනැගිලි සහ පහසුකම් එකතු කර ගනිමින් සිසුන් සංඛ්‍යාව ක්‍රමයෙන් වර්ධනය විය. විවිධ විෂය ධාරා හඳුන්වා දීම ආරම්භ කරන ලදී.',
      icon: Building,
    },
    {
      year: '1981',
      title: 'ස්වාධීන පාසලක් ලෙස',
      description: 'ස්වාධීන පාසලක් බවට පරිවර්තනය විය. බ්‍රහ්මචාරී වලිසිංහ තුමා මෙහි ආරම්භයේ පුරෝගාමී පුද්ගලයා විය.',
      icon: Milestone,
    },
    {
      year: 'වර්තමානය',
      title: 'ප්‍රමුඛ ජාතික පාසල',
      description: 'D. රණසිංහ මහතාගේ විදුහල්පති තනතුර යටතේ ගුරුවරුන් 205 දෙනෙකුගෙන් සමන්විත කාර්ය මණ්ඩලයක් සේවය කරයි. සිසුන් 5647 දෙනෙකුට සේවය කරන අනුරාධපුරයේ ප්‍රමුඛතම පාසලක් බවට පත්ව ඇත.',
      icon: Star,
    },
  ];

  return (
    <section id="history" className="py-20 md:py-28 bg-gradient-to-b from-secondary/50 to-background relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }} />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
            අපගේ ඉතිහාසය
          </span>
          <h2 className="section-title text-foreground">
            <span className="gold-underline">පාසල් ඉතිහාසය</span>
          </h2>
          <p className="section-subtitle">
            1955 සිට අද දක්වා වූ ගමන් මඟ - Honour to the Legacy
          </p>
        </div>

        {/* Hero Banner */}
        <div className="max-w-5xl mx-auto mb-20">
          <div className="relative rounded-3xl overflow-hidden group">
            <img 
              src={schoolBanner} 
              alt="Walisinghe Harischandra College - A Re-memorable Cinematic Experience" 
              className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>
        </div>

        {/* Harischandra Tribute */}
        <div className="max-w-4xl mx-auto mb-20">
          <div className="glass-card rounded-3xl p-8 md:p-12 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-40 h-40 bg-gold/10 rounded-full -translate-y-1/2 translate-x-1/2" />
            
            <div className="relative z-10">
              <h3 className="text-2xl md:text-3xl font-bold text-primary mb-6">
                බ්‍රහ්මචාරී වලිසිංහ හරිශ්චන්ද්‍ර
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                ශ්‍රී ලාංකික බෞද්ධ පුනරුදයේ මහෝපකාරී පුරෝගාමියෙකු වූ බ්‍රහ්මචාරී වලිසිංහ හරිශ්චන්ද්‍ර 
                තුමා (1876-1913) ජාතික වීරයෙකු ලෙස සැලකේ. බෞද්ධ ධර්මය හා සිංහල සංස්කෘතිය 
                ආරක්ෂා කිරීම සඳහා ඔහු කළ මහඟු සේවය අපූර්වය.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                ශ්‍රී ලාංකික ඉතිහාසයේ ප්‍රකට චරිතයක් වූ දිවංගත වලිසිංහ හරිශ්චන්ද්‍ර තුමාගේ නාමයෙන් 
                1955 සැප්තැම්බර් 07 වන දින මෙම විද්‍යාලය ආරම්භ කරන ලදී.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                ඔහුගේ නාමය ගෞරවයෙන් භාවිත කරමින් අනුරාධපුරයේ මෙම ජාතික පාසල පිහිටුවන 
                ලද්දේ ඔහුගේ අධ්‍යාපන සහ සංස්කෘතික දැක්ම ඉදිරියට ගෙනයාම සඳහාය.
              </p>

              {/* Quote */}
              <div className="mt-6 p-4 bg-primary/5 rounded-xl border-l-4 border-gold">
                <p className="text-primary font-medium italic">
                  "Creating leaders with knowledge, positive attitudes, skills, interpersonal relationships, 
                  valuable practices and leadership qualities who can triumph the challenges and to provide 
                  required assistance to the principal, the teachers and the parents in efficient school 
                  management and in monitoring the students."
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-gold to-primary" />

          <div className="space-y-12">
            {timeline.map((item, index) => (
              <div 
                key={index}
                className={`flex flex-col md:flex-row items-center gap-8 ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Content */}
                <div className={`flex-1 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                  <div className="glass-card rounded-2xl p-6 card-hover inline-block max-w-lg">
                    <div className={`flex items-center gap-4 mb-4 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-primary-dark flex items-center justify-center">
                        <item.icon className="w-6 h-6 text-primary-foreground" />
                      </div>
                      <span className="text-2xl font-bold text-gold">{item.year}</span>
                    </div>
                    <h4 className="text-xl font-bold text-foreground mb-2">{item.title}</h4>
                    <p className="text-muted-foreground">{item.description}</p>
                  </div>
                </div>

                {/* Center Dot */}
                <div className="hidden md:flex w-6 h-6 rounded-full bg-gold border-4 border-background shadow-gold z-10" />

                {/* Empty Space */}
                <div className="flex-1 hidden md:block" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HistorySection;