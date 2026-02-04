function About() {
  return (
    <section className="bg-gray-950 text-gray-300 px-8 py-24">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-white mb-8">
          About Me
        </h2>

        <div className="grid md:grid-cols-2 gap-10">
          {/* Left: Text */}
          <div className="space-y-4">
            <p>
              I’m a computer engineer with a strong interest in
              building practical, data-driven software systems. I enjoy working
              across the stack—from designing machine learning models to
              building backend APIs and user-facing interfaces.
            </p>

            <p>
              My primary focus is on Python-based development, especially
              machine learning, data analysis, and backend frameworks like
              Django and FastAPI. I care deeply about understanding how things
              work under the hood rather than relying only on high-level
              abstractions.
            </p>

            <p>
              Recently, I’ve been combining this backend and ML experience with
              modern frontend tools like React to create complete, deployable
              applications.
            </p>
          </div>

          {/* Right: Highlights */}
          <div className="bg-gray-900 p-6 rounded-lg">
            <ul className="space-y-3">
              <li>• Python & Machine Learning</li>
              <li>• Django, FastAPI, REST APIs</li>
              <li>• Data Analysis (NumPy, Pandas)</li>
              <li>• React & Modern Frontend</li>
              <li>• Git, GitHub & Clean Project Structure</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
