import React from "react";
import { Linkedin, Github } from "lucide-react";

function Footer() {
  return (
    <footer className="bg-[#1e1e24]/90 backdrop-blur-md text-gray-300 py-10 px-6 md:px-16 border-t border-emerald-700/20">
      <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-8 md:gap-0">
        {/* ==== Brand Section ==== */}
        <div className="text-center md:text-left max-w-sm">
          <h2 className="text-2xl font-semibold text-emerald-500 mb-3">
            Portfolio
          </h2>
          <p className="text-gray-400 leading-relaxed">
            Exploring technology through design, development, and innovation.
          </p>
        </div>

        {/* ==== Social Media ==== */}
        <div className="text-center md:text-right">
          <h3 className="text-lg font-semibold text-emerald-500 mb-3">
            Follow Me
          </h3>
          <div className="flex justify-center md:justify-end space-x-6">
            <a
              href="http://www.linkedin.com/in/erdivyanshuu"
              target="_blank"
              rel="noreferrer"
              className="hover:text-emerald-400 transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="https://github.com/programmERR12"
              target="_blank"
              rel="noreferrer"
              className="hover:text-emerald-400 transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110"
            >
              <Github size={24} />
            </a>
          </div>
        </div>
      </div>

      {/* ==== Divider & Bottom Text ==== */}
      <div className="border-t border-emerald-700/20 mt-10 pt-6 text-center text-gray-500 text-sm">
        © {new Date().getFullYear()}{" "}
        <span className="text-emerald-500 font-medium">Portfolio</span>. All
        rights reserved. Designed & built by{" "}
        <span className="text-emerald-400">Divyanshu Sharma</span>.
      </div>
    </footer>
  );
}

export default Footer;
