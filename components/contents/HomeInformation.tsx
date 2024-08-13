import { poppins } from "@/styles/font";
import Image from "next/image";
import Link from "next/link";

const Information = () => {
  return (
    <section className={`py-12 text-center ${poppins.className}`}>
      <h2 className="text-3xl font-semibold gradient-text mb-4">What We Do</h2>
      <p className="text-lg text-gray-700 mb-2">
        In Cyber Physical System Laboratory
      </p>
      <p className="text-lg text-gray-700 mb-10">
        we focus on many things such as:
      </p>

      <div className="mb-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-3">
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <Image
            src="/network.jpg"
            alt="Network"
            width={400}
            height={300}
            className="object-cover w-full h-48"
          />
          <div className="p-4">
            <h3 className="text-2xl font-semibold gradient-text">Network</h3>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <Image
            src="/softdev.jpg"
            alt="Software Development"
            width={400}
            height={300}
            className="object-cover w-full h-48"
          />
          <div className="p-4">
            <h3 className="text-2xl font-semibold gradient-text">Software Dev</h3>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <Image
            src="/iot.jpg"
            alt="IOT"
            width={400}
            height={300}
            className="object-cover w-full h-48"
          />
          <div className="p-4">
            <h3 className="text-2xl font-semibold gradient-text">IOT</h3>
          </div>
        </div>
      </div>
      <Link href="/about" className="text-xl text-red-600 underline">
        More
      </Link>
    </section>
  );
};

export default Information;
