
import { didactGothic, poppins } from "@/styles/font";
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { px } from "framer-motion";

const DetailBlog: React.FC = () => {
  return (
    <div className={poppins.className} style={{ marginTop:'50px', color: '#333' }}>
      <article style={{ maxWidth: '800px', margin: '0 auto', padding: '20px' }}>
        <header>
          <h1 className='text-3xl font-bold'>Game Changers 2024: Perluasan Kejuaraan & Kebijakan Mobilitas Baru</h1>
          <p>28 Juli 2024 | CPS Research Group</p>
        </header>
        
        <div style={{ margin: '20px 0' }}>
          <Image 
            src="/blog-image1.jpg" 
            alt="Game Changers 2024"
            width={800}
            height={450}
            style={{ borderRadius: '8px' }}
          />
        </div>
        
        <section>
          <p>Dalam dunia yang semakin kompleks ini, menjaga barang berharga Anda tetap aman menjadi prioritas utama. Itulah mengapa kami dengan bangga mempersembahkan ProBox, sebuah inovasi terbaru dalam perlindungan barang berharga. 
            ProBox bukan hanya sekedar kotak keamanan, tetapi juga kumpulan teknologi canggih yang dirancang untuk memberikan tingkat keamanan tertinggi serta kemudahan penggunaan.</p>
            <h2>When does design come in handy? </h2>

          <p className="mt-5">While it might seem like extra work at a first glance, here are some key moments in which prototyping
              will come in handy:</p>

          <ol className="list-decimal ml-6">
              <li>. Hubungkan alat ProBox ke sumber daya listrik menggunakan adaptor, kemudian alat akan mulai mengalirkan daya ke semua komponen alat.
              </li>
              <li>ESP8266 akan memulai proses untuk menghubungkan ke jaringan WiFi yang telah diatur sebelumnya.</li>
              <li>ProBox akan berada dalam mode standby, menunggu pendeteksian kartu yang telah didaftarkan.</li>
              <li>Jika kartu tersebut didekatkan ke posisi RFID, maka sistem akan membaca kartu tersebut serta data kartu akan dibandingkan dengan database kartu yang telah terdaftar.
              </li>
          </ol>
        </section>
      </article>
      
      <section style={{ maxWidth: '800px', margin: '40px auto', padding: '20px' }}>
        <div className="gradient-text text-3xl font-semibold mt-[10px]">Our Latest Blog</div> 
        <div style={{ display: 'flex', gap: '50px', marginTop:'20px' }}>
          <Link href="/post/1">
            <div style={{ flex: 1 }}>
              <Image
                src="/probox-image.jpg" 
                alt="Related Post 1"
                width={368}
                height={405}
                style={{ borderRadius: '8px' }}
                className="w-full h-auto object-cover"
              />
              <span className="block text-gray-600 text-sm mt-4"> tanggal </span>
              <h1 className="mt-2 text-gray-800 duration-150 group-hover:text-indigo-600 font-semibold">Game Changers 2024: Perluasan Kejuaraan & Kebijakan Mobilitas Baru</h1>
              <p className="mt-2 text-[14px]">The powerful gravity waves resulting from the impact of the planets' moons â€” four in total â€” were finally resolved in 2015 when gravitational</p>
            </div>
          </Link>

          <Link href="/post/2">
            <div style={{ flex: 1 }}>
              <Image
                src="/LogoAbout.png" 
                alt="Related Post 2"
                width={368}
                height={405}
                style={{ borderRadius: '8px' }}
                className="w-full h-auto object-cover"
              />
              <span className="mt-4 block text-gray-600 text-sm"> tanggal </span>
              <h1 className="mt-2  text-gray-800 duration-150 group-hover:text-indigo-600 font-semibold">Game Changers 2024: Perluasan Kejuaraan & Kebijakan Mobilitas Baru</h1>
              <p className="mt-2 text-[14px]">I hope I remembered all the stuff that they needed to know. They're like, 'okay,' and write it in their little reading notebooks.</p>
            </div>
          </Link>

          <Link href="/post/3">
            <div style={{ flex: 1 }}>
              <Image
                src="/image.png" 
                alt="Related Post 3"
                width={368}
                height={405}
                style={{ borderRadius: '8px' }}
                className="w-full h-auto object-cover"

              />
             <span className="mt-4 block text-gray-600 text-sm"> tanggal </span>
              <h1 className="mt-2 text-gray-800 duration-150 group-hover:text-indigo-600 font-semibold">Game Changers 2024: Perluasan Kejuaraan & Kebijakan Mobilitas Baru</h1>
              <p className="mt-2 text-[14px]">According to him, â€œI'm still surprised that this has happened. But we are surprised because we are so surprised.â€More revelations.</p>
            </div>
          </Link>
        </div>
      </section>
    </div>
  );
}

export default DetailBlog;
