import React from 'react'

interface Props {
  children: React.ReactNode
}

const LayoutEmpty = ({ children }: Props) => {
  return (
    <>
      <div className='w-full h-screen flex items-center justify-center bg-dourado'>
        {children}
      </div>
    </>
  )
}

export default LayoutEmpty
