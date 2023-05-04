import React from 'react'
import Select from 'react-select'

interface Props {
  id: string
  name: string
  register: any
  onChange: any
  errors?: any
  options: any
}

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

const selectSingle = ({
  id,
  name,
  register,
  onChange,
  errors,
  options
}: Props) => {
  return (
    <>
      <div className='w-full mb-6 mt-2 lg:mt-5 md:mb-0'>
        <label
          className='block uppercase tracking-wide text-grey-darker text-xs font-bold ml-1'
          htmlFor={name}
        >
          {name}
        </label>
        <Select
          id={id}
          name={name}
          styles={customStyle}
          isClearable
          options={options}
          onChange={onChange}
          {...register(name)}
        />
      </div>
      <p className='text-red-500 text-xs italic'>{errors && errors.message}</p>
    </>
  )
}

export default selectSingle
