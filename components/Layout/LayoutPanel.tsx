import React, { useEffect, useState } from 'react'
import Menu from '../Menu/Panel'
import Link from 'next/link'
import { signOut, useSession } from 'next-auth/react'

import { AiFillHome, AiOutlineFundProjectionScreen } from 'react-icons/ai'
import { BsFillPersonLinesFill } from 'react-icons/bs'
import { GiSkills } from 'react-icons/gi'
import { MdCastForEducation, MdLanguage } from 'react-icons/md'
import { SiExpertsexchange } from 'react-icons/si'
import { useRouter } from 'next/router'
import Image from 'next/image'

interface Props {
  children: React.ReactNode
}

const LayoutPanel = ({ children }: Props) => {
  const router = useRouter()
  const { data: session, status } = useSession()
  const [dropdownOpen, setDropdownOpen] = useState(false)
  const [navOpen, setNavOpen] = useState(false)

  useEffect(() => {
    if (status === 'unauthenticated') {
      router.push('/auth/signin')
    }
  }, [router, status])

  return (
    <>
      <main className='bg-gray-100 dark:bg-gray-800 h-screen overflow-hidden relative'>
        <div className='flex items-start justify-between'>
          <div
            className={`h-screen shadow-lg relative w-80
             ${navOpen ? 'block' : 'hidden lg:block'}`}
          >
            <div className='bg-white h-full dark:bg-gray-700'>
              <Menu>
                <Menu.Brand>
                  <Link href={'/'}>
                    <div className='flex items-center justify-center'>
                      <Image
                        width={48}
                        height={48}
                        src='/logo_long.png'
                        alt='logo'
                        className='w-48'
                      />
                    </div>
                  </Link>
                </Menu.Brand>
                <Menu.Nav>
                  <Menu.Link href={'/panel'} Icon={AiFillHome}>
                    Home
                  </Menu.Link>
                  <Menu.Link
                    href='/panel/information'
                    Icon={BsFillPersonLinesFill}
                  >
                    Informação
                  </Menu.Link>
                  <Menu.Link href='/panel/language' Icon={MdLanguage}>
                    Idiomas
                  </Menu.Link>
                  <Menu.Link href='/panel/education' Icon={MdCastForEducation}>
                    Educação
                  </Menu.Link>
                  <Menu.Link href='/panel/experience' Icon={SiExpertsexchange}>
                    Experiência
                  </Menu.Link>
                  <Menu.Link
                    href={`/panel/portifolio`}
                    Icon={AiOutlineFundProjectionScreen}
                  >
                    Portifolio
                  </Menu.Link>
                  <Menu.Link href={`/panel/skill`} Icon={GiSkills}>
                    Tecnologias
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
                      <div>
                        <Image
                          className='h-8 w-8'
                          //@ts-ignore
                          src={session?.user?.image}
                          //@ts-ignore
                          alt={session?.user?.name}
                          width={8}
                          height={8}
                        />
                      </div>
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
                            {session?.user?.name}
                          </div>
                          <a
                            className='cursor-pointer block px-4 py-2 text-sm text-gray-700 hover:bg-padrao hover:text-white rounded'
                            onClick={() =>
                              signOut({
                                callbackUrl: '/'
                              })
                            }
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

export default LayoutPanel
