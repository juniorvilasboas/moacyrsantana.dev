import React, { useState } from 'react'
import Footer from '../Footer'
import Menu from '../Menu/Public'
import PageHead from '../PageHead'

interface Props {
  children: React.ReactNode
}

const Layout = ({ children }: Props) => {
  const [active, setActive] = useState(false)
  const handleClick = () => {
    setActive(!active)
  }
  return (
    <>
      <PageHead />
      <Menu>
        <Menu.Nav>
          <div className='max-w-7xl mx-auto px-2 sm:px-6 lg:px-8'>
            <div className='relative flex items-center justify-between h-16'>
              <div className='absolute inset-y-0 left-0 flex items-center sm:hidden'>
                {/* Mobile menu button*/}
                <button
                  onClick={handleClick}
                  type='button'
                  className='inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white'
                  aria-controls='mobile-menu'
                  aria-expanded='false'
                >
                  {/*
                    Icon when menu is closed.

                    Heroicon name: outline/menu

                    Menu open: "hidden", Menu closed: "block"
                  */}
                  <svg
                    className='block h-6 w-6'
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 24 24'
                    stroke='currentColor'
                    aria-hidden='true'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth={2}
                      d='M4 6h16M4 12h16M4 18h16'
                    />
                  </svg>
                  {/*
                    Icon when menu is open.

                    Heroicon name: outline/x

                    Menu open: "block", Menu closed: "hidden"
                  */}
                  <svg
                    className='hidden h-6 w-6'
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 24 24'
                    stroke='currentColor'
                    aria-hidden='true'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth={2}
                      d='M6 18L18 6M6 6l12 12'
                    />
                  </svg>
                </button>
              </div>
              <div className='flex-1 flex items-center justify-center sm:items-stretch sm:justify-start'>
                <Menu.Logo />
                <div className='hidden sm:block sm:ml-6'>
                  <div className='flex space-x-4'>
                    {/* Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" */}
                    <Menu.WebLink href={'/'}>Home</Menu.WebLink>
                    <Menu.WebLink href={'/education'}>Education</Menu.WebLink>
                    <Menu.WebLink href={'/experience'}>Experience</Menu.WebLink>
                    <Menu.WebLink href={'/portifolio'}>Portifolio</Menu.WebLink>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Mobile menu, show/hide based on menu state. */}
          {active && (
            <Menu.Mobile>
              <Menu.MobileLink href={'/'}>Home</Menu.MobileLink>
              <Menu.MobileLink href={'/education'}>Education</Menu.MobileLink>
              <Menu.MobileLink href={'/experience'}>Experience</Menu.MobileLink>
              <Menu.MobileLink href={'/portifolio'}>Portifolio</Menu.MobileLink>
            </Menu.Mobile>
          )}
        </Menu.Nav>
      </Menu>
      <div>
        <div className='container mx-auto px-6 md:px-0'>{children}</div>
        <Footer />
      </div>
    </>
  )
}

export default Layout
