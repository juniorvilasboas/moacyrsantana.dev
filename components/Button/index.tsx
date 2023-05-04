import Link from 'next/link'
import React from 'react'

interface Props {
  children: React.ReactNode
  type: any
  tipo: string
  w?: string
}

const Button = ({ children, type, tipo, w = 'auto', ...rest }: Props) => {
  return (
    <button
      type={type}
      className={
        // inline-block w-full py-3 rounded text-sm leading-normal text-white font-medium uppercase transition duration-150 ease-in-out bg-loss hover:bg-gain
        `w-${w} py-2 md:py-3 px-3 md:px-4 rounded-lg text-sm md:text-md font-medium bg-${tipo} hover:bg-${tipo}up hover:text-black leading-normal capitalize transition duration-150 ease-in-out ${
          type === 'disabled' ? 'text-black' : 'text-white'
        }`
      }
      {...rest}
    >
      {children}
    </button>
  )
}

interface Props_Web {
  children: React.ReactNode
  href: string
}

const ButtonLink = ({ href, children }: Props_Web) => {
  return (
    <Link
      href={href}
      className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'
    >
      {children}
    </Link>
  )
}

const ButtonLinkOutline = ({ href, children }: Props_Web) => {
  return (
    <Link
      href={href}
      className='bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded'
    >
      {children}
    </Link>
  )
}

Button.Link = ButtonLink
Button.LinkOutline = ButtonLinkOutline

export default Button
