import { useState } from "react";
import Clock from "./Clock";
import { Link } from "react-router-dom";

function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50">
      <nav className="w-[90%] md:w-[80%] mx-auto mt-3 h-14 flex items-center justify-between px-6 md:px-12 backdrop-blur-lg bg-white/10 border border-white/10 shadow-lg rounded-b-full transition-all duration-300">
        {/* ==== Left: Clock ==== */}
        <div className="text-xl md:text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500">
          <Clock />
        </div>

        {/* ==== Desktop Menu ==== */}
        <ul className="hidden md:flex space-x-8 text-lg text-white">
          <li className="hover:text-green-400 transition duration-300 cursor-pointer">
            <Link to="/">Home</Link>
          </li>
          <li className="hover:text-green-400 transition duration-300 cursor-pointer">
            <Link to="projects">Projects</Link>
          </li>
          <li className="hover:text-green-400 transition duration-300 cursor-pointer">
            <Link to="skills">Skills</Link>
          </li>
        </ul>

        {/* ==== Hamburger for Mobile ==== */}
        <div
          className="md:hidden text-white cursor-pointer hover:text-green-400"
          onClick={toggleMenu}
        >
          {menuOpen ? "✕" : "☰"}
        </div>
      </nav>

      {/* ==== Mobile Menu ==== */}
      {menuOpen && (
        <ul className="md:hidden bg-black/70 text-white flex flex-col text-center space-y-4 py-4">
          <li onClick={() => setMenuOpen(false)} className="hover:text-green-400">
            <Link to="/">Home</Link>
          </li>
          <li onClick={() => setMenuOpen(false)} className="hover:text-green-400">
            <Link to="projects">Projects</Link>
          </li>
          <li onClick={() => setMenuOpen(false)} className="hover:text-green-400">
            <Link to="skills">Skills</Link>
          </li>
        </ul>
      )}
    </header>
  );
}

export default Nav;
