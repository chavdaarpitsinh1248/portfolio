import techIcons from "../utils/techIcons";

function SkillItem({ name }) {
  const Icon = techIcons[name];

  return (
    <li className="flex items-center gap-3 text-gray-700 dark:text-gray-300">
      {Icon && (
        <Icon className="text-blue-600 dark:text-blue-400 text-xl" />
      )}
      <span>{name}</span>
    </li>
  );
}

function Skills() {
  return (
    <section className="px-6 sm:px-8 py-24 bg-gray-50 dark:bg-gray-950">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-12">
          Skills
        </h2>

        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3">
          {/* Languages */}
          <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
              Languages
            </h3>
            <ul className="space-y-3">
              {["Python", "JavaScript", "TypeScript", "PHP", "SQL"].map(
                (skill) => (
                  <SkillItem key={skill} name={skill} />
                )
              )}
            </ul>
          </div>

          {/* Machine Learning & Data */}
          <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
              Machine Learning & Data
            </h3>
            <ul className="space-y-3">
              {["NumPy", "Pandas"].map((skill) => (
                <SkillItem key={skill} name={skill} />
              ))}
              <li className="text-gray-700 dark:text-gray-300">
                Model Evaluation (R², MSE)
              </li>
              <li className="text-gray-700 dark:text-gray-300">
                Linear & Multivariate Regression
              </li>
            </ul>
          </div>

          {/* Backend */}
          <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
              Backend
            </h3>
            <ul className="space-y-3">
              {["Django", "FastAPI", "Flask"].map((skill) => (
                <SkillItem key={skill} name={skill} />
              ))}
              <li className="text-gray-700 dark:text-gray-300">
                REST APIs
              </li>
              <li className="text-gray-700 dark:text-gray-300">
                Authentication & CRUD
              </li>
            </ul>
          </div>

          {/* Frontend */}
          <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
              Frontend
            </h3>
            <ul className="space-y-3">
              {["React", "Tailwind CSS"].map((skill) => (
                <SkillItem key={skill} name={skill} />
              ))}
              <li className="text-gray-700 dark:text-gray-300">
                React Router
              </li>
              <li className="text-gray-700 dark:text-gray-300">
                HTML & CSS
              </li>
            </ul>
          </div>

          {/* Tools */}
          <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
              Tools
            </h3>
            <ul className="space-y-3">
              {["Git", "GitHub", "Linux", "PostgreSQL", "MySQL"].map(
                (skill) => (
                  <SkillItem key={skill} name={skill} />
                )
              )}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
