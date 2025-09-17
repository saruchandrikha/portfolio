import one from '../assets/one.jpg'

export default function About() {
  return (
    <section id="about" className="flex flex-col md:flex-row items-center bg-primary py-16 px-8 gap-10">
      
      {/* Left Side - Image */}
      <div className="md:w-1/2 flex justify-center">
        <img 
          className="h-80 w-80 rounded-2xl shadow-lg object-cover" 
          src={one} 
          alt="About Me" 
        />
      </div>

      {/* Right Side - Text */}
      <div className="md:w-1/2 text-white space-y-4">
        <h1 className="text-4xl font-bold mb-4 border-b-4 border-primary-light inline-block pb-2">
          About Me
        </h1>

        <p>
          Hi, I’m <span className="font-semibold">Saru Chandrikha</span>, a passionate 
          <strong> Software Developer</strong> with a strong focus on building 
          modern, user-friendly, and scalable applications.
        </p>

        <p>
          I enjoy turning ideas into reality through clean code and creative design. 
          Over the years, I’ve gained experience in 
          <span className="font-semibold"> Php, CodeIgniter, React, Laravel, Node.js, SQL, and TailwindCSS</span>. 
          I’m always eager to learn new technologies to stay ahead in this fast-evolving field.
        </p>

        <p>
          Beyond coding, I value <strong>collaboration, problem-solving, and continuous growth</strong>. 
          I believe in writing code that not only works but also makes life easier for the people who use it.
        </p>

        <p>
          I’m excited to contribute my skills to meaningful projects and grow with innovative teams. 🚀
        </p>
      </div>
    </section>
  )
}
