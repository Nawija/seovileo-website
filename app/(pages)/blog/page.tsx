import { getAllBlogPosts } from "@/lib/mdx";
import { Metadata } from "next";
import dynamic from "next/dynamic";
import { Suspense } from "react";
const LogicReact = dynamic(() => import("./LogicReact"));

const pageTitle = "Seovileo - Blog";
const pageDescription =
  "Tworzymy skuteczne strony www ✅ z myślą o SEO i użytkowniku. UI/UX ✅, audyt ✅, optymalizacja - wszystko w jednym miejscu. ✅ Seovileo - sprawdź nas!";

const heroImage = "/seovileo-logo.webp";

export const metadata: Metadata = {
  alternates: {
    canonical: "https://seovileo.pl/blog",
  },
  title: pageTitle,
  description: pageDescription,
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    images: [
      {
        url: heroImage,
        width: 350,
        height: 350,
        alt: pageTitle,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: pageTitle,
    description: pageDescription,
    images: [heroImage],
  },
};

const Blog = async () => {
  const mergedData = getAllBlogPosts();

  return (
    <div className="anim-opacity">
      <Suspense fallback={<div>Ładowanie wyników...</div>}>
        <LogicReact mergedData={mergedData} />
      </Suspense>
    </div>
  );
};

export default Blog;
