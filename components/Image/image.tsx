import Image from 'next/image'

const Img = ({ src, alt, css, position, ...props }: any) => {
  return (
    <Image
      src={src}
      alt={alt}
      width={1000}
      height={1000}
      className={css}
      objectPosition={position}
      {...props}
    />
  )
}

export default Img
