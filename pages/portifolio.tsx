import React from 'react'
import Link from 'next/link'
import TechItem from 'components/Techs/TechItem'
import Img from 'components/Img'
import { useGet } from 'hooks/api'

const Portifolio = () => {
  const { data: portifolios } = useGet(`${process.env.API_URL}/portifolio`)
  return (
    <div>
      <h3 className=' text-dourado text-2xl font-bold text-center uppercase mt-16 mb-8'>
        My Portifolio
      </h3>
      <div className='md:grid lg:grid-cols-2 mx-auto'>
        {portifolios.map((portifolio: any) => (
          <div
            key={portifolio.id}
            className='flex bg-white dark:bg-gray-800 rounded-lg shadow-xl divide-x md:mx-4 lg:mr-6 mb-4'
          >
            <div className='flex-none w-24 md:w-48 relative'>
              <div className='py-6 px-2 w-24 md:w-48 text-right text-sm md:text-lg font-bold'>
                <Img
                  src={portifolio.layout}
                  alt='shopping image'
                  h={150}
                  w={150}
                  css='absolute rounded-lg inset-0 w-full object-cover my-auto'
                />
              </div>
            </div>
            <div className='flex-auto py-4 px-4'>
              <div className='flex flex-wrap'>
                <h1 className='text-dourado text-sm md:text-lg uppercase font-bold flex-auto dark:text-gray-50'>
                  {portifolio.name}
                </h1>
              </div>
              <span className='block'>
                Site desenvolvido com as tecnologias:
              </span>
              <div className='flex items-baseline mt-2 mb-2 text-gray-700 dark:text-gray-300'>
                <>
                  <p className='mb-2'>
                    {portifolio.techs.map((tech: any) => (
                      <TechItem
                        key={tech.id}
                        item={tech}
                        css='h-6 md:h-8 inline-block mr-4'
                      />
                    ))}
                  </p>
                  &nbsp;
                </>
              </div>
              <div className='flex text-xs md:text-base'>
                {portifolio.subject}
              </div>
              <div className='flex'>
                <Link href={portifolio.site}>
                  <a className='text-dourado hover:underline' target='_blank'>
                    Web Site
                  </a>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Portifolio
