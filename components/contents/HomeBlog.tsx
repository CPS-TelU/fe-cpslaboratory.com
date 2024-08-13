import { poppins } from "@/styles/font";
import Image from "next/image";
import Link from "next/link";

const Blog = () => {
  return (
    <section className={`py-12 text-center ${poppins.className}`}>
      <h2 className="text-3xl font-semibold gradient-text mb-8 text-left px-4 sm:px-8 lg:px-16">Blog</h2>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 px-4 sm:px-8 lg:px-16 mb-12">
        <div className="bg-white rounded-lg shadow-lg overflow-hidden p-6 flex flex-col sm:flex-row items-center sm:items-start">
          <Image
            src="/heroimage.jpg" // Gambar utama di bagian kiri
            alt="Probox"
            width={200}
            height={200}
            className="object-contain"
          />
          <div className="sm:ml-6 text-left mt-4 sm:mt-0">
            <h3 className="text-2xl font-semibold gradient-text mb-2">Probox</h3>
            <p className="text-gray-700">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur dictum mauris quis massa eleifend, at dignissim leo accumsan. Integer varius mi vel mauris tincidunt sagittis. Donec ac elit non sapien dictum faucibus.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <Image
              src="/iot.jpg" // Gambar pertama di bagian bawah
              alt="Pengabdian Masyarakat"
              width={300}
              height={200}
              className="object-cover w-full h-32 sm:h-48"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold">Pengabdian Masyarakat di SMA Negeri 1 Dayeuhkolot</h3>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <Image
              src="/softdev.jpg" // Gambar kedua di bagian bawah
              alt="Magang Asisten"
              width={300}
              height={200}
              className="object-cover w-full h-32 sm:h-48"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold">Magang Asisten Baru Cyber Physical System Laboratory 23/24</h3>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-lg overflow-hidden sm:col-span-2">
            <Image
              src="/network.jpg" // Gambar ketiga di bagian bawah
              alt="Open Recruitment"
              width={600}
              height={200}
              className="object-cover w-full h-32 sm:h-48"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold">Open Recruitment Assistant Cyber Physical System Laboratory 2022</h3>
            </div>
          </div>
        </div>
      </div>

      <Link href="/blog" className="text-xl text-red-600 underline">
        More
      </Link>
    </section>
  );
};

export default Blog;
