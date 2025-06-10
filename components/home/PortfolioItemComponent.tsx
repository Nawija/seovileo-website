"use client";

import { PortfolioItem } from "@/types";
import Image from "next/image";
import Link from "next/link";

interface PortfolioItemComponentProps {
  item: PortfolioItem;
}

const PortfolioItemComponent: React.FC<PortfolioItemComponentProps> = ({
  item,
}) => {
  const { id, url, label, desc } = item;

  return (
    <Link
      key={label}
      className="bg-main border-second rounded-lg border-2 transition duration-300 hover:scale-[1.02]"
      href={`/realizacje/${id}`}
    >
      <div className="border-second relative overflow-hidden border-b bg-gradient-to-tr from-[#161616] to-transparent p-2 lg:p-4">
        <Image
          src={url}
          alt={label}
          height={300}
          width={300}
          className="h-36 w-full object-cover lg:h-52"
        />
      </div>
      <div className="flex flex-col items-start justify-start space-y-1 p-3 pb-5 text-sm">
        <p className="text-lg text-white">{label}</p>
        <p className="line-clamp-2">{desc}</p>
      </div>
    </Link>
  );
};

export default PortfolioItemComponent;
