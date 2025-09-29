const Contact = () => {
  return (
    <section id="contact" className="min-h-screen bg-dark text-light py-16">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold mb-6 text-brand">Get In Touch</h2>
        <p className="mb-8 text-light/80">
          Interested in working together? Drop me a message!
        </p>
        <a
          href="mailto:youremail@example.com"
          className="px-6 py-3 bg-brand text-light rounded-xl shadow hover:bg-brand-dark transition"
        >
          Say Hello
        </a>
      </div>
    </section>
  )
}

export default Contact
