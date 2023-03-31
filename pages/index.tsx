import { useRouter } from 'next/router'
import { useEffect } from 'react'

const Index = () => {
  const router = useRouter()
  useEffect(() => {
    router.push(`/site`)
  })
  return (
    <div className='flex items-center justify-center'>
      <svg
        className='motion-safe:animate-spin h-10 w-10 mr-3 ...'
        viewBox='0 0 24 24'
      >
        <circle fill='#fff' cx={36} cy={18} r={1}>
          <animateTransform
            attributeName='transform'
            type='rotate'
            from='0 18 18'
            to='360 18 18'
            dur='0.9s'
            repeatCount='indefinite'
          />
        </circle>
      </svg>
      Caregando...
    </div>
  )
}

export default Index
