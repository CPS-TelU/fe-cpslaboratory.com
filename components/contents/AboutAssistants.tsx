import { poppins } from "@/styles/font";
import FlipCard from "../ui/FlipCard";
import { ScrollingCards } from "../ui/scrolling";
import { FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";

export function AssistCard() {
  const flipCardData = [
    {
      university: "Telkom University",
      major:"S1 Teknik Telekomunikasi",
      image: "/photoAssistant.jpg",
      rotate: "y" as const,
      name: "Raihan Putra Doang",
      kode: "RHN",
      division:"Research Assistant",
      role: "coordinator",
      instagram:"https://www.instagram.com/hoka.csa/",
      linkedIn:"https://www.linkedin.com/in/hoka-cristian-7620851b0/",
      gitHub:"https://github.com/hokacristian",
    },
    {
      university: "Telkom University",
      major:"S1 Teknik Telekomunikasi",
      image: "/photoAssistant.jpg",
      rotate: "y" as const,
      name: "Hoka Christian Son",
      kode: "OKA",
      division:"Research Assistant",
      role: "coordinator",
      instagram:"https://www.instagram.com/hoka.csa/",
      linkedIn:"https://www.linkedin.com/in/hoka-cristian-7620851b0/",
      gitHub:"https://github.com/hokacristian",
    },
    {
      university: "Telkom University",
      major:"S1 Teknik Telekomunikasi",
      image: "/photoAssistant.jpg",
      rotate: "y" as const,
      name: "Mitchell Affandi Harahap",
      kode: "MMA",
      division:"Research Assistant",
      role: "Public Relation",
      instagram:"https://www.instagram.com/hoka.csa/",
      linkedIn:"https://www.linkedin.com/in/hoka-cristian-7620851b0/",
      gitHub:"https://github.com/hokacristian",
    },
    {
        university: "Telkom University",
        major:"S1 Teknik Telekomunikasi",
        image: "/photoAssistant.jpg",
        rotate: "y" as const,
        name: "Athalah Rafif Irsyach Sarbrani",
        kode: "ATX",
        division:"Research Assistant",
        role: "Public Relation",
        instagram:"https://www.instagram.com/hoka.csa/",
        linkedIn:"https://www.linkedin.com/in/hoka-cristian-7620851b0/",
        gitHub:"https://github.com/hokacristian",
      },
      {
        university: "Telkom University",
        major:"S1 Teknik Telekomunikasi",
        image: "/photoAssistant.jpg",
        rotate: "y" as const,
        name: "Adam Wisnu Pradana",
        kode: "AWP",
        division:"Research Assistant",
        role: "Public Relation",
        instagram:"https://www.instagram.com/hoka.csa/",
        linkedIn:"https://www.linkedin.com/in/hoka-cristian-7620851b0/",
        gitHub:"https://github.com/hokacristian",
      },
  ];

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
        <ScrollingCards direction="left" speed="slow">
        <div className="flex gap-4">
          {flipCardData.map((card, index) => (
            <FlipCard
              key={index}
              image={card.image}
              kode={card.kode}
              name={card.name}
              university={card.university}
              major={card.major}
              rotate={card.rotate}
              division="Research Division"
              role={card.role}
              instagram={card.instagram}
              linkedIn={card.linkedIn}
              gitHub={card.gitHub}
              className=""
            />
          ))}
        </div>
        </ScrollingCards>
          <div className="mt-24 mb-12"/>
        <ScrollingCards direction="right" speed="slow">
        <div className="flex gap-4 ">
          {flipCardData.map((card, index) => (
            <FlipCard
              key={index}
              image={card.image}
              kode={card.kode}
              name={card.name}
              university={card.university}
              major={card.major}
              rotate={card.rotate}
              division="Practicum Division"
              role={card.role}
              instagram={card.instagram}
              linkedIn={card.linkedIn}
              gitHub={card.gitHub}
              className=""
            />
          ))}
        </div>
        </ScrollingCards>
      </section>
    
  );
}
