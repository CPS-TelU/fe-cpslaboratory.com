import { poppins } from "@/styles/font";
import FlipCard from "../ui/FlipCard";
import { AssistCardPracticum } from "./Asisstants/Practicum";
import { AssistCardResearch } from "./Asisstants/Research";

export function AssistCard() {
  return (
    
      <section className={`py-12 ${poppins.className}`}>
        <h2 className="text-[50px] font-semibold text-[#BA2025] mb-8 text-center px-4 sm:px-8 lg:px-16">
          Our Assistants  
        </h2>
        <div className="relative flex items-center justify-center mb-12 mt-[-45px]">
            <div className="flex-grow border-t-4 border-gray-400 max-w-[400px]" />
            <span className="text-gray-700 text-[40px] font-medium px-28">2024/2025</span>
            <div className="flex-grow border-t-4 border-gray-400 max-w-[400px]" />
        </div>
          <AssistCardPracticum/>
          <AssistCardResearch/>
      </section>
    
  );
}
