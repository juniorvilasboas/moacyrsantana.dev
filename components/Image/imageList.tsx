interface PropsImage {
  srcImage: string
}

const imageList = ({ srcImage }: PropsImage) => {
  return (
    <div className='flex items-center'>
      {srcImage?.length !== 0 && (
        <div className='flex-shrink-0 h-10 w-10'>
          <img className='h-10 w-10 rounded-xl' src={srcImage} alt='' />
        </div>
      )}
    </div>
  )
}

export default imageList
