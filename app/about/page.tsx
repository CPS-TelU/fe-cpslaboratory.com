import React from "react";
import AboutHero from "../../components/contents/AboutHero";
import AboutGallery from "@/components/contents/AboutGallery";

const AboutPage: React.FC = () => {
  return (
    <main className="relative flex flex-col items-center justify-center px-4 !z-[999] pt-36">
      <AboutHero />
      <AboutGallery/>
    </main>
  );
};

export default AboutPage;
