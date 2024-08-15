import Hero from "@/components/contents/Hero";
import Information from "@/components/contents/Information";
import SectionContainer from "@/components/utils/SectionsContainer";

export default function Home() {
  return (
    <main className="relative flex flex-col items-center justify-center px-4 pt-20 z-[999]">
      <HomeLayout />
    </main>
  );
}
