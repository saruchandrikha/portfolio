export default function Contact() {
  return (
    <section id="contact" className="bg-secondary py-16 px-8">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-12 text-white">
        
        {/* Left - Contact Info */}
        <div className="md:w-1/2 space-y-6">
          <h2 className="text-4xl font-bold border-b-4 border-primary-light inline-block pb-2">
            📩 Get In Touch
          </h2>
          <p className="text-lg">
            I’m always open to discussing new projects, creative ideas, or opportunities to be part of your vision. 
            Feel free to reach out using the details below or the contact form.
          </p>

          <div className="space-y-3">
            <p>📍 <strong>Location:</strong> Chennai, India</p>
            <p>📧 <strong>Email:</strong> saruchandrikha@example.com</p>
            <p>🔗 <strong>LinkedIn:</strong> 
              <a href="#" className="text-primary-light hover:underline"> linkedin.com/in/saruchandrikha</a>
            </p>
            <p>💻 <strong>GitHub:</strong> 
              <a href="#" className="text-primary-light hover:underline"> github.com/saruchandrikha</a>
            </p>
          </div>
        </div>

        {/* Right - Contact Form */}
        <div className="md:w-1/2 bg-primary p-8 rounded-2xl shadow-lg">
          <form className="space-y-6">
            <div>
              <label className="block mb-2 text-sm font-medium">Name</label>
              <input
                type="text"
                placeholder="Your Name"
                className="w-full p-3 rounded-lg text-black focus:outline-none focus:ring-2 focus:ring-primary-light"
              />
            </div>

            <div>
              <label className="block mb-2 text-sm font-medium">Email</label>
              <input
                type="email"
                placeholder="your@email.com"
                className="w-full p-3 rounded-lg text-black focus:outline-none focus:ring-2 focus:ring-primary-light"
              />
            </div>

            <div>
              <label className="block mb-2 text-sm font-medium">Message</label>
              <textarea
                rows="5"
                placeholder="Write your message..."
                className="w-full p-3 rounded-lg text-black focus:outline-none focus:ring-2 focus:ring-primary-light"
              ></textarea>
            </div>

            <button
              type="submit"
              className="bg-primary-light px-6 py-3 rounded-lg font-semibold hover:bg-primary-dark transition"
            >
              Send Message 🚀
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
