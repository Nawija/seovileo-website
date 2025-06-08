import { Loader } from "lucide-react";

export default function SpinerLoading() {
  return (
    <Loader
      size={20}
      className="mx-auto flex w-full animate-spin items-center justify-center text-center text-yellow-500"
    />
  );
}
