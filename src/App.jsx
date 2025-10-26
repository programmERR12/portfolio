
import PreHome from "./Components/PreHome";
import Home from "./Components/Home";
import "./App.css";
import { useState } from "react";

function App() {

  const [isClick,SetIsClick]=useState(false);

  return (
    <div>
       
      {  isClick?( <Home  isClick={isClick} SetIsClick={SetIsClick} />):(<PreHome isClick={isClick} SetIsClick={SetIsClick} />)}
         
     

    </div>
    
  );
}

export default App;

