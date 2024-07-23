import githubApi from "@/app/api/githubApi";
import { useEffect, useState } from "react";
import ProjectCard from "./ProjectCard";
import { Fade } from "react-awesome-reveal";
export default function Projects() {
  const [projects, setProjects] = useState([]);
  useEffect(() => {
    githubApi("AllanLandin").then((data) => setProjects(data));
  }, []);

  return (
    <article id="projectsSection" className="h-dvh">
      <h2 className="text-7xl text-center underline font-poppins mb-9">
        Projetos
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
        {projects.map((project, index) => (
          <Fade
            key={project.id + index}
            direction="up"
            delay={50 * index}
            triggerOnce
          >
            <ProjectCard key={project.id} project={project} />
          </Fade>
        ))}
      </div>
    </article>
  );
}
