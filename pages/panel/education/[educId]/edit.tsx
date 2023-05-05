import { useForm, SubmitHandler } from 'react-hook-form'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { patch } from 'lib/fetch'
import { useGet } from 'hooks/api'

import Form from 'components/Form'
import Input from 'components/Input/input'
import Select from 'react-select'
import HeaderForm from 'components/Header/form'

const degreeSchema = yup
  .object({
    tipo: yup.string().required('Informe o tipo'),
    institution: yup.string().required('Informe a instituição'),
    site: yup.string().nullable(),
    degree: yup.string().required('Informe uma graduação'),
    subject: yup.string().required('Informe um título'),
    courseload: yup.number().nullable(),
    begin: yup.date().required().typeError('Informe o início do curso'),
    check: yup.boolean().nullable(),
    end: yup.date().nullable()
  })
  .required()

interface EducationForm {
  tipo: string
  institution: string
  site: string
  degree: string
  subject: string
  courseload: number
  begin: Date
  check: Boolean
  end: Date | null
}

const EditDegree = () => {
  const router = useRouter()
  const [tipo, setTipo] = useState(false)
  const [valor, setValor] = useState('')
  const [minDate, setMinDate] = useState('')
  const [checked, setChecked] = useState(true)

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors }
  } = useForm<EducationForm>({
    resolver: yupResolver(degreeSchema)
  })

  const { data } = useGet(
    router?.query?.educId && `/api/education/${router?.query?.educId}`
  )

  useEffect(() => {
    if (data) {
      setValue('tipo', data?.tipo)
      setValue('institution', data?.institution)
      setValue('site', data?.site)
      setValue('degree', data?.degree)
      setValue('subject', data?.subject)
      setValue('courseload', data?.courseload)
      setValue('begin', data?.begin)
      setValue('check', data?.check)
      setValue('end', data?.end)
      handleChange(data?.tipo)
      if (data?.end === null) {
        setChecked(true)
      } else {
        setChecked(false)
      }
    }
  }, [data, setValue])

  const onSubmit: SubmitHandler<EducationForm> = async (inputs) => {
    if (checked) {
      inputs.end = null
    }
    console.log(inputs)
    const data = await patch({
      url: `/api/education/${router?.query?.educId}`,
      data: inputs
    })
    router.push(`/panel/education`)
  }

  const handleChange = (value: any) => {
    setValor(value)
    if (value !== null) {
      if (value === 'Graduacao') {
        setTipo(false)
      } else if (value === 'Profissionalizante') {
        setTipo(true)
      }
    } else {
      setTipo(false)
    }
  }

  const optionsTipo = [
    { value: 'Graduacao', label: 'Graduação' },
    { value: 'Profissionalizante', label: 'Profissionalizante' }
  ]

  const customStyle = {
    control: (provided: any, state: any) => ({
      ...provided,
      appearance: 'none',
      border: state.isFocused ? '1px solid #D6B21F' : '1px solid #D1D5DB',
      borderRadius: '8px',
      fontSize: '16px',
      outline: state.isFocused ? '1px solid #D6B21F' : 'none',
      width: '100%',
      padding: '2px 4px',
      placeholder: 'red'
    })
  }

  const handleDateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setMinDate(event.target.value)
  }

  return (
    <>
      <HeaderForm name='education' />
      <Form onSubmit={handleSubmit(onSubmit)} title={'education'}>
        <Form.Brand>
          <Form.BrandItem title={'Instituição'}>
            <Input
              name='institution'
              placeholder='institution'
              register={register}
              errors={errors?.institution}
            />
            <Input
              name='site'
              placeholder='john@email.com'
              register={register}
              errors={errors?.site}
            />
          </Form.BrandItem>
          <hr />
          <Form.BrandItem title={'Curso'}>
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
                {...register('tipo', {
                  onChange: (e) => handleChange(e.target.value)
                })}
              >
                <option value=''>Tipo</option>
                <option key={1} value={'Graduacao'}>
                  Graduação
                </option>
                <option key={2} value={'Profissionalizante'}>
                  Profissionalizante
                </option>
              </select>
              <p className='text-red-500 text-xs italic'>
                {errors && errors?.tipo?.message}
              </p>
            </div>
            <Input
              name='degree'
              placeholder='degree'
              register={register}
              errors={errors?.degree}
            />
            <Input
              name='subject'
              placeholder='subject'
              register={register}
              errors={errors?.subject}
            />
            {tipo &&
              (tipo ? (
                <Input
                  name='courseload'
                  placeholder='courseload'
                  register={register}
                  errors={errors?.courseload}
                />
              ) : null)}
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
                Curso em andamento
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

export default EditDegree
