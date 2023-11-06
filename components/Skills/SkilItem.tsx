import Link from 'next/link'
import SkilImage from './SkilImage'

const SkilItem = ({ skil }: any) => {
  return (
    <Link
      href={skil.site}
      passHref
      target='_blank'
      rel='noreferrer'
      className='mb-4'
    >
      <SkilImage
        key={skil.id}
        item={skil}
        css='h-10 w-10 md:h-12 md:w-12 inline-block mr-6'
      />
    </Link>
  )
}

export default SkilItem
