import { useEffect } from 'react'
import { useForm, SubmitHandler } from 'react-hook-form'
import { useRouter } from 'next/router'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'

import { post } from 'lib/fetch'
import { useGet } from 'hooks/api'

import HeaderForm from 'components/Header/form'
import Form from 'components/Form'
import Input from 'components/Input/input'

const informationSchema = yup
  .object({
    phone: yup.string().required('Informe um telefone'),
    address: yup.string().required('Informe um endereço'),
    city: yup.string().required('Informe uma cidade'),
    country: yup.string().required('Informe o país'),
    cep: yup.string().required('Informe o código postal')
  })
  .required()

interface NewInformationForm {
  phone: string
  address: string
  city: string
  country: string
  cep: string
}

const CreateInformation = () => {
  const router = useRouter()
  const count = useGet('/api/information')

  useEffect(() => {
    if (count?.data?.length !== 0) {
      router.push('/panel/information')
    }
  }, [router, count])

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors }
  } = useForm<NewInformationForm>({
    resolver: yupResolver(informationSchema)
  })

  const onSubmit: SubmitHandler<NewInformationForm> = async (inputs) => {
    const data = await post({
      url: '/api/information',
      data: inputs
    })
    router.push(`/panel/information`)
  }

  return (
    <>
      <HeaderForm name='information' />

      <Form onSubmit={handleSubmit(onSubmit)} title={'information'}>
        <Form.Brand>
          <Form.BrandItem title={'Personal'}>
            <Input
              name='phone'
              placeholder='phone'
              register={register}
              errors={errors?.phone}
            />
          </Form.BrandItem>
          <hr />
          <Form.BrandItem title={'Dwelling'}>
            <Input
              name='address'
              placeholder='address'
              register={register}
              errors={errors?.address}
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
            <Input
              name='cep'
              placeholder='postal code'
              register={register}
              errors={errors?.cep}
            />
          </Form.BrandItem>
          <hr />
          <Form.Button>Save</Form.Button>
        </Form.Brand>
      </Form>
    </>
  )
}

export default CreateInformation
