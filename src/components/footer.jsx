import { FaHandPointUp } from "react-icons/fa"; 

export default function Footer() {
  return (
    <footer className="bg-black text-gray-300 py-6 flex flex-col items-center justify-center">
      
      {/* Social Icon */}
      <a 
        href="#home" 
        target="_blank" 
        rel="noopener noreferrer" 
        className="w-12 h-12 flex items-center justify-center rounded-full border border-gray-400 hover:bg-cyan-500 hover:text-white transition-colors"
      >
        <FaHandPointUp  size={28} />
      </a>

      {/* Copyright */}
      <p className="mt-4 text-sm">
        &copy; {new Date().getFullYear()} All Rights Reserved
      </p>
    </footer>
  );
}
