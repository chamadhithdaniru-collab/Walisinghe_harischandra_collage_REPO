import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import HistorySection from '@/components/HistorySection';
import VisionSection from '@/components/VisionSection';
import AcademicsSection from '@/components/AcademicsSection';
import AchievementsSection from '@/components/AchievementsSection';
import ActivitiesSection from '@/components/ActivitiesSection';
import VideosSection from '@/components/VideosSection';
import GallerySection from '@/components/GallerySection';
import NewsSection from '@/components/NewsSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <HistorySection />
        <VisionSection />
        <AcademicsSection />
        <AchievementsSection />
        <ActivitiesSection />
        <VideosSection />
        <GallerySection />
        <NewsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
