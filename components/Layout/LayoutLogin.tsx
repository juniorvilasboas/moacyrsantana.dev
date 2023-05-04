import { useSession } from 'next-auth/react'
import { useRouter } from 'next/router'
import React, { useEffect } from 'react'

interface Props {
  children: React.ReactNode
}
const LayoutLogin = ({ children }: Props) => {
  const { status } = useSession()
  const router = useRouter()

  useEffect(() => {
    if (status === 'authenticated') {
      router.push('/panel')
    }
  }, [router, status])

  return <div className='relative h-screen bg-dourado'>{children}</div>
}

export default LayoutLogin
