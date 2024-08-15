import { poppins } from "@/styles/font";
import Image from "next/image";
import Link from "next/link";

const Information = () => {
  return (
    <section
      className={`py-16 sm:py-12 lg:py-20 xl:py-24 text-center ${poppins.className}`}
    >
      <h2 className="text-[40px] md:text-[45px] lg:text-[50px] font-semibold gradient-text mb-2">
        What We Do
      </h2>
      <div className="sm:hidden">
        <p className="text-xs text-gray-700 mb-2">
          In Cyber Physical System Laboratory
        </p>
        <p className="text-xs text-gray-700 mb-10">
          we focus on many things such as:
        </p>
      </div>

      <p className="hidden sm:block text-[10px] sm:text-[13px] md:text-[15px] lg:text-lg text-gray-700 mb-10">
        In Cyber Physical System Laboratory, we focus on many things such as:
      </p>

      <div className="mb-8 grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-3 gap-8 px-3">
        <div className="rounded-lg shadow-lg overflow-hidden w-60 sm:w-44 md:w-52 lg:w-64 xl:w-72">
          <Image
            src="/Network.png"
            alt="Network"
            width={300}
            height={300}
            className="object-cover"
          />
        </div>

        <div className="rounded-lg shadow-lg overflow-hidden w-60 sm:w-44 md:w-52 lg:w-64 xl:w-72">
          <Image
            src="/SoftwareDev.png"
            alt="Software Development"
            width={300}
            height={300}
            className="object-cover"
          />
        </div>

        <div className="rounded-lg shadow-lg overflow-hidden w-60 sm:w-44 md:w-52 lg:w-64 xl:w-72">
          <Image
            src="/IOT.png"
            alt="IOT"
            width={300}
            height={300}
            className="object-cover"
          />
        </div>
      </div>
      <Link href="/about" className="text-xl text-red-600 underline">
        More
      </Link>
    </section>
  );
};

export default Information;
