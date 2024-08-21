import { LayoutGrid } from "@/components/ui/layout-grid";
import AboutLayout from "@/components/layouts/AboutLayout";
import {Gallery} from "@/components/contents/AboutGallery";
import { AssistCard } from "@/components/contents/AboutAssistants";


export default function About() {
    return (
      <main className="relative flex flex-col items-center justify-center px-4 pt-20 z-[999]">
        <AboutLayout />
        <Gallery/>
       <AssistCard/>
      </main>
    );
  }