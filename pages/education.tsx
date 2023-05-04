import Page from 'components/Page'
import { format } from 'date-fns'
import { useGet } from 'hooks/api'
import Link from 'next/link'

const Education = () => {
  const { data: degrees } = useGet('/api/education')
  return (
    <div>
      <Page title='education' />
      <div className='md:grid lg:grid-cols-2 mx-auto'>
        {degrees &&
          degrees
            .filter((degree: any) => degree.tipo === 'Graduacao')
            .map((degree: any) => (
              <div
                key={degree.id}
                className='flex bg-white dark:bg-gray-500 rounded-lg shadow-xl divide-x md:mx-4 lg:mr-6 mb-4'
              >
                <div className='flex-none w-24 md:w-32 relative'>
                  <div className='py-6 px-2 w-24 md:w-32 text-right text-xs md:text-lg font-bold'>
                    {degree.end
                      ? format(new Date(degree.end), 'YYY')
                      : 'In progress'}
                    <br />
                    {format(new Date(degree.begin), 'YYY')}
                  </div>
                </div>
                <div className='flex-auto py-4 px-4'>
                  <div className='flex flex-wrap'>
                    <h1 className='text-dourado text-xs md:text-lg uppercase font-bold flex-auto dark:text-white'>
                      {degree.degree}
                    </h1>
                  </div>
                  <div className='flex items-baseline mt-4 mb-2 text-gray-700 dark:text-gray-900'>
                    <p className='text-xs md:text-lg uppercase mb-4'>
                      {degree.subject} <br />
                      <span className='text-xs md:text-lg normal-case font-bold'>
                        {degree.institution}
                      </span>
                    </p>
                  </div>
                  <div className='flex text-xs md:text-lg'>
                    {degree.site && (
                      <Link
                        href={'https://' + degree.site}
                        className='text-dourado hover:underline'
                        target='_blank'
                      >
                        Web Site
                      </Link>
                    )}
                  </div>
                </div>
              </div>
            ))}
        {degrees &&
          degrees
            .filter((degree: any) => degree.tipo === 'Profissionalizante')
            .map((degree: any) => (
              <div
                key={degree.id}
                className='flex bg-white dark:bg-gray-500 rounded-lg shadow-xl divide-x md:mx-4 lg:mr-6 mb-4'
              >
                <div className='flex-none w-24 md:w-32 relative'>
                  <div className='py-6 px-2 w-24 md:w-32 text-right text-xs md:text-lg font-bold'>
                    {degree.end
                      ? format(new Date(degree.end), 'YYY')
                      : 'In progress'}
                    <br />
                    {format(new Date(degree.begin), 'YYY')}
                  </div>
                </div>
                <div className='flex-auto py-4 px-4'>
                  <div className='flex flex-wrap'>
                    <h1 className='text-dourado text-xs md:text-lg uppercase font-bold flex-auto dark:text-white'>
                      {degree.degree}
                    </h1>
                  </div>
                  <div className='flex items-baseline mt-4 mb-2 text-gray-700 dark:text-gray-900'>
                    <p className='text-xs md:text-lg uppercase mb-4'>
                      {degree.subject} <br />
                      <span className='text-xs md:text-lg normal-case font-bold'>
                        {degree.institution}
                      </span>
                    </p>
                  </div>
                  <div className='flex text-xs md:text-lg'>
                    {degree.site && (
                      <Link
                        href={'https://' + degree.site}
                        className='text-dourado hover:underline'
                        target='_blank'
                      >
                        Web Site
                      </Link>
                    )}
                  </div>
                </div>
              </div>
            ))}
      </div>
    </div>
  )
}

export default Education
