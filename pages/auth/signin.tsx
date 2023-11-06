import { signIn } from 'next-auth/react'
import Link from 'next/link'
import { useForm, SubmitHandler } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'

import Button from 'components/Button'
import Input from 'components/Input/input'
import InputPassword from 'components/Input/inputPassword'
import { useGet } from 'hooks/api'
import Image from 'components/Image/image'

const contaSchema = yup
  .object({
    email: yup
      .string()
      .email('Informe um email válido')
      .required('Informe um email'),
    password: yup.string().required('Informe sua senha')
  })
  .required()

interface NewSigninForm {
  email: String
  password: String
}

const SignIn = () => {
  const count = useGet('/api/user?id=count')
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors }
  } = useForm<NewSigninForm>({
    resolver: yupResolver(contaSchema)
  })

  const onSubmit: SubmitHandler<NewSigninForm> = async (inputs) => {
    console.log('Signin: ', inputs)
    const res = await signIn('credentials', {
      email: inputs.email,
      password: inputs.password,
      callbackUrl: '/panel'
    })

    console.log('Signin res: ', res)
  }

  return (
    <div className='relative h-screen flex flex-col items-center justify-center'>
      <div className='bg-white rounded-md shadow-md w-auto md:w-2/3 lg:w-1/3 p-6'>
        <div className='flex items-center justify-center my-5'>
          <Link href={'/'}>
            <Image
              src='/logo_long.png'
              alt='logo'
              className='mb-4 w-48 lg:w-80'
            />
          </Link>
        </div>
        <p
          tabIndex={0}
          className='focus:outline-none text-sm lg:text-2xl font-extrabold leading-6 text-gray-800'
        >
          Login to your account
        </p>
        {count?.data?._count?.id === 0 && (
          <p
            tabIndex={0}
            className='focus:outline-none text-xs md:text-sm mt-1 lg:mt-4 font-medium leading-none text-gray-500'
          >
            Dont have account?{' '}
            <Link
              href='/auth/signup'
              className='hover:text-gain focus:text-gain focus:outline-none focus:underline hover:underline text-xs md:text-sm font-medium leading-none  text-loss cursor-pointer'
            >
              {' '}
              Sign up here
            </Link>
          </p>
        )}
        <div className='w-full flex items-center justify-between py-1 lg:py-2'>
          <hr className='w-full bg-gray-400  ' />
        </div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className='w-full px-3 mb-6 mt-3 lg:mt-5 md:mb-0'>
            <Input
              name={'email'}
              type={'email'}
              placeholder={'john@email.com'}
              register={register}
              errors={errors.email}
            />
          </div>
          <div className='w-full px-3 mb-6 mt-3 lg:mt-5 md:mb-0'>
            <InputPassword
              name={'password'}
              register={register}
              errors={errors.password}
            />
          </div>
          <div className='px-3 mt-6 lg:mt-10 mb-1 lg:mb-2'>
            <Button type='submit' tipo='padrao' w='full'>
              Login
            </Button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default SignIn
