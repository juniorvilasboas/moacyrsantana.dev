import Image from 'next/image'
import React, { useState } from 'react'

interface Props {
  name: string
  register: any
  errors?: any
}

const Password = ({ name, register, errors }: Props) => {
  const [showPassword, setShowPassword] = useState(false)
  const [password, setPassword] = useState('')

  const togglePasswordVisibility = () => {
    setShowPassword((prevState) => !prevState)
  }

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value)
  }

  return (
    <>
      <div className='w-full mt-2 lg:mt-5 md:mb-0'>
        <label
          className='block uppercase tracking-wide text-grey-darker text-xs font-bold ml-1'
          htmlFor={name}
        >
          {name}
        </label>
        <div className='relative inline-block w-full'>
          <input
            id={name}
            type={showPassword ? 'text' : 'password'}
            value={password}
            placeholder='*********'
            className={
              'rounded-lg border-transparent appearance-none border border-gray-300 w-full py-2 px-4 pr-8 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-padrao focus:border-transparent'
            }
            {...register(name, {
              onChange: (e: any) => handlePasswordChange(e)
            })}
          />
          <div
            className='absolute right-0 top-0 h-full p-3 cursor-pointer'
            onClick={togglePasswordVisibility}
          >
            <Image
              src='https://tuk-cdn.s3.amazonaws.com/can-uploader/sign_in-svg5.svg'
              alt='viewport'
              width='19'
              height='19'
            />
          </div>
        </div>
      </div>
      <p className='text-red-500 text-xs italic'>{errors && errors.message}</p>
    </>
  )
}

export default Password
