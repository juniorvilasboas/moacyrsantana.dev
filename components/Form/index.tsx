import { useForm } from 'react-hook-form'

interface Props {
  children: React.ReactNode
  onSubmit: any
  title: String
}

const Form = ({ children, onSubmit, title }: Props) => {
  return (
    <form
      onSubmit={onSubmit}
      className='container mx-auto shadow-md mt-4 rounded-xl'
    >
      <div className='p-4 bg-gray-100 border-t-2 border-indigo-400 rounded-xl bg-opacity-5'>
        <div className='max-w-sm ml-2 md:w-full md:mx-0'>
          <div className='inline-flex items-center space-x-2'>
            <h2 className='text-md text-gray-400 capitalize font-bold'>
              Register {title}
            </h2>
          </div>
        </div>
      </div>
      {children}
    </form>
  )
}

interface PropsBrand {
  children: React.ReactNode
  title?: String
}

const FormBrand = ({ children }: PropsBrand) => {
  return (
    <>
      <div className='space-y-4 bg-white rounded-b-xl'>{children}</div>
    </>
  )
}

const FormBrandItem = ({ children, title }: PropsBrand) => {
  return (
    <div className='items-center w-full p-2 space-y-4 text-gray-500 md:inline-flex md:space-y-0'>
      <h2 className='max-w-sm mx-auto md:w-1/3 text-center font-bold md:text-left uppercase'>
        {title}
      </h2>
      <div className='max-w-sm mx-auto space-y-4 md:w-2/3'>{children}</div>
    </div>
  )
}

const FormButton = ({ children }: PropsBrand) => {
  return (
    <div className='w-full p-6 ml-auto text-gray-500 md:w-1/4'>
      <button
        type='submit'
        className='py-2 px-4 bg-padrao hover:bg-padraoup focus:ring-padraoup focus:ring-offset-blue-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg '
      >
        {children}
      </button>
    </div>
  )
}

Form.Brand = FormBrand
Form.BrandItem = FormBrandItem
Form.Button = FormButton

export default Form
