import { useForm, SubmitHandler } from 'react-hook-form'
import { post } from 'lib/fetch'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { useRouter } from 'next/router'
import Input from 'components/Input/input'
import HeaderForm from 'components/Header/form'
import Form from 'components/Form'
import { useState } from 'react'

const experienceSchema = yup
  .object({
    role: yup.string().required('Informe uma experiência'),
    tipo: yup.string(),
    company: yup.string().required('Informe o nome da empresa'),
    city: yup.string().required('Informe a cidade'),
    country: yup.string().required('Informe o pais'),
    description: yup.string().required('Informe uma descrição'),
    begin: yup.string().required('Informe a data de início'),
    end: yup.string().nullable()
  })
  .required()

interface NewExperienceForm {
  role: string
  tipo: string
  company: string
  city: string
  country: string
  description: string
  begin: string
  end: string
}

const CreateExperience = () => {
  const router = useRouter()
  const [minDate, setMinDate] = useState('')
  const [checked, setChecked] = useState(true)

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors }
  } = useForm<NewExperienceForm>({
    resolver: yupResolver(experienceSchema)
  })

  const onSubmit: SubmitHandler<NewExperienceForm> = async (inputs) => {
    const data = await post({
      url: '/api/experience',
      data: inputs
    })
    router.push(`/panel/experience`)
  }

  const handleDateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setMinDate(event.target.value)
  }

  return (
    <>
      <HeaderForm name='experience' />

      <Form onSubmit={handleSubmit(onSubmit)} title={'experience'}>
        <Form.Brand>
          <Form.BrandItem title={'Instituição'}>
            <Input
              name='company'
              placeholder='company'
              register={register}
              errors={errors?.company}
            />
            <Input
              name='city'
              placeholder='city'
              register={register}
              errors={errors?.city}
            />
            <Input
              name='country'
              placeholder='country'
              register={register}
              errors={errors?.country}
            />
          </Form.BrandItem>
          <hr />
          <Form.BrandItem title={'Curso'}>
            <Input
              name='role'
              placeholder='role'
              register={register}
              errors={errors?.role}
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
                placeholder='Compreensão'
                {...register('tipo')}
              >
                <option value=''>Tipo</option>
                <option key={1} value={'Onsite'}>
                  Onsite
                </option>
                <option key={2} value={'Remote'}>
                  Remote
                </option>
              </select>
              <p className='text-red-500 text-xs italic'>
                {errors && errors?.tipo?.message}
              </p>
            </div>
            <Input
              name='description'
              placeholder='description'
              register={register}
              errors={errors?.description}
            />
            <Input
              name={'begin'}
              placeholder={'10/01/2020'}
              type={'date'}
              register={register}
              //@ts-ignore
              onChange={handleDateChange}
              errors={errors.begin}
            />
            <div className='mb-[0.125rem] block min-h-[1.5rem] pl-[1.5rem]'>
              <input
                className="relative float-left -ml-[1.5rem] mr-[6px] mt-[0.15rem] h-[1.125rem] w-[1.125rem] appearance-none rounded-[0.25rem] border-[0.125rem] border-solid border-neutral-300 outline-none before:pointer-events-none before:absolute before:h-[0.875rem] before:w-[0.875rem] before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-[0px_0px_0px_13px_transparent] before:content-[''] checked:border-blue-500 checked:bg-blue-500 checked:before:opacity-[0.16] checked:after:absolute checked:after:-mt-px checked:after:ml-[0.25rem] checked:after:block checked:after:h-[0.8125rem] checked:after:w-[0.375rem] checked:after:rotate-45 checked:after:border-[0.125rem] checked:after:border-l-0 checked:after:border-t-0 checked:after:border-solid checked:after:border-white checked:after:bg-transparent checked:after:content-[''] hover:cursor-pointer hover:before:opacity-[0.04] hover:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:shadow-none focus:transition-[border-color_0.2s] focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] focus:after:absolute focus:after:z-[1] focus:after:block focus:after:h-[0.875rem] focus:after:w-[0.875rem] focus:after:rounded-[0.125rem] focus:after:content-[''] checked:focus:before:scale-100 checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:after:-mt-px checked:focus:after:ml-[0.25rem] checked:focus:after:h-[0.8125rem] checked:focus:after:w-[0.375rem] checked:focus:after:rotate-45 checked:focus:after:rounded-none checked:focus:after:border-[0.125rem] checked:focus:after:border-l-0 checked:focus:after:border-t-0 checked:focus:after:border-solid checked:focus:after:border-white checked:focus:after:bg-transparent dark:border-neutral-600 dark:checked:border-blue-500 dark:checked:bg-blue-500"
                type='checkbox'
                value=''
                id='checkboxDefault'
                defaultChecked={checked}
                onClick={() => setChecked(!checked)}
              />
              <label
                className='inline-block pl-[0.15rem] hover:cursor-pointer'
                htmlFor='checkboxDefault'
              >
                Current job
              </label>
            </div>
            {!checked && (
              <Input
                name={'end'}
                placeholder={'30/12/2020'}
                type={'date'}
                register={register}
                min={minDate}
                errors={errors.end}
              />
            )}
          </Form.BrandItem>
          <hr />
          <Form.Button>Salvar</Form.Button>
        </Form.Brand>
      </Form>
    </>
  )
}

export default CreateExperience
