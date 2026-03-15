import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import AboutSection from "@/components/AboutSection";
import ProjectGallery from "@/components/ProjectGallery";
import FeaturedProject from "@/components/FeaturedProject";
import ImageShowcase from "@/components/ImageShowcase";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <AboutSection />
      <ProjectGallery />
      <FeaturedProject />
      <ImageShowcase />
      <Footer />
    </div>
  );
};

export default Index;
