"use client";

import { usePathname } from "next/navigation";
import React from "react";

const Head = () => {
  const pathname = usePathname();

  const title = pathname.slice(1).charAt(0).toUpperCase() + pathname.slice(2);

  const meta = {
    title: `Cyber Physical System Laboratory ${
      pathname === "/" ? "" : "• " + title.replace(/[-/]/g, " ")
    }`,
    description:
      "Cyber Physical System Laboratory is a lab that focuses its research on the fields of Network, Internet of Things, and Software Development.",
    keywords:
      "Cyber Physical System Laboratory, Telkom University, Cyber Physical System Laboratory Telkom University, Internet of Things, Software Engineer, Full Stack Developer, React, Next.js, Figma, Tailwind, Network, Web Development, Research Lab, Practicum Lab.",
    type: "website",
  };

  return (
    <>
      <title>{meta.title}</title>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="robots" content="follow, index" />
      <meta content={meta.description} name="description" />
      <meta name="keywords" content={meta.keywords} />
      <meta
        property="og:url"
        content={`https://cpslaboratory.com${pathname}`}
      />
      <link
        rel="canonical"
        href={`https://cpslaboratory.com${pathname}`}
      />
      <link rel="me" href="mailto:cpslaboratory@365.telkomuniversity.ac.id" />
      <meta property="og:type" content={meta.type} />
      <meta property="og:site_name" content="Cyber Physical System Laboratory" />
      <meta property="og:description" content={meta.description} />
      <meta property="og:title" content={meta.title} />
    </>
  );
};

export default Head;
