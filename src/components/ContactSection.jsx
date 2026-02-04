function ContactSection() {
  return (
    <section className="bg-gray-900 text-gray-300 px-8 py-24">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-white mb-6">
          Get In Touch
        </h2>

        <p className="text-gray-400 mb-10">
          I’m currently open to internships, entry-level roles, and
          collaboration opportunities. If you have a question or just want to
          connect, feel free to reach out.
        </p>

        <a
          href="mailto:chavdaarpitsinh1248@gmail.com"
          className="inline-block px-8 py-4 border border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-black transition"
        >
          Say Hello
        </a>
      </div>
    </section>
  );
}

export default ContactSection;
