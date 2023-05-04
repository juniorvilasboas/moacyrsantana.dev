import React from 'react'
import { postImage } from 'lib/fetch'
import { useGet } from 'hooks/api'
import { useSession } from 'next-auth/react'
import FormData from 'form-data'

import Header from 'components/Header'
import Container from 'components/Container'
import Alert from 'components/Alert'
import Link from 'next/link'
import Image from 'next/image'

const Index = () => {
  const { data: session } = useSession()
  const { data } = useGet('/api/information')

  const handleImageClick = async () => {
    try {
      const response = await fetch('https://source.unsplash.com/random/400x400')
      const blob = await response.blob()
      const formData = new FormData()
      formData.append('image', blob, 'random-image.jpg')
      await postImage({
        url: '/api/saveImage',
        data: formData
      })

      console.log('Imagem salva com sucesso')
    } catch (error) {
      console.log(error)
    }
    // const input = document.createElement('input')
    // input.type = 'file'
    // input.accept = 'image/*'
    // input.onchange = async (e) => {
    //   const file = e.target?.files?.[0]

    //   const fileName = file.name

    //   const formData = new FormData()
    //   formData.append('image', file, { filename: fileName })

    //   const response = await postImage({
    //     url: '/api/saveImage',
    //     data: formData
    //   })

    //   // await fs.writeFile(filePath, file.data)
    // }

    // input.click()
  }

  return (
    <>
      <Header>
        <Header.Title name='information' />
      </Header>

      <Container>
        <div className='flex flex-row mb-1 mt-4 sm:mb-0 justify-between w-full'>
          <h2 className='text-xl sm:text-2xl ml-2 capitalize leading-tight'>
            Information
          </h2>
        </div>
        {data && data?.length === 0 && <Alert>No registered information</Alert>}
        {data &&
          data.map((info: any) => (
            <div
              key={info.id}
              className='w-full mx-auto rounded-lg bg-white dark:bg-gray-800 shadow-lg px-6 pt-5 pb-10 text-gray-800 dark:text-gray-50'
            >
              <div className='w-auto text-center -mt-16'>
                <img
                  name='image'
                  onClick={handleImageClick}
                  alt={session?.user?.name}
                  src={session?.user?.image}
                  className='mx-auto object-cover bg-white rounded-full h-20 w-20 '
                />
              </div>
              <div className='w-full mt-5 mb-10'>
                <p className='text-sm text-gray-600 dark:text-gray-100 text-center px-5'>
                  <span>{info.phone}</span> <br />
                  <span>{info.cep}</span> <br />
                  <span>{info.address}</span> <br />
                  <span>{info.city}</span> <br />
                  <span>{info.country}</span> <br />
                </p>
              </div>
              <div className='w-full'>
                <p className='text-md text-indigo-500 font-bold text-center'>
                  {session?.user?.name}
                </p>
                <p className='text-xs text-gray-500 dark:text-gray-300 text-center'>
                  <Link
                    className='inline-block mx-1 text-indigo-600 hover:text-indigo-900'
                    href={`/panel/information/${info.id}/edit`}
                    passHref
                  >
                    Edit
                  </Link>
                </p>
              </div>
            </div>
          ))}
      </Container>
    </>
  )
}

export default Index
