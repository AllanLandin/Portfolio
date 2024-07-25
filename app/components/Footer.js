import { FaSquareGithub } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="py-9 h-80 bg-emphasis rounded-t-3xl w-full p-3 text-center font-poppins flex flex-col gap-3">
      <p>
        Criado por{" "}
        <a
          href="https://github.com/AllanLandin"
          target="_blank"
          className="hover:text-active underline"
        >
          Allan Landin
        </a>{" "}
        - 2024 - Todos os direitos reservados.
      </p>
      <div className="flex gap-3 justify-center text-4xl">
        <a href="https://github.com/AllanLandin" target="_blank">
          <FaSquareGithub className="hover:text-primary transition hover:cursor-pointer hover:scale-110" />
        </a>
        <a href="https://www.linkedin.com/in/allan-landin/" target="_blank">
          <FaLinkedin className="hover:text-primary transition hover:cursor-pointer hover:scale-110" />
        </a>
      </div>
    </footer>
  );
}
