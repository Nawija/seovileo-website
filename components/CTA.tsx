import Link from "next/link";
import { MultiColorBtn } from "./ui/buttons/MultiColorBtn";

export default function CTA({
  title,
  titleBtn,
  actionLink,
  actionBtn,
}: {
  title: string;
  titleBtn: string;
  actionLink?: string;
  actionBtn?: () => void;
}) {
  return (
    <div className="border-main flex h-full w-full flex-col items-center justify-center space-y-6 mt-12 rounded-lg border bg-white/5 p-12">
      <h2 className="text-xl text-white uppercase tracking-widest">{title}</h2>
      {actionLink && (
        <Link href={actionLink}>
          <MultiColorBtn>{titleBtn}</MultiColorBtn>
        </Link>
      )}
      {actionBtn && (
        <MultiColorBtn onClick={actionBtn}>{titleBtn}</MultiColorBtn>
      )}
    </div>
  );
}
