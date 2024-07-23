import Link from "next/link";
import { Fade } from "react-awesome-reveal";

export default function Hero() {
  return (
    <Fade delay={100} duration={1500} direction="down">
      <article className="flex flex-col items-center gap-7 text-3xl">
        <div className="text-center font-poppins flex flex-col gap-2">
          <h1 className="">Oi! Me chamo</h1>
          <h1 className="text-8xl text-emphasis">Allan Landin</h1>
          <p className="text-secondary">e sou Desenvolvedor FrontEnd</p>
        </div>
        <div className="flex gap-2">
          <Link
            href="/"
            className="p-3 border border-emphasis rounded text-emphasis font-poppins hover:bg-active hover:text-secondary"
          >
            Trabalhe comigo
          </Link>
          <Link
            href="/"
            className="p-3 border border-emphasis rounded text-emphasis font-poppins hover:bg-active hover:text-secondary"
          >
            Sobre mim
          </Link>
        </div>
      </article>
    </Fade>
  );
}
