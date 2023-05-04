import { useGet } from 'hooks/api'
import Link from 'next/link'
import EducationItem from './EducationItem'

const Education = () => {
  const { data: educations } = useGet('/api/education')
  if (educations && educations.length > 0) {
    return (
      <div>
        <h3 className='text-dourado text-xl md:text-2xl font-bold text-center uppercase mt-16 mb-8 hover:underline'>
          <Link href={'/education'} passHref>
            My Education
          </Link>
        </h3>
        <div className='flex flex-row mb-1 sm:mb-0 ml-4 justify-between w-full'>
          <h2 className='text-xl md:text-2xl leading-tight mb-4'>Degrees</h2>
        </div>
        <div className='mb-4 md:grid md:grid-cols-2 mx-auto leading-none rounded-xl shadow-lg divide-y md:divide-y-0 md:divide-x'>
          {
            //@ts-ignore
            educations
              .filter((education: any) => education.tipo === 'Graduacao')
              .map((degree: any, i: any) => (
                <EducationItem key={i} degree={degree} />
              ))
          }
        </div>
        <div className='flex flex-row mb-1 sm:mb-0 ml-4 justify-between w-full'>
          <h2 className='text-xl md:text-2xl leading-tight mb-4'>Courses</h2>
        </div>
        <div className='md:grid md:grid-cols-2 mx-auto leading-none rounded-xl shadow-lg divide-y md:divide-y-0 md:divide-x'>
          {
            //@ts-ignore
            educations
              .filter(
                (education: any) => education.tipo === 'Profissionalizante'
              )
              .map((degree: any, i: any) => (
                <EducationItem key={i} degree={degree} />
              ))
          }
        </div>
      </div>
    )
  }

  return null
}

export default Education
