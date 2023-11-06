import Image from 'next/image'

interface PropsImage {
  srcImage: string
}

const imageList = ({ srcImage }: PropsImage) => {
  return (
    <div className='flex items-center'>
      {srcImage?.length !== 0 && (
        <div className='flex-shrink-0 h-10 w-16'>
          <Image
            width={600}
            height={600}
            className='h-10 w-16 rounded-xl'
            src={srcImage}
            alt=''
          />
        </div>
      )}
    </div>
  )
}

export default imageList
