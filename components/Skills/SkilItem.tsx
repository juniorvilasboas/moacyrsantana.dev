import Link from 'next/link'

// https://devicon.dev/

const SkilItem = ({ item, css }: any) => {
  return (
    <Link
      href={`https://` + item.site}
      passHref
      target='_blank'
      rel='noreferrer'
      className='mb-4'
    >
      <img
        className={css}
        src={`https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${item.name}/${item.name}-${item.ext}.svg`}
      />
    </Link>
  )
}

export default SkilItem
