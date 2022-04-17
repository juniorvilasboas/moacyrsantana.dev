import Link from 'next/link'
import { useForm, SubmitHandler } from 'react-hook-form'
import { post } from '../../../lib/fatch'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'

const degreeSchema = yup
  .object({
    degree: yup.string().required('Informe uma graduação'),
    subject: yup.string().required('Informe um título'),
    institution: yup.string().required('Informe a instituição'),
    site: yup.string(),
    begin: yup.date().required('Informe o início do curso'),
    end: yup.date()
  })
  .required()

const CreateDegree = () => {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(degreeSchema)
  })

  const onSubmit = async (inputs) => {
    const data = await post({
      url: `http://localhost:3001/api/education`,
      data: inputs
    })
    //router.push(`/app/${router?.query?.tenantId}/links`)
  }

  return (
    <>
      <div className='grid md:grid-cols-2'>
        <h1 className='text-4xl font-semibold text-gray-800 dark:text-white'>
          Gerenciador de Degrees
        </h1>
        <div className='flex items-center mt-4'>
          <button className='w-full text-base font-medium text-black hover:bg-gray-100 px-4 py-2 rounded-xl cursor-default'></button>
          <Link href={`/panel/education`} passHref>
            <button
              type='button'
              className='w-full border text-base font-medium text-black bg-white hover:bg-gray-100 px-4 py-2 mr-2 rounded-xl'
            >
              Cancelar
            </button>
          </Link>
        </div>
      </div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className='container mx-auto shadow-md mt-4 rounded-xl'
      >
        <div className='p-4 bg-gray-100 border-t-2 border-indigo-400 rounded-xl bg-opacity-5'>
          <div className='max-w-sm mx-auto md:w-full md:mx-0'>
            <div className='inline-flex items-center space-x-4'>
              <h2 className='text-md text-gray-400'>Criar degree</h2>
            </div>
          </div>
        </div>
        <div className='space-y-6 bg-white rounded-b-xl'>
          <div className='items-center w-full p-4 space-y-4 text-gray-500 md:inline-flex md:space-y-0'>
            <h2 className='max-w-sm mx-auto md:w-1/3'>Instituição</h2>
            <div className='max-w-sm mx-auto space-y-5 md:w-2/3'>
              <div>
                <div className=' relative '>
                  <input
                    type='text'
                    className=' rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent'
                    placeholder='Nome da instituição'
                    {...register('institution')}
                  />
                  <p>{errors?.institution?.message}</p>
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
            </div>
          </div>
          <hr />
          <div className='items-center w-full p-4 space-y-4 text-gray-500 md:inline-flex md:space-y-0'>
            <h2 className='max-w-sm mx-auto md:w-1/3'>Curso</h2>
            <div className='max-w-sm mx-auto space-y-5 md:w-2/3'>
              <div>
                <div className=' relative '>
                  <input
                    type='text'
                    className=' rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent'
                    placeholder='Graduação'
                    {...register('degree')}
                  />
                  <p>{errors?.degree?.message}</p>
                </div>
              </div>
              <div>
                <div className=' relative '>
                  <input
                    type='text'
                    className=' rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent'
                    placeholder='Título'
                    {...register('subject')}
                  />
                  <p>{errors?.subject?.message}</p>
                </div>
              </div>
              <div>
                <div className=' relative '>
                  <input
                    type='text'
                    className=' rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent'
                    placeholder='Data início'
                    {...register('begin')}
                  />
                  <p>{errors?.begin?.message}</p>
                </div>
              </div>
              <div>
                <div className=' relative '>
                  <input
                    type='text'
                    className=' rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent'
                    placeholder='Data fim'
                    {...register('end')}
                  />
                  <p>{errors?.end?.message}</p>
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

export default CreateDegree
