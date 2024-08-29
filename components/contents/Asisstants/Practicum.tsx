import { poppins } from "@/styles/font";
import FlipCard from "@/components/ui/FlipCard";
import { ScrollingCards } from "@/components/ui/scrolling";
import { FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";

export function AssistCardPracticum() {
  const FlipDataPracticum = [
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
    
      <section className={`mb-24 ${poppins.className}`}>
        <ScrollingCards direction="left" speed="slow">
        <div className="flex gap-4">
          {FlipDataPracticum.map((card, index) => (
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
