import Link from 'next/link'
import { useForm, SubmitHandler } from 'react-hook-form'
import { post } from 'lib/fetch'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { useRouter } from 'next/router'

import Select from 'react-select'
import { useGet } from 'hooks/api'
import { useState } from 'react'
import HeaderForm from 'components/Header/form'

const portifolioSchema = yup
  .object({
    name: yup.string().required('Informe o nome do projeto'),
    site: yup.string(),
    subject: yup.string().required('Informe uma descrição para o projeto'),
    category: yup.string().required('Informe uma categoria'),
    layout: yup.string().required('Informe o layout do projeto'),
    skills: yup.array()
  })
  .required()

interface NewPortifolioForm {
  layout: string
  name: string
  site: string
  category: string
  subject: string
  skills: string[]
}

const CreatePortifolio = () => {
  const router = useRouter()
  const { data: skils } = useGet('/api/skil?select=select')
  const [valor, setValor] = useState('')
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors }
  } = useForm<NewPortifolioForm>({
    resolver: yupResolver(portifolioSchema)
  })

  const onSubmit: SubmitHandler<NewPortifolioForm> = async (inputs) => {
    const data = await post({
      url: '/api/portifolio',
      data: inputs
    })
    router.push(`/panel/portifolio`)
  }

  const changeHandler = (value: any) => {
    setValor(value)
  }

  return (
    <>
      <HeaderForm name='portifolio' />

      <form
        onSubmit={handleSubmit(onSubmit)}
        className='container mx-auto shadow-md mt-4 rounded-xl'
      >
        <div className='p-4 bg-gray-100 border-t-2 border-indigo-400 rounded-xl bg-opacity-5'>
          <div className='max-w-sm mx-auto md:w-full md:mx-0'>
            <div className='inline-flex items-center space-x-4'>
              <h2 className='text-md text-gray-400'>Criar portifolio</h2>
            </div>
          </div>
        </div>
        <div className='space-y-6 bg-white rounded-b-xl'>
          <div className='items-center w-full p-4 space-y-4 text-gray-500 md:inline-flex md:space-y-0'>
            <h2 className='max-w-sm mx-auto md:w-1/3'>Project</h2>
            <div className='max-w-sm mx-auto space-y-5 md:w-2/3'>
              <div>
                <div className=' relative '>
                  <input
                    type='text'
                    className=' rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent'
                    placeholder='Project name'
                    {...register('name')}
                  />
                  <p>{errors?.name?.message}</p>
                </div>
              </div>
              <div>
                <div className=' relative '>
                  <input
                    type='text'
                    className=' rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent'
                    placeholder='Site'
                    {...register('site')}
                  />
                  <p>{errors?.site?.message}</p>
                </div>
              </div>
              <div>
                <div className=' relative '>
                  <input
                    type='text'
                    className=' rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent'
                    placeholder='Subject'
                    {...register('subject')}
                  />
                  <p>{errors?.subject?.message}</p>
                </div>
              </div>
              <div>
                <div className=' relative '>
                  <select
                    className='rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-purple-600 focus:border-transparent focus:ring-primary-500 focus:border-primary-500'
                    placeholder='Category'
                    {...register('category')}
                  >
                    <option value=''>Selecione uma categoria</option>
                    <option value='profissional'>Profissional</option>
                    <option value='personal'>Personal</option>
                  </select>
                  <p>{errors?.category?.message}</p>
                </div>
              </div>
              <div>
                <input
                  className='rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-purple-600 focus:border-transparent focus:ring-primary-500 focus:border-primary-500'
                  id='layout'
                  type='file'
                  placeholder='Layout'
                  {...register('layout')}
                />
                <p>{errors?.layout?.message}</p>
              </div>
            </div>
          </div>
          <hr />
          <div className='items-center w-full p-4 space-y-4 text-gray-500 md:inline-flex md:space-y-0'>
            <h2 className='max-w-sm mx-auto md:w-1/3'>Skills</h2>
            <div className='max-w-sm mx-auto space-y-5 md:w-2/3'>
              <div>
                <div className=' relative '>
                  <Select
                    id='skills'
                    isMulti
                    value={valor}
                    options={skils}
                    className='rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-purple-600 focus:border-transparent focus:ring-primary-500 focus:border-primary-500'
                    classNamePrefix={'skills'}
                    {...register('skills')}
                    onChange={changeHandler}
                  />
                  <p>{errors?.skills?.message}</p>
                </div>
              </div>
            </div>
          </div>
          <hr />
          <div className='w-full px-4 pb-4 ml-auto text-gray-500 md:w-1/4'>
            <button
              type='submit'
              className='py-2 px-4  bg-blue-600 hover:bg-blue-700 focus:ring-blue-500 focus:ring-offset-blue-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg '
            >
              Save
            </button>
          </div>
        </div>
      </form>
    </>
  )
}

export default CreatePortifolio
