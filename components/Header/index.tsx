import Button from 'components/Button'
import Link from 'next/link'

interface PropsHeader {
  children: React.ReactNode
}

const Header = ({ children }: PropsHeader) => {
  return <div className='mt-6 mb-8 grid grid-cols-2'>{children}</div>
}

interface PropsTitle {
  name: string
}

const Title = ({ name }: PropsTitle) => {
  return (
    <>
      <h1 className='text-2xl md:text-4xl col-start-1 ml-7 font-semibold text-gray-800 capitalize'>
        My {name}
      </h1>
      <div className='flex justify-end mr-7'>
        <Link href={`/panel/${name}/create`} passHref>
          <Button type='button' tipo='padrao'>
            Add {name}
          </Button>
        </Link>
      </div>
    </>
  )
}

Header.Title = Title

export default Header
