import React from 'react'

const Nav = () => {
  return (
    <nav className='p-4 border-b-2'>
      <h3 className='float-left ml-56 text-2xl'>Personal</h3>
      <div className='flex md:inline flex-col md:flex-inline relative mt-6 md:mt-0 ml-6 md:ml-0 z-1 select-none'>
        <input type='checkbox' />
        <span></span>
        <span></span>
        <span></span>
        <ul className='md:mx-36 md:text-right'>
          {[1,2,3,4].map(i => (
            <li className='inline mr-10'>
              <a className='inline-block py-0.5 px-2.5 hover:text-dourado' href='#home'>Home</a>
            </li>
          ))}
          {/**
          <li className='mr-6'><a href='#education'>My Education</a></li>
          <li className='mr-6'><a href='#repos'>Repositories</a></li>
          <li className='mr-6'><a href='#port'>Portfolio</a></li>
            */}
        </ul>
      </div>
    </nav>
  )
}

export default Nav