interface Props {
  title: string
}

const Page = ({ title }: Props) => {
  return (
    <h3 className='text-dourado text-lg md:text-2xl font-bold text-center uppercase mt-16 mb-8'>
      My {title}
    </h3>
  )
}

export default Page
