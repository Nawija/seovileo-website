// lib/mdx.ts
import fs from "fs";
import matter from "gray-matter";
import path from "path";

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  date: string;
  tags: string[];
  img?: {
    url: string;
  };
  content?: string;
  desc?: string;
}

const BLOG_PATH = path.join(process.cwd(), "content/blog");

export function getAllBlogSlugs() {
  if (!fs.existsSync(BLOG_PATH)) {
    return [];
  }

  const files = fs.readdirSync(BLOG_PATH);
  return files
    .filter((file) => file.endsWith(".mdx"))
    .map((file) => file.replace(/\.mdx$/, ""));
}

export function getBlogBySlug(slug: string): BlogPost | null {
  const fullPath = path.join(BLOG_PATH, `${slug}.mdx`);

  if (!fs.existsSync(fullPath)) {
    return null;
  }

  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  return {
    id: slug,
    slug,
    title: data.title || "",
    date: data.date || new Date().toISOString(),
    tags: data.tags || [],
    img: data.img ? { url: data.img } : undefined,
    content,
    desc: data.desc,
  };
}

export function getAllBlogPosts(): BlogPost[] {
  const slugs = getAllBlogSlugs();
  const posts = slugs
    .map((slug) => getBlogBySlug(slug))
    .filter((post): post is BlogPost => post !== null)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  return posts;
}
