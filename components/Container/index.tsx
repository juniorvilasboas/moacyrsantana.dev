interface Props {
  children: React.ReactNode
}

const Container = ({ children }: Props) => {
  return (
    <div className='container mx-auto px-4 sm:px-8 max-w-4xl'>
      <div className='py-8'>{children}</div>
    </div>
  )
}

export default Container
