import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'

const Menu = ({ children }) => {
  return <div className='bg-gray-800 h-screen'>{children}</div>
}
const MenuBrand = ({ children }) => {
  return (
    <div className='bg-gray-900 flex items-center justify-start'>
      <p className='font-bold text-white text-xl py-6 ml-8'>
        {children} <br />
      </p>
    </div>
  )
}
const MenuNav = ({ children }) => {
  return <nav className='mt-6'>{children}</nav>
}
const MenuLink = ({ children, href, icon }) => {
  const router = useRouter()
  const { pathname } = router
  const teste1 = pathname.split('/').slice(-1)[0]
  const teste = href.split('/').slice(-1)[0]
  const selected = teste1 === teste || pathname.startsWith(teste1)
  return (
    <Link href={href}>
      <a
        className={
          selected
            ? 'w-full bg-gray-900 text-gray-100 dark:text-white flex items-center pl-6 p-2 my-2 transition-colors duration-200 justify-start border-l-4 border-purple-500'
            : 'w-full text-gray-400 flex items-center pl-6 p-2 my-2 transition-colors duration-200 justify-start hover:bg-gray-900 hover:text-gray-100 border-l-4 border-transparent'
        }
      >
        <svg
          xmlns='http://www.w3.org/2000/svg'
          className='h-5 w-5'
          viewBox='0 0 20 20'
          fill='currentColor'
        >
          <path fillRule='evenodd' clipRule='evenodd' d={icon} />
        </svg>
        <span className='mx-2 text-sm font-normal'>{children}</span>
      </a>
    </Link>
  )
}

Menu.Brand = MenuBrand
Menu.Nav = MenuNav
Menu.Link = MenuLink

export default Menu
