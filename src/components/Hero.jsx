import { motion } from "framer-motion";

function Hero() {
  return (
    <section className="min-h-screen flex items-center px-6 sm:px-8 bg-gray-50 dark:bg-gray-950">
      <motion.div
        className="max-w-4xl"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <p className="text-blue-600 dark:text-blue-400 text-lg mb-4">
          Hi, my name is
        </p>

        <h1 className="text-4xl sm:text-6xl font-bold text-gray-900 dark:text-white mb-4">
          Chavda Arpitsinh
        </h1>

        <h2 className="text-3xl sm:text-5xl font-bold text-gray-600 dark:text-gray-400 mb-6">
          I build data-driven and full-stack applications.
        </h2>

        <p className="text-gray-600 dark:text-gray-400 max-w-xl mb-8">
          I’m a Python-focused developer with experience in Machine Learning,
          backend development using Django, FastAPI & Flask, and modern frontend
          development with React.
        </p>

        <div className="flex flex-col sm:flex-row gap-4">
          <a
            href="/projects"
            className="px-6 py-3 border border-blue-600 dark:border-blue-400 text-blue-600 dark:text-blue-400 hover:bg-blue-600 hover:text-white dark:hover:bg-blue-400 dark:hover:text-black transition"
          >
            View Projects
          </a>

          <a
            href="/contact"
            className="px-6 py-3 border border-gray-400 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition"
          >
            Contact Me
          </a>
        </div>
      </motion.div>
    </section>
  );
}

export default Hero;
