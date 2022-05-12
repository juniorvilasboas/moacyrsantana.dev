import React from "react";

const Link = () => {
  return (
    <ul className='text-center text-xl'>
      <li className='inline-block px-2.5'>
        <a href="#home" className='text-sm md:text-lg hover:text-dourado'>Home</a>
      </li>
      <li className='inline-block px-2.5'>
        <a href="#education" className='text-sm md:text-lg hover:text-dourado'>My Education</a>
      </li>
      <li className='inline-block px-2.5'>
        <a href="#repos" className='text-sm md:text-lg hover:text-dourado'>Repositories</a>
      </li>
      <li className='inline-block px-2.5'>
        <a href="#port" className='text-sm md:text-lg hover:text-dourado'>Portfolios</a>
      </li>
    </ul>
  )
}

export default Link