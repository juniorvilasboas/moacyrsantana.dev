interface Props {
  children: string
}
const Title = ({ children }: Props) => {
  return <h3 className='text-gray-700 text-3xl font-medium mb-4'>{children}</h3>
}

export default Title
