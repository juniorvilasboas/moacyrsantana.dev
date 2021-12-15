import React from 'react'

const Nav = () => {
  return (
    <nav id='menu' className='p-4 border-b-2'>
      <h3 className='float-left ml-56 text-2xl'>Personal</h3>
      <ul>
        <li className='mr-6'><a href='#home'>Home</a></li>
        <li className='mr-6'><a href='#education'>My Education</a></li>
        <li className='mr-6'><a href='#repos'>Repositories</a></li>
        <li className='mr-6'><a href='#port'>Portfolio</a></li>
      </ul>
    </nav>
  )
}

export default Nav