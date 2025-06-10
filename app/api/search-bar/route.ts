import { getAllPortfolioItems } from "@/lib/portfolio";
import { NextResponse } from "next/server";

export async function GET() {
  const portfolio = await getAllPortfolioItems();
  return NextResponse.json(portfolio);
}
