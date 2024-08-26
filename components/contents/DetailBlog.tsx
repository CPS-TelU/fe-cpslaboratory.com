import React from "react";
import { poppins } from "@/styles/font";
import Image from "next/image";
import Link from "next/link";

interface Post {
    id: string;
    title: string;
    desc: string;
    img: string;
    date: string;
    href: string;
    content: string;
    author: string;
}

const posts: Post[] = [
  {
    id:"",
    title: "Game Changers 2024: Perluasan Kejuaraan & Kebijakan Mobilitas Baru",
    desc: "There are many creators that bring the worlds imagined by KOJIMA PRODUCTIONS to life.In our eighth installment, we interviewed our lead animator Mr. Kawata from the animation team.",
    content:"Dalam dunia yang semakin kompleks ini, menjaga barang berharga Anda tetap aman menjadi prioritas utama. Itulah mengapa kami dengan bangga mempersembahkan ProBox, sebuah inovasi terbaru dalam perlindungan barang berharga. ProBox bukan hanya sekedar kotak keamanan, tetapi juga kumpulan teknologi canggih yang dirancang untuk memberikan tingkat keamanan tertinggi serta kemudahan penggunaan.",
    author:"CPS LABORATORY",
    img: "/blog-image1.jpg",
    date: "July 28, 2024",
    href: "/post/1",
  },
  {
    id:"",
    title: "Game Changers 2024: Perluasan Kejuaraan & Kebijakan Mobilitas Baru",
    desc: "There are many creators that bring the worlds imagined by KOJIMA PRODUCTIONS to life.In our eighth installment, we interviewed our lead animator Mr. Kawata from the animation team.",
    content:"Dalam dunia yang semakin kompleks ini, menjaga barang berharga Anda tetap aman menjadi prioritas utama. Itulah mengapa kami dengan bangga mempersembahkan ProBox, sebuah inovasi terbaru dalam perlindungan barang berharga. ProBox bukan hanya sekedar kotak keamanan, tetapi juga kumpulan teknologi canggih yang dirancang untuk memberikan tingkat keamanan tertinggi serta kemudahan penggunaan.",
    author:"CPS LABORATORY",
    img: "/blog-image1.jpg",
    date: "July 28, 2024",
    href: "/post/1",
  },
  {
    id:"",
    title: "Game Changers 2024: Perluasan Kejuaraan & Kebijakan Mobilitas Baru",
    desc: "There are many creators that bring the worlds imagined by KOJIMA PRODUCTIONS to life.In our eighth installment, we interviewed our lead animator Mr. Kawata from the animation team.",
    content:"Dalam dunia yang semakin kompleks ini, menjaga barang berharga Anda tetap aman menjadi prioritas utama. Itulah mengapa kami dengan bangga mempersembahkan ProBox, sebuah inovasi terbaru dalam perlindungan barang berharga. ProBox bukan hanya sekedar kotak keamanan, tetapi juga kumpulan teknologi canggih yang dirancang untuk memberikan tingkat keamanan tertinggi serta kemudahan penggunaan.",
    author:"CPS LABORATORY",
    img: "/blog-image1.jpg",
    date: "July 28, 2024",
    href: "/post/1",
  },
  {
    id:"",
    title: "Game Changers 2024: Perluasan Kejuaraan & Kebijakan Mobilitas Baru",
    desc: "There are many creators that bring the worlds imagined by KOJIMA PRODUCTIONS to life.In our eighth installment, we interviewed our lead animator Mr. Kawata from the animation team.",
    content:"Dalam dunia yang semakin kompleks ini, menjaga barang berharga Anda tetap aman menjadi prioritas utama. Itulah mengapa kami dengan bangga mempersembahkan ProBox, sebuah inovasi terbaru dalam perlindungan barang berharga. ProBox bukan hanya sekedar kotak keamanan, tetapi juga kumpulan teknologi canggih yang dirancang untuk memberikan tingkat keamanan tertinggi serta kemudahan penggunaan.",
    author:"CPS LABORATORY",
    img: "/blog-image1.jpg",
    date: "July 28, 2024",
    href: "/post/1",
  },
];

const DetailBlog: React.FC = () => {
  return (
    <section className={` ${poppins.className}`} style={{marginTop:'50px', color: '#333' }}>
      <article style={{ maxWidth: '1100px', margin: '0 auto', padding: '20px' }}>
        <header>
          <h1 className="text-3xl font-bold">
            {posts[0].title}
          </h1>
          <p>{posts[0].date} | {posts[0].author}</p>
        </header>
        <div style={{ margin: '20px 0' }}>
          <Image 
            src={posts[0].img} 
            alt={posts[0].title}
            width={1100}
            height={700}
            style={{ borderRadius: '8px' }}
          />
        </div>
        <section>
          <p>{posts[0].desc}</p>
            <br/>
          <h2>When does design come in handy?</h2>
          <p>While it might seem like extra work at a first glance, here are some key moments in which prototyping will come in handy:</p>
          <ol>
            <li><strong>Usability testing</strong>. Does your user know how to exit out of screens? Can they follow your intended user journey and buy something from the site you’ve designed? By running a usability test, you’ll be able to see how users will interact with your design once it’s live;</li>
            <li><strong>Involving stakeholders</strong>. Need to check if your GDPR consent boxes are displaying properly? Pass your prototype to your data protection team and they can test it for real;</li>
            <li><strong>Impressing a client</strong>. Prototypes can help explain or even sell your idea by providing your client with a hands-on experience;</li>
            <li><strong>Communicating your vision</strong>. By using an interactive medium to preview and test design elements, designers and developers can understand each other — and the project — better.</li>
          </ol>
        </section>
      </article>
      <section style={{ maxWidth: '1200px', margin: '40px auto', padding: '20px' }}>
        <div className="gradient-text text-3xl font-semibold mt-[10px]">Related Posts</div>
        <div style={{ display: 'flex', gap: '50px', marginTop: '20px' }}>
            {posts.slice(0, 3).map((relatedPost) => (
                <Link href={`/posts/${relatedPost.id}`} key={relatedPost.id}>
                    <div style={{ flex: 1 }}>
                        <Image
                            src={relatedPost.img}
                            alt={relatedPost.title}
                            width={400}
                            height={240}
                            style={{ borderRadius: '8px' }}
                            className="w-full h-auto object-cover w-[400px] h-[240px]"
                        />
                        <span className="block text-gray-600 text-sm mt-4">{new Date(relatedPost.date).toLocaleDateString()} || {relatedPost.author}</span>
                        <h1 className="mt-2 text-gray-800 duration-150 group-hover:text-indigo-600 font-semibold">{relatedPost.title}</h1>
                        <p className="mt-2 text-[14px]">{relatedPost.desc}</p>
                    </div>
                </Link>
            ))}
        </div>
        </section>


    </section>
  );
};

export default DetailBlog;
