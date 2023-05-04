import Link from 'next/link'
import { useForm, SubmitHandler } from 'react-hook-form'
import { post } from 'lib/fetch'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { useRouter } from 'next/router'
import { useGet } from 'hooks/api'

import Input from 'components/Input/input'
import HeaderForm from 'components/Header/form'
import Form from 'components/Form'

const languageSchema = yup
  .object({
    name: yup.string().required('Informe o idioma'),
    levelUnderstand: yup.string().required('Informe o nível de compreensão'),
    levelSpeak: yup.string().required('Informe o nível de fala'),
    levelWrite: yup.string().required('Informe o nível de escrita')
  })
  .required()

interface NewLanguageForm {
  name: string
  levelUnderstand: string
  levelSpeak: string
  levelWrite: string
}

const CreateLanguage = () => {
  const router = useRouter()
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors }
  } = useForm<NewLanguageForm>({
    resolver: yupResolver(languageSchema)
  })

  const onSubmit: SubmitHandler<NewLanguageForm> = async (inputs) => {
    const data = await post({
      url: '/api/language',
      data: inputs
    })
    router.push(`/panel/language`)
  }

  const { data: level } = useGet('/api/level?tipo=language')

  return (
    <>
      <HeaderForm name='language' />

      <Form onSubmit={handleSubmit(onSubmit)} title={'language'}>
        <Form.Brand>
          <Form.BrandItem title={'language'}>
            <Input
              name='name'
              placeholder='Name'
              register={register}
              errors={errors?.name}
            />
            <div className='w-full mt-2 lg:mt-5 md:mb-0'>
              <label
                className='block uppercase tracking-wide text-grey-darker text-xs font-bold ml-1'
                htmlFor='levelUnderstand'
              >
                Compreensão
              </label>
              <select
                id='levelUnderstand'
                className='rounded-lg border-transparent appearance-none border border-gray-300 w-full py-2 px-4 pr-8 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-dourado focus:border-transparent'
                aria-label='Default select example'
                placeholder='Compreensão'
                {...register('levelUnderstand')}
              >
                <option value=''>Escolha uma opção</option>
                {level &&
                  level.map((item: any) => (
                    <option key={item.id} value={item.id}>
                      {item.label}
                    </option>
                  ))}
              </select>
              <p className='text-red-500 text-xs italic'>
                {errors && errors?.levelUnderstand?.message}
              </p>
            </div>
            <div className='w-full mt-2 lg:mt-5 md:mb-0'>
              <label
                className='block uppercase tracking-wide text-grey-darker text-xs font-bold ml-1'
                htmlFor='levelSpeak'
              >
                Fala
              </label>
              <select
                id='levelSpeak'
                className='rounded-lg border-transparent appearance-none border border-gray-300 w-full py-2 px-4 pr-8 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-dourado focus:border-transparent'
                aria-label='Default select example'
                placeholder='Compreensão'
                {...register('levelSpeak')}
              >
                <option value=''>Escolha uma opção</option>
                {level &&
                  level.map((item: any) => (
                    <option key={item.id} value={item.id}>
                      {item.label}
                    </option>
                  ))}
              </select>
              <p className='text-red-500 text-xs italic'>
                {errors && errors?.levelSpeak?.message}
              </p>
            </div>
            <div className='w-full mt-2 lg:mt-5 md:mb-0'>
              <label
                className='block uppercase tracking-wide text-grey-darker text-xs font-bold ml-1'
                htmlFor='levelWrite'
              >
                Esrita
              </label>
              <select
                id='levelWrite'
                className='rounded-lg border-transparent appearance-none border border-gray-300 w-full py-2 px-4 pr-8 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-dourado focus:border-transparent'
                aria-label='Default select example'
                placeholder='Compreensão'
                {...register('levelWrite')}
              >
                <option value=''>Escolha uma opção</option>
                {level &&
                  level.map((item: any) => (
                    <option key={item.id} value={item.id}>
                      {item.label}
                    </option>
                  ))}
              </select>
              <p className='text-red-500 text-xs italic'>
                {errors && errors?.levelWrite?.message}
              </p>
            </div>
          </Form.BrandItem>
          <hr />
          <Form.Button>Save</Form.Button>
        </Form.Brand>
      </Form>
    </>
  )
}

export default CreateLanguage
