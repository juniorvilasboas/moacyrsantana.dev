import React from 'react'

interface Props {
  children: React.ReactNode
}

const LayoutPanel = ({ children }: Props) => {
  return <>{children}</>
}

export default LayoutPanel
