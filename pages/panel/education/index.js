import React from 'react'
import Link from 'next/link'
import { remove } from '../../../lib/fatch'
import Alert from '../../../components/Alert'

const Index = ({ degrees }) => {
  const onDelete = async (id) => {
    await remove({
      url: `http://localhost:3001/api/education/${id}`
    })
  }

  return (
    <>
      <div className='mt-4 grid md:grid-cols-2'>
        <h1 className='text-4xl font-semibold text-gray-800 dark:text-white'>
          My Education
        </h1>
        <div className='flex items-center mt-4'>
          <button className='hidden lg:block w-full text-base font-medium text-black hover:bg-gray-100 px-4 py-2 rounded-xl cursor-default'></button>
          <Link href={`/panel/education/create`} passHref>
            <button
              type='button'
              className='mt-4 lg:mt-0 w-full border text-base font-medium text-black bg-white hover:bg-gray-100 px-4 py-2 mr-2 rounded-xl'
            >
              Add Education
            </button>
          </Link>
        </div>
      </div>

      <div className='container mx-auto px-4 sm:px-8 max-w-3xl'>
        <div className='py-8'>
          <div className='flex flex-row mb-1 sm:mb-0 justify-between w-full'>
            <h2 className='text-2xl leading-tight'>Degrees</h2>
          </div>
          {degrees && degrees?.length === 0 && (
            <Alert>Nunhum degree cadastrado</Alert>
          )}
          {degrees && degrees?.length > 0 && (
            <div className='-mx-8 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto'>
              <div className='inline-block min-w-full shadow rounded-lg overflow-hidden'>
                <table className='min-w-full leading-normal'>
                  <thead>
                    <tr>
                      <th
                        scope='col'
                        className='px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal'
                      >
                        Degree
                      </th>
                      <th
                        scope='col'
                        className='px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal'
                      >
                        Institution
                      </th>
                      <th
                        scope='col'
                        className='px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal'
                      ></th>
                    </tr>
                  </thead>
                  <tbody>
                    {degrees &&
                      degrees.map((degree) => (
                        <tr key={degree.id}>
                          <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
                            <div className='flex items-center'>
                              <div className='ml-3'>
                                <p className='text-gray-900 whitespace-no-wrap'>
                                  {degree.degree}
                                  <br />
                                </p>
                              </div>
                            </div>
                          </td>
                          <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
                            <div className='flex items-center'>
                              <div className='ml-3'>
                                <p className='text-gray-900 whitespace-no-wrap'>
                                  {degree.institution}
                                  <br />
                                </p>
                              </div>
                            </div>
                          </td>
                          <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
                            <Link href={`/panel/education/edit`} passHref>
                              <a className='inline-block mx-1 text-indigo-600 hover:text-indigo-900'>
                                Edit
                              </a>
                            </Link>
                            <button
                              onClick={() => onDelete(degree.id)}
                              className='inline-block mx-1 text-indigo-600 hover:text-indigo-900'
                            >
                              Delete
                            </button>
                          </td>
                        </tr>
                      ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  )
}

export async function getServerSideProps(context) {
  /*const request = await fetch(process.env.API_URL + '/getUser')
  const { repos, user } = await request.json()*/
  const educRequest = await fetch(process.env.API_URL + '/education')
  const { degrees } = await educRequest.json()

  return {
    props: {
      degrees
    }
  }
}

export default Index
