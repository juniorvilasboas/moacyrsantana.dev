import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'

interface Props {
  children: React.ReactNode
  id?: string
}

const Menu = ({ children }: Props) => {
  return <>{children}</>
}

const MenuNav = ({ children }: Props) => {
  return <nav className='bg-dourado'>{children}</nav>
}

const MenuLogo = () => {
  return (
    <div className='flex-shrink-0 flex items-center'>
      <span className='block lg:hidden w-auto'>
        <img className='h-6 w-auto' src='/logo_short.png' alt='Resume' />
      </span>
      <img
        className='hidden lg:block h-6 w-auto'
        src='/Logo_long.png'
        alt='Workflow'
      />
    </div>
  )
}

const MenuBrand = ({ children }: Props) => {
  return (
    <div className='max-w-7xl mx-auto px-2 sm:px-6 lg:px-8'>
      <div className='relative flex items-center justify-between h-16'>
        {children}
      </div>
    </div>
  )
}

interface PropsLink {
  children: React.ReactNode
  href: string
}

const MenuWebLink = ({ children, href }: PropsLink) => {
  const router = useRouter()
  const { pathname } = router
  const selected = pathname === href
  return (
    <Link
      href={href}
      className={`px-3 py-2 rounded-md text-sm font-medium ${
        selected
          ? 'bg-padrao text-white'
          : 'text-gray-300 hover:bg-padrao hover:text-white'
      }`}
    >
      {children}
    </Link>
  )
}

const MenuMobile = ({ children, id }: Props) => {
  return (
    <div className='sm:hidden' id='mobile-menu'>
      <div id={id} className='px-2 pt-2 pb-3 space-y-1'>
        {children}
      </div>
    </div>
  )
}

const MenuMobileLink = ({ children, href }: PropsLink) => {
  const router = useRouter()
  const { pathname } = router
  const selected = pathname === href
  return (
    <Link
      href={href}
      className={` block px-3 py-2 rounded-md text-base font-medium ${
        selected
          ? 'bg-gray-900 text-white'
          : 'text-gray-300 hover:bg-gray-700 hover:text-white'
      }`}
    >
      {children}
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
