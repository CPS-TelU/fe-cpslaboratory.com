import AboutHero from "@/components/contents/AboutHero";
import Hero from "@/components/contents/Hero";

export default function Home() {
  return (
    <main className="relative flex flex-col items-center justify-center px-4 !z-[999] pt-8 sm:pt-8 lg:pt-36">
      <AboutHero />
    </main>
  );
}
