import { useState, useEffect } from "react";
import two from "../assets/two.jpg";
import { AiOutlineTwitter, AiOutlineLinkedin, AiOutlineGithub } from "react-icons/ai";

export default function Body() {
  const text = "Software Developer";
  const [displayedText, setDisplayedText] = useState("");
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    if (charIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + text[charIndex]);
        setCharIndex((prev) => prev + 1);
      }, 150); // typing speed
      return () => clearTimeout(timeout);
    }
  }, [charIndex]);

  return (
    <section id="home" className="flex flex-col md:flex-row px-5 py-34 bg-secondary justify-center h-full">
      <div className="md:w-1/2">
        <h1 className="text-white text-6xl">
          Hi,<br /> I'm Saru Chandrikha
        </h1>
        <p className="text-4xl text-cyan-400">{displayedText}</p>

        <div className="flex py-10">
            <a href="#" className="pr-5 text-cyan-500 hover:text-white">
                <AiOutlineTwitter size={40} />
            </a>
            <a href="https://www.linkedin.com/in/saru-chandrikha" target="_blank" rel="noopener noreferrer" className="pr-5 text-cyan-500 hover:text-white">
            <AiOutlineLinkedin size={40} />
            </a>

            <a href="#" className="text-cyan-500 hover:text-white">
                <AiOutlineGithub size={40} />
            </a>
        </div>
      </div>
      <img className="md:w-1/3 h-80" src={two} alt="developer" />
    </section>
  );
}
