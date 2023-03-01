import { useGet } from 'hooks/api'
import Link from 'next/link'
import PortsItem from './PortsItem'

const Ports = () => {
  const { data: portifolios } = useGet('/api/portifolio')
  if (portifolios && portifolios.length > 0) {
    return (
      <div>
        <h3 className='text-dourado text-2xl font-bold text-center uppercase mt-16 mb-5 hover:underline'>
          <Link href={'/portifolio'} passHref>
            Portfolios
          </Link>
        </h3>
        <div className='w-full md:grid md:grid-cols-2 lg:grid-cols-3 bg-white mx-auto leading-none shadow-lg rounded-xl p-2 md:p-6'>
          {
            //@ts-ignore
            portifolios.map((portifolio, i) => (
              <PortsItem key={i} portifolio={portifolio} />
            ))
          }
        </div>
      </div>
    )
  }

  return null
}

export default Ports
