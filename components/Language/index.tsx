import { useGet } from 'hooks/api'

const Language = () => {
  const { data: languages } = useGet('/api/language')
  if (languages && languages.length > 0) {
    return (
      <div>
        {languages && languages?.length > 0 && (
          <div>
            <p className='text-xl ml-4 md:ml-0 pt-4 px-2 md:px-16 font-bold'>
              Language
            </p>
            <div className='text-2xl ml-2 md:ml-0 pt-2 px-2 md:px-16'>
              <div className='inline-block min-w-full shadow rounded-lg overflow-hidden'>
                <table className='min-w-full leading-normal'>
                  <thead>
                    <tr>
                      <th
                        scope='col'
                        className='px-1 md:px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-xs md:text-sm uppercase font-normal'
                      ></th>
                      <th
                        scope='col'
                        className='px-1 md:px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-xs md:text-sm uppercase font-normal'
                      >
                        Understanding
                      </th>
                      <th
                        scope='col'
                        className='px-1 md:px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-xs md:text-sm uppercase font-normal'
                      >
                        Speaking
                      </th>
                      <th
                        scope='col'
                        className='px-1 md:px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-xs md:text-sm uppercase font-normal'
                      >
                        Writing
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {languages &&
                      languages.map((language: any) => (
                        <tr key={language.id}>
                          <td className='px-1 md:px-5 py-5 border-b border-gray-200 bg-white text-xs md:text-sm'>
                            <div className='flex items-center'>
                              <div className='ml-3'>
                                <p className='text-gray-900 whitespace-no-wrap'>
                                  {language.name}
                                  <br />
                                </p>
                              </div>
                            </div>
                          </td>
                          <td className='px-1 md:px-5 py-5 border-b border-gray-200 bg-white text-xs md:text-sm'>
                            <div className='flex items-center'>
                              <div className='ml-3'>
                                <p className='text-gray-900 whitespace-no-wrap'>
                                  {language.understanding}
                                  <br />
                                </p>
                              </div>
                            </div>
                          </td>
                          <td className='px-1 md:px-5 py-5 border-b border-gray-200 bg-white text-xs md:text-sm'>
                            <div className='flex items-center'>
                              <div className='ml-3'>
                                <p className='text-gray-900 whitespace-no-wrap'>
                                  {language.speaking}
                                  <br />
                                </p>
                              </div>
                            </div>
                          </td>
                          <td className='px-1 md:px-5 py-5 border-b border-gray-200 bg-white text-xs md:text-sm'>
                            <div className='flex items-center'>
                              <div className='ml-3'>
                                <p className='text-gray-900 whitespace-no-wrap'>
                                  {language.writing}
                                  <br />
                                </p>
                              </div>
                            </div>
                          </td>
                        </tr>
                      ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}
      </div>
    )
  }

  return null
}

export default Language
