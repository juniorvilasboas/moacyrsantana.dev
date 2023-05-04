import Button from 'components/Button'
import Link from 'next/link'

interface Props {
  name: string
}

const HeaderForm = ({ name }: Props) => {
  return (
    <div className='mt-6 mb-8 grid grid-cols-2'>
      <h1 className='text-2xl md:text-4xl col-start-1 ml-7 font-semibold text-gray-800 capitalize'>
        {name} Manager
      </h1>
      <div className='flex justify-end mr-7'>
        <Link href={`/panel/${name}`} passHref>
          <Button type='button' tipo='cancel'>
            cancelar
          </Button>
        </Link>
      </div>
    </div>
  )
}

export default HeaderForm
