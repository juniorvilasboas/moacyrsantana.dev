import React from "react";

const Link = () => {
  return (
    <ul className='list-inline'>
        <li className='list-inline-item inline-block'><a href="#home" className='text-sm md:text-lg hover:text-dourado'>Home</a></li>
        <li className='list-inline-item inline-block'><a href="#education" className='text-sm md:text-lg hover:text-dourado'>My Education</a></li>
        <li className='list-inline-item inline-block'><a href="#repos" className='text-sm md:text-lg hover:text-dourado'>Repositories</a></li>
        <li className='list-inline-item inline-block'><a href="#port" className='text-sm md:text-lg hover:text-dourado'>Portfolios</a></li>
    </ul>
  )
}

export default Link