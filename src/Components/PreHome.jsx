import TypesEffect from "./TypesEffect";
// import { Link } from "react-router-dom";

function PreHome({ SetIsClick, isClick }) {
  console.log("start btn ke page pr",isClick)
  function toggleHandler() {
    SetIsClick(!isClick);
  }

  return (
    <div className="relative h-screen overflow-hidden">
      {/* ==== Hero Section ==== */}
      <div className="bg-[#1e1e24] min-h-screen text-white text-4xl md:text-5xl lg:text-5xl flex flex-col md:flex-row justify-center items-center gap-2 px-4 md:px-0 text-center md:text-left">
        <span>Trust Me, I'm an</span>
        <TypesEffect />
      </div>

      {/* ==== START Button ==== */}
      <div className="absolute bottom-10 md:bottom-12 w-full flex justify-center">

      
<button onClick={toggleHandler}
  className="relative cursor-pointer py-4 px-8 text-center font-barlow inline-flex justify-center text-base uppercase text-white rounded-lg border-solid transition-transform duration-300 ease-in-out group outline-offset-4 focus:outline focus:outline-white focus:outline-offset-4 overflow-hidden"
>
  <span className="relative z-20">START</span>

  <span
    className="absolute left-[-75%] top-0 h-full w-[50%] bg-white/20 rotate-12 z-10 blur-lg group-hover:left-[125%] transition-all duration-1000 ease-in-out"
  ></span>

  <span
    className="w-1/2 drop-shadow-3xl transition-all duration-300 block border-[#D4EDF9] absolute h-[20%] rounded-tl-lg border-l-2 border-t-2 top-0 left-0"
  ></span>
  <span
    className="w-1/2 drop-shadow-3xl transition-all duration-300 block border-[#D4EDF9] absolute group-hover:h-[90%] h-[60%] rounded-tr-lg border-r-2 border-t-2 top-0 right-0"
  ></span>
  <span
    className="w-1/2 drop-shadow-3xl transition-all duration-300 block border-[#D4EDF9] absolute h-[60%] group-hover:h-[90%] rounded-bl-lg border-l-2 border-b-2 left-0 bottom-0"
  ></span>
  <span
    className="w-1/2 drop-shadow-3xl transition-all duration-300 block border-[#D4EDF9] absolute h-[20%] rounded-br-lg border-r-2 border-b-2 right-0 bottom-0"
  ></span>
</button>



      </div>
    </div>
  );
}

export default PreHome;
