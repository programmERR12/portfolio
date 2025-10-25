
import HeroSection from "./HeroSection"
import Projects from "../../pages/Projects";
import Skills from "../../pages/Skills";

import Footer from "./Footer";
import Nav from './Nav'
import { Route, Routes } from "react-router-dom";

function Home() {
 

  return (
    <div>
      <div className="bg-[#1e1e24]  w-f h-20">
            <Nav  ></Nav>
      </div>
      
    <div>

         <Routes>
      <Route path="/" element={<HeroSection ></HeroSection>} />
      <Route path="/projects" element={<Projects />} />
       <Route path="/skills" element={<Skills />} />
    </Routes>

    </div>
    
    






      <Footer></Footer>
    </div>

  );
}

export default Home;

