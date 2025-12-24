import { useState } from 'react';
import { Play, X, Heart, HandHeart, Users } from 'lucide-react';

const VideosSection = () => {
  const [selectedVideo, setSelectedVideo] = useState<number | null>(null);

  const videos = [
    {
      src: '/videos/flood-relief-1.mp4',
      title: 'ගංවතුර සහන සේවා',
      titleEn: 'Flood Relief Services',
      description: 'අයහපත් කාලගුණ තත්ත්වයෙන් පීඩාවට පත් සහෝදර සහෝදරියන්ට සහන සේවා',
      descriptionEn: 'Relief services for students affected by adverse weather conditions',
      icon: Heart,
      color: 'from-red-500 to-rose-600'
    },
    {
      src: '/videos/flood-relief-2.mp4',
      title: 'ශිෂ්‍ය සහන වැඩසටහන',
      titleEn: 'Student Relief Program',
      description: 'ගංවතුර තත්ත්වයෙන් පීඩාවට පත් ශිෂ්‍ය ශිෂ්‍යාවන්ට උපකාර',
      descriptionEn: 'Assistance to students affected by flood conditions',
      icon: HandHeart,
      color: 'from-blue-500 to-cyan-600'
    },
    {
      src: '/videos/flood-relief-3.mp4',
      title: 'සමාජ සේවා වැඩසටහන',
      titleEn: 'Community Service Program',
      description: 'අනුරාධපුර වලිසිංහ හරිශ්චන්ද්‍ර විද්‍යාලයේ සමාජ සේවා',
      descriptionEn: 'Community services by Walisinghe Harischandra College',
      icon: Users,
      color: 'from-emerald-500 to-teal-600'
    },
    {
      src: '/videos/flood-relief-4.mp4',
      title: 'ආපදා සහන සේවා',
      titleEn: 'Disaster Relief Services',
      description: 'අයහපත් කාලගුණයෙන් පීඩාවට පත්වූවන්ට සහන සේවා',
      descriptionEn: 'Relief services for those affected by natural disasters',
      icon: Heart,
      color: 'from-purple-500 to-violet-600'
    }
  ];

  return (
    <section id="videos" className="py-20 md:py-28 bg-gradient-to-b from-secondary/30 via-background to-secondary/20 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-40 right-20 w-80 h-80 bg-gold rounded-full blur-3xl" />
        <div className="absolute bottom-40 left-20 w-96 h-96 bg-primary rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
            🎬 වැඩසටහන් වීඩියෝ
          </span>
          <h2 className="section-title text-foreground">
            <span className="gold-underline">සමාජ සේවා වැඩසටහන්</span>
          </h2>
          <p className="section-subtitle max-w-3xl mx-auto">
            අපගේ පාසලේ සමාජ සේවා සහ ආපදා සහන වැඩසටහන්වල වීඩියෝ දර්ශන
          </p>
          <p className="text-muted-foreground text-sm mt-2">
            Video coverage of our school's community service and disaster relief programs
          </p>
        </div>

        {/* Videos Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {videos.map((video, index) => (
            <div 
              key={index}
              className="group relative bg-card rounded-3xl overflow-hidden shadow-elegant hover:shadow-royal transition-all duration-500 transform hover:-translate-y-2"
            >
              {/* Video Thumbnail/Player */}
              <div className="relative aspect-video bg-gradient-to-br from-primary/20 to-secondary">
                <video 
                  className="w-full h-full object-cover"
                  poster=""
                  preload="metadata"
                >
                  <source src={video.src} type="video/mp4" />
                </video>
                
                {/* Play Button Overlay */}
                <div 
                  className="absolute inset-0 flex items-center justify-center bg-gradient-to-t from-primary/80 via-primary/40 to-transparent cursor-pointer group-hover:from-primary/60 transition-all duration-300"
                  onClick={() => setSelectedVideo(index)}
                >
                  <div className="w-20 h-20 bg-gold/90 rounded-full flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <Play className="w-8 h-8 text-primary-foreground ml-1" fill="currentColor" />
                  </div>
                </div>

                {/* Badge */}
                <div className={`absolute top-4 left-4 flex items-center gap-2 px-4 py-2 bg-gradient-to-r ${video.color} rounded-full shadow-lg`}>
                  <video.icon className="w-4 h-4 text-white" />
                  <span className="text-xs font-bold text-white">{video.titleEn}</span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h4 className="font-bold text-lg text-foreground mb-2">
                  {video.title}
                </h4>
                <p className="text-sm text-muted-foreground mb-3">
                  {video.description}
                </p>
                <p className="text-xs text-muted-foreground/70">
                  {video.descriptionEn}
                </p>
                
                <button 
                  onClick={() => setSelectedVideo(index)}
                  className="mt-4 px-6 py-2 bg-primary/10 hover:bg-primary hover:text-primary-foreground text-primary rounded-full text-sm font-medium transition-all duration-300 flex items-center gap-2"
                >
                  <Play className="w-4 h-4" />
                  වීඩියෝව නරඹන්න
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Highlight Banner */}
        <div className="mt-16 bg-gradient-to-r from-primary via-primary to-primary-dark rounded-3xl p-8 md:p-12 text-center">
          <HandHeart className="w-16 h-16 mx-auto text-gold mb-4" />
          <h3 className="text-2xl md:text-3xl font-bold text-primary-foreground mb-3">
            සමාජ සේවා - එක්සත් අප
          </h3>
          <p className="text-primary-foreground/80 max-w-2xl mx-auto">
            අපගේ පාසල සමාජයට සේවය කිරීමට කැපවී සිටී. ගංවතුර හා ආපදා තත්ත්වයන්වලදී අපගේ ශිෂ්‍යයන් හා ගුරුවරුන් එක්ව සහන සේවා සපයයි.
          </p>
          <p className="text-primary-foreground/60 text-sm mt-2">
            Our school is dedicated to serving the community. During floods and disasters, our students and teachers unite to provide relief services.
          </p>
        </div>
      </div>

      {/* Video Modal */}
      {selectedVideo !== null && (
        <div 
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4 md:p-8 animate-fade-in"
          onClick={() => setSelectedVideo(null)}
        >
          <button 
            className="absolute top-4 right-4 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors z-50"
            onClick={() => setSelectedVideo(null)}
          >
            <X className="w-6 h-6 text-white" />
          </button>

          <div 
            className="relative w-full max-w-4xl max-h-[85vh] animate-scale-in"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative aspect-video bg-black rounded-2xl overflow-hidden shadow-2xl">
              <video 
                className="w-full h-full object-contain"
                controls
                autoPlay
                playsInline
              >
                <source src={videos[selectedVideo].src} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
            
            <div className="mt-4 text-center">
              <h4 className="text-xl font-bold text-white mb-1">
                {videos[selectedVideo].title}
              </h4>
              <p className="text-white/70">
                {videos[selectedVideo].titleEn}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default VideosSection;