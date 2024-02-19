import "./Skieletons.css";

const shimmer =
  "before:absolute before:inset-0 before:-translate-x-full before:animate-[shimmer_1.4s_infinite] before:bg-gradient-to-r before:from-transparent before:via-white/30 before:to-transparent";

export function PortfolioItemSkeleton() {
  return (
    <div className="bg-main border-second overflow-hidden rounded-lg border">
      <div className="border-second group relative overflow-hidden border-b p-2 lg:p-4">
        <div
          className={`flex-c border-main relative h-44 w-full overflow-hidden rounded-lg border bg-zinc-800 lg:h-52`}
        >
          {/* Image placeholder */}
          <span className="IronLoader"></span>
        </div>
      </div>
      <div className="flex flex-col items-start justify-start p-4">
        <div className="flex-b text-main w-full">
          <div
            className={`${shimmer} relative mb-2 h-4 w-3/4 overflow-hidden rounded-lg bg-zinc-800`}
          />
          {/* Label placeholder */}
        </div>

        <div
          className={`${shimmer} relative mb-2 h-4 w-1/2 overflow-hidden rounded-lg bg-zinc-800`}
        />
        {/* Description placeholder */}
      </div>
    </div>
  );
}
