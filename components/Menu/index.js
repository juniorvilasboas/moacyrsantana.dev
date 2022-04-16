import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import Img from '../Img'

const Menu = ({ children }) => {
  return <>{children}</>
}

const MenuNav = ({ children }) => {
  return <nav className='bg-dourado'>{children}</nav>
}

const MenuLogo = () => {
  return (
    <div className='flex-shrink-0 flex items-center'>
      <span className='block lg:hidden w-auto'>
        <Img src='/apple-icon-180x180.png' alt='Resume' w={40} h={40} />
      </span>
      <img
        className='hidden lg:block h-8 w-auto'
        src='https://tailwindui.com/img/logos/workflow-logo-indigo-500-mark-white-text.svg'
        alt='Workflow'
      />
    </div>
  )
}

const MenuBrand = ({ children }) => {
  return (
    <div className='max-w-7xl mx-auto px-2 sm:px-6 lg:px-8'>
      <div className='relative flex items-center justify-between h-16'>
        {children}
      </div>
    </div>
  )
}

const MenuWebLink = ({ children, href }) => {
  const router = useRouter()
  const { pathname } = router
  const selected = pathname === href
  return (
    <Link href={href}>
      <a
        className={
          selected
            ? 'bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium'
            : 'text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium'
        }
      >
        {children}
      </a>
    </Link>
  )
}

const MenuMobile = ({ children }) => {
  return (
    <div className='sm:hidden' id='mobile-menu'>
      <div className='px-2 pt-2 pb-3 space-y-1'>{children}</div>
    </div>
  )
}

const MenuMobileLink = ({ children, href }) => {
  const router = useRouter()
  const { pathname } = router
  const selected = pathname === href
  return (
    <Link href={href}>
      <a
        className={
          selected
            ? 'bg-gray-900 text-white block px-3 py-2 rounded-md text-base font-medium'
            : 'text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium'
        }
      >
        {children}
      </a>
    </Link>
  )
}

Menu.Nav = MenuNav
Menu.Logo = MenuLogo
Menu.Brand = MenuBrand
Menu.WebLink = MenuWebLink
Menu.Mobile = MenuMobile
Menu.MobileLink = MenuMobileLink

export default Menu
