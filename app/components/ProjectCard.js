import Link from "next/link";
import { IoIosLink } from "react-icons/io";
import { FaGithub } from "react-icons/fa";

export default function ProjectCard({ project }) {
  return (
    <div className="flex flex-col justify-between gap-2 h-80 rounded bg-secondary shadow shadow-2xl transition text-primary p-3 hover:bg-primary hover:text-secondary hover:border border-secondary group">
      <div className="flex flex-col gap-3 h-full border-b-2 border-primary group-hover:border-secondary">
        <p className="text-xl font-poppins">{project.name}</p>
        <p>{project.description}</p>
      </div>
      <div className="text-emphasis flex items-center justify-around text-3xl">
        <Link
          href={project.homepage || "/"}
          className="hover:text-active transition"
        >
          <IoIosLink />
        </Link>
        <Link
          href={project.html_url || "/"}
          className="hover:text-active transition"
        >
          <FaGithub />
        </Link>
      </div>
    </div>
  );
}
