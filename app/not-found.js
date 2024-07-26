import Link from "next/link";
import Image from "next/image";

export default function NotFound() {
  return (
    <div className="h-dvh w-vh bg-slate-300 flex flex-col items-center justify-center gap-3 bg-primary">
      <img
        src="/images/notFound.png"
        height={2000 / 3}
        width={2000 / 3}
        alt="not found image"
      ></img>
      <p className="text-3xl font-poppins">Página não encontrada!</p>
      <Link
        href="/"
        className="rounded  bg-slate-500 p-2 text-white hover:scale-105 transition hover:bg-slate-600"
      >
        Volte a tela inicial
      </Link>
    </div>
  );
}
