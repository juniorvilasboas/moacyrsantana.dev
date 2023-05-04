import React, { useEffect } from 'react'
import { useForm, SubmitHandler } from 'react-hook-form'
import { post } from 'lib/fetch'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { useRouter } from 'next/router'
import Link from 'next/link'
import Button from 'components/Button'
import Input from 'components/Input/input'
import InputPassword from 'components/Input/inputPassword'
import { useGet } from 'hooks/api'

const userSchema = yup
  .object({
    firstName: yup.string().required('Informe seu primeiro nome'),
    lastName: yup.string().required('Informe seu sobrenome'),
    email: yup.string().email().required('Informe seu endereço de email'),
    password: yup.string().required('Informe sua senha')
  })
  .required()

interface NewUserForm {
  firstName: string
  lastName: string
  email: string
  password: string
}

const SignUp = () => {
  const router = useRouter()
  const count = useGet('/api/user?id=count')

  useEffect(() => {
    if (count?.data?._count?.id !== 0) {
      router.push('/auth/signin')
    }
  }, [router, count])

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors }
  } = useForm<NewUserForm>({
    resolver: yupResolver(userSchema)
  })

  const onSubmit: SubmitHandler<NewUserForm> = async (inputs) => {
    const data = await post({
      url: '/api/user',
      data: inputs
    })
    router.push(`/auth/signin`)
  }

  return (
    <div className='relative h-screen bg-signinFundo bg-cover flex flex-col items-center justify-center'>
      <div className='bg-white rounded-md shadow-md w-auto lg:w-1/3 p-6'>
        <div className='flex items-center justify-center my-5'>
          <img src='/logo_long.png' alt='logo' className='mb-4 w-48 lg:w-80' />
        </div>
        <p
          tabIndex={0}
          className='focus:outline-none text-2xl font-extrabold leading-6 text-gray-800'
        >
          Register for a free account
        </p>
        <div className='w-full flex items-center justify-between py-3'>
          <hr className='w-full bg-gray-400  ' />
        </div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className='lg:grid lg:grid-cols-2'>
            <div className='relative w-full px-3 mb-6 mt-5 md:mb-0'>
              <Input
                name={'firstName'}
                placeholder={'first name'}
                register={register}
                errors={errors.firstName}
              />
            </div>
            <div className='relative w-full px-3 mb-6 mt-5 md:mb-0'>
              <Input
                name={'lastName'}
                placeholder={'last name'}
                register={register}
                errors={errors.lastName}
              />
            </div>
          </div>
          <div className='relative w-full px-3 mb-6 mt-5 md:mb-0'>
            <Input
              name={'email'}
              type={'email'}
              placeholder={'john@email.com'}
              register={register}
              errors={errors.email}
            />
          </div>
          <div className='relative w-full px-3 mb-6 mt-5 md:mb-0'>
            <InputPassword
              name={'password'}
              register={register}
              errors={errors.password}
            />
          </div>
          <div className='px-3 mt-10 mb-2'>
            <Button type='submit' tipo='padrao' w='full'>
              Login
            </Button>
          </div>
        </form>
        <p className='text-center my-4'>
          <Link
            href='/auth/signin'
            className='text-loss text-sm no-underline hover:text-gain'
          >
            I already have an account
          </Link>
        </p>
      </div>
    </div>
  )
}

export default SignUp
