import React from 'react'
import { ReactTyped } from "react-typed";
function TypesEffect() {
  return (
    <div>
            <h1 className=" text-white  lg:text-5xl ">
      <ReactTyped
        strings={[" Engineer", " Engineer", " Engineer"]}
        typeSpeed={70}
        backSpeed={80}
        loop
      />
    </h1>
    </div>
  )
}

export default TypesEffect
