import "@/components/loader/shimmerLoader.css";

const ShimmerLoader = () => {
  return (
    <div className="shimmer-wrapper relative h-full w-full overflow-hidden bg-white/5">
      <div className="shimmer animate-shimmer absolute top-0 bottom-0 left-0 w-[90%] bg-gradient-to-r from-transparent via-white/30 to-transparent" />
    </div>
  );
};

export default ShimmerLoader;
