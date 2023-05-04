interface Props {
  name: string
  placeholder: string
  type?: string
  min?: string
  register: any
  errors?: any
}

const Input = ({
  name,
  placeholder,
  type = 'text',
  min = '2000-01-01',
  register,
  errors,
  ...rest
}: Props) => {
  let data = new Date()
  let ano = data.getFullYear()
  let mes = ('0' + (data.getMonth() + 1)).slice(-2)
  let dia = ('0' + data.getDate()).slice(-2)
  let dataFormatada = ano + '-' + mes + '-' + dia

  return (
    <>
      <div className='w-full mt-2 lg:mt-5 md:mb-0'>
        <label
          className='block uppercase tracking-wide text-grey-darker text-xs font-bold ml-1'
          htmlFor={name}
        >
          {name}
        </label>
        <input
          id={name}
          name={name}
          placeholder={placeholder}
          type={type}
          min={min}
          max={dataFormatada}
          className={`rounded-lg border-transparent appearance-none border border-gray-300 w-full py-2 px-4 pr-8 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-padrao focus:border-transparent
            ${
              name === 'site' || type === 'email' || type === 'date'
                ? ''
                : 'capitalize'
            }`}
          {...register(name)}
          {...rest}
        />
        <p className='text-red-500 text-xs italic'>
          {errors && errors.message}
        </p>
      </div>
    </>
  )
}

export default Input
