import { didactGothic, poppins } from "@/styles/font";
import Image from "next/image";

const Hero = () => {
  return (
    <section className={`relative w-[1200px] h-[570px] ${poppins.className}`}>
      <div className="absolute inset-0 z-10 bg-black opacity-50 rounded-2xl"></div>
      <Image
        src="/fotocps2122.jpg"
        alt="Hero Image"
        layout="fill"
        objectFit="cover"
        className="rounded-2xl"
      />
      <div className="absolute bottom-0 left-0 z-20 flex flex-col items-start justify-start p-12 lg:p-16">
        <p className="text-white text-2xl pl-1 font-medium">Cyber Physical System Laboratory</p>
        <h1 className="text-4xl font-semibold text-white mt-2">
          <span className="gradient-text">CONNECT THE NODE,</span> CONNECT THE WORLD
        </h1>
      </div>
    </section>
  );
};

export default Hero;
