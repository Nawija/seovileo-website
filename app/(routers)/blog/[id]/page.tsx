// [id]/page.tsx (strona pojedynczego posta)
import "@/app/(routers)/blog/[id]/article.css"
import Breadcrumbs from "@/components/BreadCrumb";
import { getAllBlogSlugs, getBlogBySlug } from "@/lib/mdx";
import { MDXRemote } from "next-mdx-remote/rsc";
import Image from "next/image";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  const slugs = getAllBlogSlugs();
  return slugs.map((slug) => ({
    id: slug,
  }));
}

export default async function BlogPost({ params }: { params: { id: string } }) {
  const slug = params.id;
  const post = getBlogBySlug(slug);

  if (!post) {
    notFound();
  }

  const breadcrumbs = [
    {
      title: "Blog",
      href: "/blog",
    },
    {
      title: post.title.slice(0, 30),
      href: "#",
    },
  ];

  return (
    <>
      <Breadcrumbs breadcrumbs={breadcrumbs} />
      {post.img && (
        <div className="absolute top-0 left-0 -z-10 h-full w-full rounded-2xl opacity-15">
          <Image
            src={post.img.url}
            alt={post.title}
            fill
            className="object-cover"
          />
        <div className="absolute inset-0 w-full h-full bg-gradient-to-t from-main to-transparent" />
        </div>
      )}
      <div className="anim-opacity mx-auto flex h-full w-full flex-grow flex-col items-center justify-start px-6 py-20 text-center">
        <h1 className="text-main max-w-screen-xl text-4xl sm:px-2 lg:text-6xl">
          {post.title}
        </h1>
        <div className="flex-c mt-2 mb-12 space-x-4">
          <small>{new Date(post.date).toLocaleDateString("pl-PL")}</small>
          <small>Udostępnij</small>
        </div>

        {post.img && (
          <div className="border-main rounded-xl relative mb-6 h-80 w-full overflow-hidden border sm:w-3/4 lg:mb-12 lg:h-[500px] xl:w-1/2">
            <Image
              src={post.img.url}
              alt={post.title}
              fill
              className="object-cover"
            />
          </div>
        )}

        <article className="border-main rounded-xl bg-main article-content text-start max-w-screen-lg border p-3 transition-colors duration-300 sm:p-4 lg:p-6">
          <MDXRemote source={post.content || ""} />
        </article>
      </div>
    </>
  );
}
