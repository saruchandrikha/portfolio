import one from '../assets/one.jpg'

export default function About() {
  return (
    <section id="experience" className="flex flex-col md:flex-row bg-secondary py-12 px-8 gap-10">
      
      {/* Left Side - Experience Text */}
      <div className="md:w-3/4 flex flex-col justify-center text-white space-y-6">
        
        <h1 className="text-4xl font-bold flex items-center gap-2">
          💼 Experience
        </h1>
        
        <div className="space-y-2 ml-4">
          <h3 className="text-2xl font-bold">Software Developer</h3>
          <h3 className="text-xl font-semibold text-gray-300">
            Raspberry Info Systems, Chennai
          </h3>
          <h3 className="text-lg text-gray-400">Feb 2025 – Present</h3>
        </div>

        <ul className="ml-8 list-disc space-y-4 marker:text-primary">
          <li>
            Developed and maintained a comprehensive 
            <strong> Hotel Management System (HMS)</strong> using 
            <strong> PHP (CodeIgniter 3/4)</strong> and 
            <strong> JavaScript</strong>, supporting room booking, guest 
            management, billing, and reporting.
          </li>
          <li>
            Designed and integrated domain-specific modules to extend HMS capabilities:
            <ul className="ml-6 list-disc space-y-2 marker:text-primary">
              <li>
                <strong>Banquet Management:</strong> Event booking, package creation, guest menu planning, forecasting, and detailed revenue/occupancy reports.
              </li>
              <li>
                <strong>Cab Connect:</strong> Cab reservations, driver assignments, trip billing, and seamless integration with guest booking flows.
              </li>
              <li>
                <strong>MIS Module:</strong> Centralized reporting, revenue analysis, and business intelligence dashboards to support decision-making.
              </li>
            </ul>
          </li>
          <li>
            Improved system efficiency and scalability, enabling hotels to streamline operations 
            and enhance the guest experience.
          </li>
        </ul>
      </div>

      {/* Right Side - Image */}
      <div className="md:w-1/4 flex justify-center items-center">
        <img className="h-80 w-80 rounded-2xl shadow-lg object-cover" src={one} alt="Experience" />
      </div>
    </section>
  )
}
