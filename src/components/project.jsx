import ecommerce from '../assets/ecommerce.jpg'
import kfc2 from '../assets/kfc2.jpg'
import law from '../assets/law.jpeg'

export default function Project() {
  return (
    <section id="projects"className="flex flex-col py-16 bg-primary text-white">
      <div className="w-full text-center mb-10">
        <h1 className="text-4xl font-bold">Projects</h1>
      </div>

      <div className="w-full flex flex-wrap justify-center gap-12 px-10">
        
        {/* Project 1 */}
        <div className="relative group">
          <img
            className="h-[350px] w-[350px] object-cover rounded-xl shadow-lg"
            src={ecommerce}
            alt="E-Commerce"
          />
           <div className="absolute inset-0 bg-black/70 flex flex-col items-center justify-center gap-4 px-4 opacity-0 group-hover:opacity-100 transition duration-300 rounded-xl">
            <span className="text-lg font-bold">E-Commerce Platform for Agriculture Products</span>
            <span className="text-lg text-center">
               A responsive web app built using <span className='font-bold'>PHP</span> to connect farmers with consumers.
            </span>
            </div>
        </div>

        {/* Project 2 */}
        <div className="relative group">
          <img
            className="h-[350px] w-[350px] object-cover rounded-xl shadow-lg"
            src={kfc2}
            alt="Online Shopping"
          />
            <div className="absolute inset-0 bg-black/70 flex flex-col items-center justify-center gap-4 px-4 opacity-0 group-hover:opacity-100 transition duration-300 rounded-xl">
            <span className="text-lg font-bold whitespace-nowrap">KFC Clone App</span>
            <span className="text-lg text-center">
               A responsive KFC Clone Web Application built to replicate the look and feel of KFC’s online food ordering platform using React JS.
            </span>
            </div>
        </div>

        {/* Project 3 */}
        <div className="relative group">
          <img
            className="h-[350px] w-[350px] object-cover rounded-xl shadow-lg"
            src={law}
            alt="Project Management"
          />
           <div className="absolute inset-0 bg-black/70 flex flex-col items-center justify-center gap-4 px-4 opacity-0 group-hover:opacity-100 transition duration-300 rounded-xl">
            <span className="text-lg font-bold whitespace-nowrap">Lawyer Online Appointment App</span>
            <span className="text-lg text-center">
              A responsive web application developed with <span className='font-bold'>React JS</span> that allows clients to easily schedule appointments with lawyers online.
            </span>
            </div>
        </div>
      </div>
    </section>
  )
}
