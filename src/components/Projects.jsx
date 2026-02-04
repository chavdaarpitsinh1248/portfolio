import projects from "../data/projects";
import ProjectCard from "./ProjectCard";

function Projects() {
  return (
    <section className="bg-gray-950 text-gray-300 px-8 py-24">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-white mb-12">
          Projects
        </h2>

        <div className="grid sm:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
