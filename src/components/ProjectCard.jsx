function ProjectCard({ project }) {
  return (
    <div className="bg-gray-800 p-6 rounded-lg flex flex-col justify-between">
      <div>
        <h3 className="text-xl font-semibold text-white mb-3">
          {project.title}
        </h3>

        <p className="text-gray-400 mb-4">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2 mb-6">
          {project.tech.map((tech, index) => (
            <span
              key={index}
              className="text-sm px-3 py-1 bg-gray-700 rounded-full"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      <div className="flex gap-4">
        <a
          href={project.github}
          target="_blank"
          rel="noreferrer"
          className="text-blue-400 hover:underline"
        >
          GitHub
        </a>

        {project.demo && (
          <a
            href={project.demo}
            target="_blank"
            rel="noreferrer"
            className="text-blue-400 hover:underline"
          >
            Live Demo
          </a>
        )}
      </div>
    </div>
  );
}

export default ProjectCard;
