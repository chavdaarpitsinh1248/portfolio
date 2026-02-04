function Footer() {
  return (
    <footer className="bg-gray-950 text-gray-400 px-8 py-6">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4">
        <p>
          © {new Date().getFullYear()} Arpit. All rights reserved.
        </p>

        <div className="flex gap-6">
          <a
            href="https://github.com/chavdaarpitsinh1248"
            target="_blank"
            rel="noreferrer"
            className="hover:text-white"
          >
            GitHub
          </a>
          <a
            href="www.linkedin.com/in/chavda-arpitsinh"
            target="_blank"
            rel="noreferrer"
            className="hover:text-white"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
