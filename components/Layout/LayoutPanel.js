import React, { useState } from 'react'
import Menu from '../Menu/Panel'
import Link from 'next/link'
//import { useGet } from 'hooks/api'

const LayoutApp = ({ children }) => {
  const [dropdownOpen, setDropdownOpen] = useState(false)
  const [navOpen, setNavOpen] = useState(false)
  /*const { data } = useGet(
    router?.query?.tenantId ? `/api/tenants/${router?.query?.tenantId}` : null
  )*/
  return (
    <>
      <main className='bg-gray-100 dark:bg-gray-800 h-screen overflow-hidden relative'>
        <div className='flex items-start justify-between'>
          <div
            className={
              navOpen
                ? 'h-screen block shadow-lg relative w-80'
                : 'h-screen hidden lg:block shadow-lg relative w-80'
            }
          >
            <div className='bg-white h-full dark:bg-gray-700'>
              <Menu>
                <Menu.Brand>
                  <Link href={'/'}>Curriculo Online</Link>
                </Menu.Brand>
                <Menu.Nav>
                  <Menu.Link
                    href={'/panel'}
                    icon={
                      'M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z'
                    }
                  >
                    Home
                  </Menu.Link>
                  <Menu.Link
                    href='/panel/education'
                    icon={
                      'M4 4a2 2 0 012-2h8a2 2 0 012 2v12a1 1 0 110 2h-3a1 1 0 01-1-1v-2a1 1 0 00-1-1H9a1 1 0 00-1 1v2a1 1 0 01-1 1H4a1 1 0 110-2V4zm3 1h2v2H7V5zm2 4H7v2h2V9zm2-4h2v2h-2V5zm2 4h-2v2h2V9z'
                    }
                  >
                    Educação
                  </Menu.Link>
                  <Menu.Link
                    href={`/panel/portifolio`}
                    icon={
                      'M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0 1 1 0 00-1.414 1.414 4 4 0 005.656 0l3-3a4 4 0 00-5.656-5.656l-1.5 1.5a1 1 0 101.414 1.414l1.5-1.5zm-5 5a2 2 0 012.828 0 1 1 0 101.414-1.414 4 4 0 00-5.656 0l-3 3a4 4 0 105.656 5.656l1.5-1.5a1 1 0 10-1.414-1.414l-1.5 1.5a2 2 0 11-2.828-2.828l3-3z'
                    }
                  >
                    Portifolio
                  </Menu.Link>
                </Menu.Nav>
              </Menu>
            </div>
          </div>
          <div className='flex flex-col w-full md:space-y-4'>
            <header className='w-full h-16 z-40 flex items-center justify-between'>
              <div className='block lg:hidden ml-6'>
                <button
                  onClick={() => setNavOpen(!navOpen)}
                  className='flex p-2 items-center rounded-full bg-white shadow text-gray-500 text-md'
                >
                  <svg
                    width={20}
                    height={20}
                    className='text-gray-400'
                    fill='currentColor'
                    viewBox='0 0 1792 1792'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path d='M1664 1344v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45zm0-512v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45zm0-512v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45z'></path>
                  </svg>
                </button>
              </div>
              <div className='relative z-20 flex flex-col justify-end h-full px-3 md:w-full'>
                <div className='relative p-1 flex items-center w-full space-x-4 justify-end'>
                  <div className='relative'>
                    <button
                      onClick={() => setDropdownOpen(!dropdownOpen)}
                      className='cursor-pointer relative z-10 block h-8 w-8 rounded-full overflow-hidden shadow focus:outline-none'
                    >
                      <img
                        src='images/foto.png'
                        alt='Moacyr Santana'
                        className='object-cover h-8 w-8'
                      />
                    </button>

                    <div
                      className={
                        'fixed inset-0 h-full w-full z-10 ' + dropdownOpen
                          ? 'block '
                          : ''
                      }
                    ></div>

                    {dropdownOpen && (
                      <>
                        <div
                          onMouseLeave={() => setDropdownOpen(!dropdownOpen)}
                          className={
                            'absolute right-0 mt-2 py-2 w-48 bg-white rounded-lg shadow-xl z-20 '
                          }
                        >
                          <div className='w-full text-center pb-2 border-b-2'>
                            Moacyr Santana
                          </div>
                          <a
                            onClick={() =>
                              signOut({
                                callbackUrl: '/auth/signin'
                              })
                            }
                            className='cursor-pointer block px-4 py-2 text-sm text-gray-700 hover:bg-indigo-600 hover:text-white'
                          >
                            Logout
                          </a>
                        </div>
                      </>
                    )}
                  </div>
                </div>
              </div>
            </header>
            <div className='overflow-auto h-screen pb-24 px-4 md:px-6'>
              {children}
            </div>
          </div>
        </div>
      </main>
    </>
  )
}

export default LayoutApp
