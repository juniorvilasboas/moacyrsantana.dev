import Image from 'next/image'

const Img = ({ src, alt, w, h, css, fit, position, ...props }: any) => {
  return (
    <Image
      src={src}
      alt={alt}
      width={w}
      height={h}
      className={css}
      objectFit={fit}
      objectPosition={position}
      {...props}
    />
  )
}

export default Img
