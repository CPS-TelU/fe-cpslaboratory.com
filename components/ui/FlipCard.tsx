import { cn } from "@/lib/utils";
import Link from "next/link";
import { FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";

type FlipCardProps = {
  image: string;
  kode: string;
  university: string;
  major: string;
  name?: string;
  rotate?: "x" | "y";
  className: string;
  role: string;
  division: string;
  instagram: string;
  linkedIn: string;
  gitHub: string;
};

export default function FlipCard({
  image,
  kode,
  university,
  major,
  name,
  rotate = "y",
  className,
  role,
  division,
  instagram,
  linkedIn,
  gitHub,
  ...props
}: FlipCardProps) {
  const rotationClass = {
    x: [
      "group-hover:[transform:rotateX(180deg)]",
      "[transform:rotateX(180deg)]",
    ],
    y: [
      "group-hover:[transform:rotateY(180deg)]",
      "[transform:rotateY(180deg)]",
    ],
  };
  const self = rotationClass[rotate];

  return (
    <div
      className={cn(
        "cursor-pointer group h-80 w-56 [perspective:1000px]",
        className
      )}
      {...props}
    >
      <div
        className={cn(
          "relative h-full rounded-2xl transition-all duration-500 [transform-style:preserve-3d]",
          self[0]
        )}
      >
        {/* Front */}
        <div className="absolute h-full w-full [backface-visibility:hidden]">
          <img
            src={image}
            alt="image"
            className="h-full w-full rounded-2xl object-cover"
          />
          <h2 className="absolute top-1 left-1/2 transform -translate-x-1/2 text-4xl font-bold bg-gradient-to-r from-[#BA2025] to-[#FF9D9D] bg-clip-text text-transparent ">
            {kode}
          </h2>
          <h3 className="absolute top-[40px] left-1/2 transform -translate-x-1/2 text-[11px] font-bold bg-gradient-to-r from-[#BA2025] to-[#FF9D9D] bg-clip-text text-transparent whitespace-nowrap text-center w-full">
            {division}
          </h3>

          <div className="absolute bottom-[40px] left-1/2 transform -translate-x-1/2 text-center w-full">
            <div className="inline-block bg-white bg-opacity-50 px-4 py-1 w-full">
              <span className="text-base font-bold bg-gradient-to-r from-[#BA2025] to-[#D75558] bg-clip-text text-transparent whitespace-nowrap">
                {role}
              </span>
            </div>
          </div>
        </div>

        {/* Back */}
        <div
          className={cn(
            "absolute h-full w-full rounded-2xl bg-cover bg-center p-4 text-slate-200 [backface-visibility:hidden]",
            self[1],
            "relative"
          )}
          style={{
            backgroundColor: "#ECECEC",
            outline: "1px solid rgba(0, 0, 0, 0.3)",
          }}
        >
          <div
            className="absolute inset-0 bg-center bg-no-repeat bg-contain opacity-15"
            style={{
              backgroundImage: "url('/LogoAbout.png')",
            }}
          ></div>

          <div className="flex min-h-full flex-col gap-2">
            <h1 className="text-3xl font-bold text-black">{name}</h1>
            <p className=" text-base font-medium leading-normal text-black whitespace-nowrap">
              {major}
            </p>
            <p className="py-1 text-base font-medium leading-normal text-black">
              {university}
            </p>

            <div className="absolute bottom-8 left-8 w-full flex space-x-5 cursor-pointer">
              <Link
                href={instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-700 hover:text-red-600"
              >
                <FaInstagram size={42} />
              </Link>
              <Link
                href={linkedIn}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-700 hover:text-red-600"
              >
                <FaLinkedin size={42} />
              </Link>
              <Link
                href={gitHub}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-700 hover:text-red-600"
              >
                <FaGithub size={42} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
