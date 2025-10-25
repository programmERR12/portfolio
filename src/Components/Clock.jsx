import { useState, useEffect} from "react";

function Clock() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    // Component mount hone ke baad ye code run hoga
    const timer = setInterval(() => setTime(new Date()), 1000);

    // Cleanup function
    return () => clearInterval(timer); // Component unmount hone par interval band ho jaaye
  }, []);

  return( 
  <div>{time.toLocaleTimeString()}</div>
)}

export default Clock


