import React from "react";
import { LayoutGrid } from "../ui/layout-grid";

const AboutGallery = () => {
  const cards = [
    {
      id: 1,
      content: (
        <div>
          <h2 className="text-white text-xl">Cyber Academy</h2>
        </div>
      ),
      className: "col-span-1",
      thumbnail: "/iot.jpg", // Replace with your image paths
    },
    {
      id: 2,
      content: (
        <div>
          <h2 className="text-white text-xl">Cyber Academy</h2>
        </div>
      ),
      className: "col-span-1",
      thumbnail: "/heroimage.jpg",
    },
    {
      id: 3,
      content: (
        <div>
          <h2 className="text-white text-xl">Cyber Academy</h2>
        </div>
      ),
      className: "col-span-1",
      thumbnail: "/heroimage.jpg",
    },
    {
      id: 4,
      content: (
        <div>
          <h2 className="text-white text-xl">Cyber Academy</h2>
        </div>
      ),
      className: "col-span-1",
      thumbnail: "/heroimage.jpg",
    },
    {
      id: 5,
      content: (
        <div>
          <h2 className="text-white text-xl">Cyber Academy</h2>
        </div>
      ),
      className: "col-span-1",
      thumbnail: "/heroimage.jpg",
    },
    {
      id: 6,
      content: (
        <div>
          <h2 className="text-white text-xl">Cyber Academy</h2>
        </div>
      ),
      className: "col-span-1",
      thumbnail: "/heroimage.jpg",
    },
    {
      id: 7,
      content: (
        <div>
          <h2 className="text-white text-xl">Cyber Academy</h2>
        </div>
      ),
      className: "col-span-1",
      thumbnail: "/heroimage.jpg",
    },
    {
      id: 8,
      content: (
        <div>
          <h2 className="text-white text-xl">Cyber Academy</h2>
        </div>
      ),
      className: "col-span-1",
      thumbnail: "/heroimage.jpg",
    },
  ];

  return (
    <section className="w-full h-full p-10 max-w-7xl mx-auto">
      <LayoutGrid cards={cards} />
    </section>
  );
};

export default AboutGallery;
