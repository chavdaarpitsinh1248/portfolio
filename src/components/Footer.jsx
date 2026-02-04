function Footer() {
  return (
    <footer className="px-6 sm:px-8 py-6 bg-gray-50 dark:bg-gray-950 border-t border-gray-200 dark:border-gray-800">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4">
        <p className="text-gray-600 dark:text-gray-400">
          © {new Date().getFullYear()} Arpit. All rights reserved.
        </p>

        <div className="flex gap-6">
          <a
            href="https://github.com/chavdaarpitsinh1248"
            target="_blank"
            rel="noreferrer"
            className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
          >
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/chavda-arpitsinh"
            target="_blank"
            rel="noreferrer"
            className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
