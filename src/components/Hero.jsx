function Hero() {
  return (
    <section className="min-h-screen flex items-center bg-gray-900 text-white px-8">
      <div className="max-w-4xl">
        <p className="text-blue-400 text-lg mb-4">
          Hi, my name is
        </p>

        <h1 className="text-4xl sm:text-6xl font-bold mb-4">
          Chavda Arpitsinh
        </h1>

        <h2 className="text-3xl sm:text-5xl font-bold text-gray-400 mb-6">
          I build data-driven and full-stack applications.
        </h2>

        <p className="text-gray-400 max-w-xl mb-8">
          I’m a Python-focused developer with experience in Machine Learning,
          backend development using Django, FastAPI & Flask, and modern frontend
          development with React.
        </p>

        <div className="flex gap-4">
          <a
            href="/projects"
            className="px-6 py-3 border border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-black transition"
          >
            View Projects
          </a>

          <a
            href="/contact"
            className="px-6 py-3 border border-gray-400 text-gray-300 hover:bg-gray-300 hover:text-black transition"
          >
            Contact Me
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;
