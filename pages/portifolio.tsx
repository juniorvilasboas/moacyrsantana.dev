import Image from 'components/Image/image'
import Page from 'components/Page'
import SkilImage from 'components/Skills/SkilImage'
import { useGet } from 'hooks/api'
import Link from 'next/link'

const Portifolio = () => {
  const { data: portifolios } = useGet('/api/portifolio')
  return (
    <div>
      <Page title='Portifolio' />
      <div className='md:grid lg:grid-cols-2 mx-auto'>
        {portifolios &&
          portifolios.map((portifolio: any) => (
            <div
              key={portifolio.id}
              className='flex bg-white dark:bg-gray-600 rounded-lg shadow-xl divide-x md:mx-4 lg:mr-6 mb-4'
            >
              <div className='flex-none w-24 md:w-48 relative'>
                <div className='py-6 px-2 w-24 md:w-48 text-right text-sm md:text-lg font-bold'>
                  <Image
                    src={portifolio.layout}
                    alt='shopping image'
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
                  Website developed with technologies:
                </span>
                <div className='flex items-baseline mt-2 mb-2 text-gray-700 dark:text-gray-300'>
                  <>
                    <p className='mb-2'>
                      {portifolio.skills.map((tech: any) => (
                        <SkilImage
                          key={tech.id}
                          item={tech}
                          css='h-6 w-6 md:h-8 md:w-8 inline-block mr-4'
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
                  <Link
                    href={portifolio.site}
                    className='text-dourado hover:underline'
                    target='_blank'
                  >
                    Web Site
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
