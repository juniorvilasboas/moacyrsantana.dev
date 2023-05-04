// https://devicon.dev/

const SkilImage = ({ item, css }: any) => {
  return (
    <img
      className={`bg-gray-100 rounded-lg ${css}`}
      alt={item.name}
      src={`https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${item.name}/${item.name}-${item.ext}.svg`}
    />
  )
}

export default SkilImage
