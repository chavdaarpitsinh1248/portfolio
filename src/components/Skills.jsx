function Skills() {
  return (
    <section className="bg-gray-900 text-gray-300 px-8 py-24">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-white mb-12">
          Skills
        </h2>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
          {/* Languages */}
          <div className="bg-gray-800 p-6 rounded-lg">
            <h3 className="text-xl font-semibold text-white mb-4">
              Languages
            </h3>
            <ul className="space-y-2">
              <li>Python</li>
              <li>JavaScript</li>
              <li>TypeScript</li>
              <li>PHP</li>
              <li>SQL</li>
            </ul>
          </div>

          {/* Machine Learning & Data */}
          <div className="bg-gray-800 p-6 rounded-lg">
            <h3 className="text-xl font-semibold text-white mb-4">
              Machine Learning & Data
            </h3>
            <ul className="space-y-2">
              <li>NumPy</li>
              <li>Pandas</li>
              <li>Matplotlib</li>
              <li>Model Evaluation (R², MSE)</li>
              <li>Linear & Multivariate Regression</li>
            </ul>
          </div>

          {/* Backend */}
          <div className="bg-gray-800 p-6 rounded-lg">
            <h3 className="text-xl font-semibold text-white mb-4">
              Backend
            </h3>
            <ul className="space-y-2">
              <li>Django</li>
              <li>FastAPI</li>
              <li>REST APIs</li>
              <li>Authentication & CRUD</li>
            </ul>
          </div>

          {/* Frontend */}
          <div className="bg-gray-800 p-6 rounded-lg">
            <h3 className="text-xl font-semibold text-white mb-4">
              Frontend
            </h3>
            <ul className="space-y-2">
              <li>React</li>
              <li>React Router</li>
              <li>Tailwind CSS</li>
              <li>HTML & CSS</li>
            </ul>
          </div>

          {/* Tools */}
          <div className="bg-gray-800 p-6 rounded-lg">
            <h3 className="text-xl font-semibold text-white mb-4">
              Tools
            </h3>
            <ul className="space-y-2">
              <li>Git & GitHub</li>
              <li>VS Code</li>
              <li>Postman</li>
              <li>Linux Basics</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
