import { motion } from "framer-motion";
import techIcons from "../utils/techIcons";

function ProjectCard({ project }) {
  return (
    <motion.div
      className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg flex flex-col justify-between transition-colors"
      whileHover={{ y: -4 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <div>
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
          {project.title}
        </h3>

        <p className="text-gray-600 dark:text-gray-400 mb-4">
          {project.description}
        </p>

        {/* Tech stack */}
        <div className="flex flex-wrap gap-3 mb-6">
          {project.tech.map((tech, index) => {
            const Icon = techIcons[tech];

            return (
              <span
                key={index}
                className="flex items-center gap-2 px-3 py-1 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-sm"
              >
                {Icon && (
                  <Icon className="text-blue-600 dark:text-blue-400 text-base" />
                )}
                {tech}
              </span>
            );
          })}
        </div>
      </div>

      <div className="flex gap-4">
        <a
          href={project.github}
          target="_blank"
          rel="noreferrer"
          className="text-blue-600 dark:text-blue-400 hover:underline"
        >
          GitHub
        </a>

        {project.demo && (
          <a
            href={project.demo}
            target="_blank"
            rel="noreferrer"
            className="text-blue-600 dark:text-blue-400 hover:underline"
          >
            Live Demo
          </a>
        )}
      </div>
    </motion.div>
  );
}

export default ProjectCard;
