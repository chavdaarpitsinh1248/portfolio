function ContactSection() {
  return (
    <section className="px-6 sm:px-8 py-24 bg-white dark:bg-gray-900">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
          Get In Touch
        </h2>

        <p className="text-gray-600 dark:text-gray-400 mb-10">
          I’m currently open to internships, entry-level roles, and
          collaboration opportunities. If you have a question or just want to
          connect, feel free to reach out.
        </p>

        <a
          href="mailto:chavdaarpitsinh1248@gmail.com"
          className="inline-block px-8 py-4 border border-blue-600 dark:border-blue-400 text-blue-600 dark:text-blue-400 hover:bg-blue-600 hover:text-white dark:hover:bg-blue-400 dark:hover:text-black transition"
        >
          Say Hello
        </a>
      </div>
    </section>
  );
}

export default ContactSection;
