import { Fade, Zoom } from "react-awesome-reveal";

export default function About() {
  return (
    <Zoom>
      <article className="p-5 font-roboto leading-relaxed rounded text-2xl flex flex-col gap-5">
        <h3 className="text-7xl text-center underline">Sobre mim</h3>
        <section className="flex flex-col gap-5">
          <p className="text-5xl text-emphasis underline">Quem eu sou?</p>
          <p>
            Eu sou{" "}
            <span className="text-emphasis font-bold">
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
          <p className="text-5xl text-emphasis underline">
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
          className="py-3 px-5 bg-emphasis rounded-full hover:bg-active transition flex items-center justify-center self-center"
          href=""
          download=""
        >
          Download CV
        </a>
      </article>
    </Zoom>
  );
}
