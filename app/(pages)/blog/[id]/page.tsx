import "@/app/(pages)/blog/[id]/article.css";
import Breadcrumbs from "@/components/BreadCrumb";
import { getAllBlogSlugs, getBlogBySlug } from "@/lib/mdx";
import { MDXRemote } from "next-mdx-remote/rsc";
import Image from "next/image";
import { notFound } from "next/navigation";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const awaitedParams = await Promise.resolve(params);
  const { id } = awaitedParams;
  const blog = getBlogBySlug(id);

  if (!blog) {
    notFound();
  }

  return {
    title: `${blog.title} | Seovileo`,
    description: blog.desc?.substring(0, 160),
    openGraph: {
      title: `${blog.title} | Seovileo`,
      description: blog.desc?.substring(0, 160),
      images: [
        {
          url: blog.img,
          width: 1200,
          height: 630,
          alt: blog.title,
        },
      ],
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: `${blog.title} | Seovileo`,
      description: blog.desc?.substring(0, 160),
      images: [blog.img],
    },
  };
}

export async function generateStaticParams() {
  const slugs = getAllBlogSlugs();
  return slugs.map((slug) => ({
    id: slug,
  }));
}

export default async function BlogPost({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const awaitedParams = await Promise.resolve(params);
  const { id } = awaitedParams;
  const post = getBlogBySlug(id);

  if (!post) {
    notFound();
  }

  return (
    <>
      <div className="mx-auto max-w-screen-2xl">
        <Breadcrumbs />
      </div>
      {post.img && (
        <div className="absolute top-0 left-0 -z-10 h-full w-full rounded-2xl opacity-15">
          <Image
            src={post.img.url}
            alt={post.title}
            fill
            className="object-cover"
          />
          <div className="from-main absolute inset-0 h-full w-full bg-gradient-to-t to-transparent" />
        </div>
      )}
      <div className="anim-opacity mx-auto flex h-full w-full flex-grow flex-col items-center justify-start pt-20 text-center">
        <h1 className="text-main max-w-5xl text-4xl sm:px-2 lg:text-6xl">
          {post.title}
        </h1>
        <div className="flex-c mt-2 mb-12 space-x-4">
          <small>{new Date(post.date).toLocaleDateString("pl-PL")}</small>
          <small>Udostępnij</small>
        </div>

        {post.img && (
          <div className="border-main relative mb-6 h-80 w-full overflow-hidden rounded-xl border sm:w-3/4 lg:mb-12 lg:h-[500px] xl:w-1/2">
            <Image
              src={post.img.url}
              alt={post.title}
              fill
              className="object-cover"
            />
          </div>
        )}

        <div className="border-main bg-main pt-8 flex w-full items-center justify-center rounded-lg">
          <article className="article-content max-w-screen-lg p-1 text-start transition-colors duration-300 sm:p-4 lg:p-6">
            <MDXRemote source={post.content || ""} />
          </article>
        </div>

        <p className="mt-20">Odzwiedz nas na FB i Ingtagram</p>
      </div>
    </>
  );
}
