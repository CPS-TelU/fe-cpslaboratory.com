import { poppins } from "@/styles/font";
import FlipCard from "../ui/FlipCard";
import { AssistCardPracticum } from "./Asisstants/Practicum";
import { AssistCardResearch } from "./Asisstants/Research";
import ModalComponent from "./Asisstants/ShowAllAss";
import { ScrollingCards } from "@/components/ui/scrolling";

export function AssistCard() {
  return (
    
      <section className={`py-8 mt-[5px] lg:mt-[100px] ${poppins.className}`}>
        <h2 className="gradient-text-about text-[10vw] lg:text-[4vw] md:text-[9vw] sm:text-[40px] font-semibold mb-8 text-center px-4 sm:px-8 lg:px-16">
          Our Assistants  
        </h2>
        <div className="relative flex items-center justify-center mb-12 mt-[-45px]">
            <div className="flex-grow border-t-4 border-gray-400 max-w-[200px] lg:max-w-[400px] md:max-w-[400px]" />
            <span className="text-gray-700 text-2xl text-center lg:text-4xl md:text-3xl font-medium px-28">2024/2025</span>
            <div className="flex-grow border-t-4 border-gray-400 max-w-[200px] lg:max-w-[400px] md:max-w-[400px]" />
        </div>
        <ScrollingCards direction="left" speed="slow">
            <AssistCardPracticum/>
        </ScrollingCards>
          <ScrollingCards direction="right" speed="slow" className="relative transform translate-x-1/4">
            <AssistCardResearch/>
          </ScrollingCards>
          
      </section>
    
  );
}
