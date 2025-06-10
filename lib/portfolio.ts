
import { PortfolioItem } from "@/types";
import fs from "fs";
import matter from "gray-matter";
import path from "path";


const portfolioDir = path.join(process.cwd(), "content/portfolio");

export async function getAllPortfolioItems(): Promise<PortfolioItem[]> {
  const files = fs.readdirSync(portfolioDir);
  const items = files.map((filename) => {
    const filePath = path.join(portfolioDir, filename);
    const fileContents = fs.readFileSync(filePath, "utf8");
    const { data, content } = matter(fileContents);
    return {
      ...(data as Omit<PortfolioItem, "content">),
      content,
    };
  });

  // opcjonalnie sortuj np. po dacie
  return items.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
  );
}

export async function getPortfolioBySlug(
  slug: string,
): Promise<PortfolioItem | null> {
  const filePath = path.join(portfolioDir, `${slug}.md`);
  if (!fs.existsSync(filePath)) return null;

  const fileContents = fs.readFileSync(filePath, "utf8");
  const { data, content } = matter(fileContents);

  return {
    ...(data as Omit<PortfolioItem, "content">),
    content,
  };
}
