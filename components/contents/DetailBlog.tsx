
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

          <p>While it might seem like extra work at a first glance, here are some key moments in which prototyping
              will come in handy:</p>

          <ol>
              <li><strong>Usability testing</strong>. Does your user know how to exit out of screens? Can they
                  follow your intended user journey and buy something from the site you’ve designed? By running a
                  usability test, you’ll be able to see how users will interact with your design once it’s live;
              </li>
              <li><strong>Involving stakeholders</strong>. Need to check if your GDPR consent boxes are displaying
                  properly? Pass your prototype to your data protection team and they can test it for real;</li>
              <li><strong>Impressing a client</strong>. Prototypes can help explain or even sell your idea by
                  providing your client with a hands-on experience;</li>
              <li><strong>Communicating your vision</strong>. By using an interactive medium to preview and test
                  design elements, designers and developers can understand each other — and the project — better.
              </li>
          </ol>
        </section>
      </article>
      
      <section style={{ maxWidth: '800px', margin: '40px auto', padding: '20px' }}>
        <div className="gradient-text text-3xl font-semibold">Our Latest Blog</div> 
        <div style={{ display: 'flex', gap: '20px' }}>
          <Link href="/post/1">
            <div style={{ flex: 1 }}>
              <Image
                src="/images/related-post-1.png" 
                alt="Related Post 1"
                width={250}
                height={140}
                style={{ borderRadius: '8px' }}
              />
              <p>Game Changers 2024: Perluasan Kejuaraan & Kebijakan Mobilitas Baru</p>
            </div>
          </Link>

          <Link href="/post/2">
            <div style={{ flex: 1 }}>
              <Image
                src="/images/related-post-2.png" 
                alt="Related Post 2"
                width={250}
                height={140}
                style={{ borderRadius: '8px' }}
              />
              <p>Game Changers 2024: Perluasan Kejuaraan & Kebijakan Mobilitas Baru</p>
            </div>
          </Link>

          <Link href="/post/3">
            <div style={{ flex: 1 }}>
              <Image
                src="/images/related-post-3.png" 
                alt="Related Post 3"
                width={250}
                height={140}
                style={{ borderRadius: '8px' }}
              />
              <p>Game Changers 2024: Perluasan Kejuaraan & Kebijakan Mobilitas Baru</p>
            </div>
          </Link>
        </div>
      </section>
    </div>
  );
}

export default DetailBlog;
