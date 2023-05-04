import Link from 'next/link'

const PortsItem = ({ portifolio }: any) => {
  return (
    <div className='px-8 md:px-2 lg:px-10 shadow-lg w-72 sm:w-2/3 md:w-3/4 lg:w-3/4 mx-auto my-8 rounded-xl'>
      <Link
        href={portifolio.site}
        target='_blank'
        rel='noreferrer'
        className='w-full'
      >
        <img
          alt={portifolio.name}
          src={portifolio.layout}
          className='w-full h-36'
        />
      </Link>
      <h4 className='text-center mt-8 pb-6'>{portifolio.name}</h4>
    </div>
  )
}

export default PortsItem
