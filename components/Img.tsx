import Image from 'next/image'

const Img = ({ src, alt, w, h, css, fit, position }: any) => {
  return (
    <Image
      src={src}
      alt={alt}
      width={w}
      height={h}
      className={css}
      objectFit={fit}
      objectPosition={position}
    />
  )
}

export default Img
