import Link from 'next/link'
import { useForm, SubmitHandler } from 'react-hook-form'
import { post } from 'lib/fetch'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { useRouter } from 'next/router'

const techSchema = yup
  .object({
    name: yup.string().required('Informe uma nome'),
    site: yup.string(),
    ext: yup.string().required('Informe uma extensão'),
    tipo: yup.string().required('Informe o tipo')
  })
  .required()

interface NewTechForm {
  name: string
  site: string
  ext: string
  tipo: string
}

const CreateTech = () => {
  const router = useRouter()
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors }
  } = useForm<NewTechForm>({
    resolver: yupResolver(techSchema)
  })

  const onSubmit: SubmitHandler<NewTechForm> = async (inputs) => {
    const data = await post({
      url: `https://moacyrsantana-dev-api.vercel.app/tech`,
      data: inputs
    })
    router.push(`/panel/tech`)
  }

  return (
    <>
      <div className='grid md:grid-cols-2'>
        <h1 className='text-4xl font-semibold text-gray-800 dark:text-white'>
          Gerenciador de Tecnologias
        </h1>
        <div className='flex items-center mt-4'>
          <button className='w-full text-base font-medium text-black hover:bg-gray-100 px-4 py-2 rounded-xl cursor-default'></button>
          <Link href={`/panel/techs`} passHref>
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
              <h2 className='text-md text-gray-400'>Criar tech</h2>
            </div>
          </div>
        </div>
        <div className='space-y-6 bg-white rounded-b-xl'>
          <div className='items-center w-full p-4 space-y-4 text-gray-500 md:inline-flex md:space-y-0'>
            <h2 className='max-w-sm mx-auto md:w-1/3'>Tecnologia</h2>
            <div className='max-w-sm mx-auto space-y-5 md:w-2/3'>
              <div>
                <div className=' relative '>
                  <input
                    type='text'
                    className=' rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent'
                    placeholder='Nome da tecnologia'
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
                    placeholder='Extensão'
                    {...register('ext')}
                  />
                  <p>{errors?.ext?.message}</p>
                </div>
              </div>
              <div>
                <div className=' relative '>
                  <input
                    type='text'
                    className=' rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent'
                    placeholder='Tipo'
                    {...register('tipo')}
                  />
                  <p>{errors?.tipo?.message}</p>
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

export default CreateTech
