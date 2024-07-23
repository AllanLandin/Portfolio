import Link from "next/link";
import { Fade } from "react-awesome-reveal";
import { FaArrowDown } from "react-icons/fa";
import { FaDownload } from "react-icons/fa6";

export default function About() {
  return (
    <Fade direction="left" delay={1200} triggerOnce>
      <article className="p-5 font-roboto leading-relaxed rounded text-2xl flex flex-col justify-around h-dvh">
        <h3 className="text-7xl text-center underline font-poppins">
          Sobre mim
        </h3>
        <section className="flex flex-col gap-5">
          <p className="text-5xl text-emphasis underline font-poppins">
            Quem eu sou?
          </p>
          <p>
            Eu sou{" "}
            <span className="text-emphasis font-bold ">
              Allan Estevam Landin
            </span>
            , estudante de análise e desenvolvimento de sistemas pela USF
            (Universidade São Francisco) e desenvolvedor FrontEnd. Gosto de{" "}
            <span className="text-emphasis font-bold">
              criar soluções criativas
            </span>
            , sobretudo aquelas que impactam as vidas das pessoas de modo
            positivo, desde desenvolvendo o design de uma página até criando
            leis de negócio para aplicação.
          </p>
        </section>
        <section className="flex flex-col gap-5">
          <p className="text-5xl text-emphasis underline font-poppins">
            Experiência Profissional
          </p>
          <p>
            Venho da área administrativa e busco pela minha primeira
            oportunidade na área de desenvolvimento. Já trabalhei em empresas
            grandes e pequenas, possibilitando o aprendizado de como uma empresa
            funciona. No mais, crio projetos pessoais para ganhar conhecimento e
            experiência na área de TI.
          </p>
        </section>

        <a
          className="py-3 px-5 bg-emphasis rounded-full hover:bg-active transition flex items-center justify-center self-center flex items-center gap-3"
          href=""
          download=""
        >
          <div>Download CV</div> <FaDownload />
        </a>

        <Link
          href="/#projectsSection"
          className="self-center animate-bounce hover:bg-active bg-emphasis rounded-full p-3 mt-5"
        >
          <FaArrowDown className="text-secondary" />
        </Link>
      </article>
    </Fade>
  );
}
