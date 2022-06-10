import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { IconType } from 'react-icons'

interface Props {
  children: React.ReactNode
}

const Menu = ({ children }: Props) => {
  return <div className='bg-gray-800 h-screen'>{children}</div>
}
const MenuBrand = ({ children }: Props) => {
  return (
    <div className='bg-gray-900 flex items-center justify-start'>
      <p className='font-bold text-white text-xl py-6 ml-8'>
        {children} <br />
      </p>
    </div>
  )
}
const MenuNav = ({ children }: Props) => {
  return <nav className='mt-6'>{children}</nav>
}

interface PropsLink {
  children: React.ReactNode
  href: string
  Icon: IconType
}
const MenuLink = ({ children, href, Icon }: PropsLink) => {
  const router = useRouter()
  const { pathname } = router
  let teste1 = pathname.split('/').slice(2)[0]
  if (teste1 === undefined) {
    teste1 = 'panel'
  }
  const teste = href.split('/').slice(-1)[0]
  // https://react-icons.github.io/react-icons
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
        {Icon && <Icon />}
        <span className='mx-2 text-sm font-normal'>{children}</span>
      </a>
    </Link>
  )
}

Menu.Brand = MenuBrand
Menu.Nav = MenuNav
Menu.Link = MenuLink

export default Menu
