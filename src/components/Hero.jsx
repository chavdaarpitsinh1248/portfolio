import { motion } from "framer-motion";
import { FiDownload } from "react-icons/fi";

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
          Python Developer building scalable backend systems and machine learning solutions. Experienced in FastAPI, Django, and React, with a strong focus on clean architecture, data-driven applications, and production-ready code.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4">
          {/* View Projects */}
          <a
            href="/projects"
            className="px-6 py-3 border border-blue-600 dark:border-blue-400 text-blue-600 dark:text-blue-400 hover:bg-blue-600 hover:text-white dark:hover:bg-blue-400 dark:hover:text-black transition"
          >
            View Projects
          </a>

          {/* Download Resume */}
          <a
            href="/resume.pdf"
            download
            className="inline-flex items-center gap-2 px-6 py-3 border border-gray-400 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition"
          >
            <FiDownload />
            Download Resume
          </a>
        </div>
      </motion.div>
    </section>
  );
}

export default Hero;
