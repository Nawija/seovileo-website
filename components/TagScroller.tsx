import clsx from "clsx";
import { ChevronLeft, ChevronRight } from "lucide-react"; // lub dowolne ikony
import { useRef } from "react";

export default function TagScroller({ tags }: { tags: string[] }) {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scrollBy = (offset: number) => {
    scrollRef.current?.scrollBy({ left: offset, behavior: "smooth" });
  };

  return (
    <div className="absolute right-0 bottom-3 left-0 flex items-center gap-2 px-4">
      {/* Strzałka w lewo */}
      <button
        onClick={() => scrollBy(-150)}
        className="rounded-full bg-gray-700 p-1 text-white hover:bg-gray-600"
      >
        <ChevronLeft size={20} />
      </button>

      {/* Scrollowany kontener tagów */}
      <div
        ref={scrollRef}
        className="hide-scrollbar flex w-full snap-x snap-mandatory gap-2 overflow-x-auto"
      >
        {tags.map((tag) => (
          <p
            key={tag}
            className={clsx(
              "w-max shrink-0 snap-start rounded-full px-3 py-1 text-xs text-white",
              {
                "bg-red-500": tag === "strony",
                "bg-pink-400": tag === "marketing",
                "bg-blue-400": tag === "technologia",
                "bg-violet-500": tag === "popularne",
                "bg-gray-500": ![
                  "strony",
                  "marketing",
                  "technologia",
                  "popularne",
                ].includes(tag),
              },
            )}
          >
            {tag}
          </p>
        ))}
      </div>

      {/* Strzałka w prawo */}
      <button
        onClick={() => scrollBy(150)}
        className="rounded-full bg-gray-700 p-1 text-white hover:bg-gray-600"
      >
        <ChevronRight size={20} />
      </button>
    </div>
  );
}
