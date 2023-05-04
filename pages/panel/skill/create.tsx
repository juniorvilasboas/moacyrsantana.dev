import { useForm, SubmitHandler } from 'react-hook-form'
import { useRouter } from 'next/router'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'

import { post } from 'lib/fetch'
import { useGet } from 'hooks/api'

import Input from 'components/Input/input'
import HeaderForm from 'components/Header/form'
import Form from 'components/Form'

const skilSchema = yup
  .object({
    name: yup.string().required('Informe uma nome'),
    site: yup.string(),
    ext: yup.string().required('Informe uma extensão'),
    tipo: yup.string().required('Informe o tipo'),
    level: yup.string()
  })
  .required()

interface NewSkilForm {
  name: string
  site: string
  ext: string
  tipo: string
  level: string
}

const CreateSkill = () => {
  const router = useRouter()
  const { data: levels } = useGet('/api/level?tipo=skill')
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors }
  } = useForm<NewSkilForm>({
    resolver: yupResolver(skilSchema)
  })

  const onSubmit: SubmitHandler<NewSkilForm> = async (inputs) => {
    const data = await post({
      url: '/api/skill',
      data: inputs
    })
    router.push(`/panel/skill`)
  }

  return (
    <>
      <HeaderForm name='skill' />

      <Form onSubmit={handleSubmit(onSubmit)} title={'skill'}>
        <Form.Brand>
          <Form.BrandItem title={'technology'}>
            <Input
              name='name'
              placeholder='Name'
              register={register}
              errors={errors?.name}
            />
            <Input
              name='site'
              placeholder='site'
              register={register}
              errors={errors?.site}
            />
            <Input
              name='ext'
              placeholder='extension'
              register={register}
              errors={errors?.ext}
            />
            <div className='w-full mt-2 lg:mt-5 md:mb-0'>
              <label
                className='block uppercase tracking-wide text-grey-darker text-xs font-bold ml-1'
                htmlFor='tipo'
              >
                Tipo
              </label>
              <select
                id='tipo'
                className='rounded-lg border-transparent appearance-none border border-gray-300 w-full py-2 px-4 pr-8 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-dourado focus:border-transparent'
                aria-label='Default select example'
                placeholder='tipo'
                {...register('tipo')}
              >
                <option value=''>Tipo</option>
                <option value='Front-end'>Front-end</option>
                <option value='Back-end'>Back-end</option>
                <option value='Database'>Database</option>
                <option value='Framework'>Framework</option>
                <option value='Versionamento'>Versionamento</option>
              </select>
              <p className='text-red-500 text-xs italic'>
                {errors && errors?.tipo?.message}
              </p>
            </div>
            <div className='w-full mt-2 lg:mt-5 md:mb-0'>
              <label
                className='block uppercase tracking-wide text-grey-darker text-xs font-bold ml-1'
                htmlFor='level'
              >
                Level
              </label>
              <select
                id='level'
                className='rounded-lg border-transparent appearance-none border border-gray-300 w-full py-2 px-4 pr-8 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-dourado focus:border-transparent'
                aria-label='Default select example'
                placeholder='Level'
                {...register('level')}
              >
                <option value=''>Escolha uma opção</option>
                {levels &&
                  levels.map((item: any) => (
                    <option key={item.id} value={item.id}>
                      {item.label}
                    </option>
                  ))}
              </select>
              <p className='text-red-500 text-xs italic'>
                {errors && errors?.level?.message}
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

export default CreateSkill
