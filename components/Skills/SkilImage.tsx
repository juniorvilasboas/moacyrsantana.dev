// https://devicon.dev/

import Image from 'next/image'

const SkilImage = ({ item, css }: any) => {
  return (
    <Image
      className={`bg-gray-100 rounded-lg ${css}`}
      alt={item.name}
      src={`https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${item.name}/${item.name}-${item.ext}.svg`}
      width={24}
      height={24}
    />
  )
}

export default SkilImage
