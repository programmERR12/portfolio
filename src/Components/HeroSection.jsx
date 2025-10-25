import React from "react";
import HireMeBtn from "./HireMeBtn";



function HeroSection() {
  return (
    <>
      {/* ==== Hero Section ==== */}
      <section className="bg-[#1e1e24] min-h-screen flex items-center justify-center px-6 md:px-16 text-white pb-10 md:pb-16">
        <div className="flex flex-col md:flex-row items-center justify-between w-full max-w-6xl gap-10">
          {/* ==== Left Text ==== */}
          <div className="space-y-5 text-center md:text-left">
            <p className="text-sm uppercase tracking-[0.25em] text-gray-400 font-light">
              CS Engineer
            </p>

            <p className="text-2xl md:text-3xl font-medium">Hello, I'm</p>

            <h1 className="text-5xl md:text-6xl font-extrabold bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400 bg-clip-text text-transparent drop-shadow-md">
              Divyanshu Sharma
            </h1>

            <p className="text-gray-300 max-w-lg leading-relaxed mx-auto md:mx-0">
              I’m a passionate Full Stack Developer focused on building clean,
              responsive, and user-friendly web applications using{" "}
              <span className="text-emerald-400">React</span>,{" "}
              <span className="text-teal-400">Tailwind CSS</span>, and{" "}
              <span className="text-cyan-400">JavaScript</span>. I aim to create
              digital experiences that are visually appealing and technically
              strong.
            </p>

            <div className="pt-4">
              <HireMeBtn />
            </div>
          </div>

          {/* ==== Radar section ==== */}
          <div className="relative">
            <div >


              <div class="loader">
                <span></span>

                <div id="dot-1" class="dot"></div>
                <div id="dot-2" class="dot"></div>
                <div id="dot-3" class="dot"></div>
                <div id="dot-4" class="dot"></div>
                <div id="dot-5" class="dot"></div>
              </div>


            </div>

            {/* Glowing ring animation */}
            <div className="absolute inset-0 rounded-full border-[3px] border-emerald-400 animate-pulse blur-sm"></div>
          </div>
        </div>
      </section>


    </>
  );
}

export default HeroSection;
