import Image from 'next/image'

const Img = ({ src, alt, w, h, css }) => {
  return <Image src={src} alt={alt} width={w} height={h} className={css} />
}

export default Img
