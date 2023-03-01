import Link from 'next/link'
import React from 'react'

interface Props {
  children: React.ReactNode
}

const Button = ({ children, ...props }: Props) => {
  return (
    <button
      className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'
      {...props}
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
