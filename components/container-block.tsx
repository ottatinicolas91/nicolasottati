import React from "react";
import Head from "next/head";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

export default function ContainerBlock({
  children, // Aquí se destructura children
  ...customMeta
}: {
  children: React.ReactNode;
}) {
  const meta = {
    title: "Nicolas Ottati - Developer, Event&Project Manager",
    description:
      "Welcome to my personal website, here you can find all my projects and my contact informations.",
    image: "/avatar.png",
    type: "website",
    ...customMeta,
  };

  return (
    <div>
      <Head>
        <title>{meta.title}</title>
        <meta name="robots" content="follow, index" />
        <meta content={meta.description} name="description" />
        <link rel="canonical" href={`https://yourwebsite.com`} />
        <meta property="og:type" content={meta.type} />
        <meta property="og:site_name" content="Nicolas Ottati" />
        <meta property="og:description" content={meta.description} />
        <meta property="og:title" content={meta.title} />
        <meta property="og:image" content={meta.image} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={meta.title} />
        <meta name="twitter:description" content={meta.description} />
        <meta name="twitter:image" content={meta.image} />
      </Head>
      <main className="dark:bg-gray-800 flex flex-col min-h-screen w-full">
        <Navbar />
        <div>{children}</div>
        <Footer />
      </main>
    </div>
  );
}
