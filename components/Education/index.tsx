import { useGet } from 'hooks/api'
import Link from 'next/link'
import React from 'react'
import EducationItem from './EducationItem'

const Education = () => {
  const { data: education } = useGet('/api/education')
  if (education && education.length > 0) {
    return (
      <div>
        <h3 className=' text-dourado text-2xl font-bold text-center uppercase mt-16 mb-5 hover:underline'>
          <Link href={'/education'} passHref>
            My Education
          </Link>
        </h3>
        <div className='md:grid md:grid-cols-2 mx-auto leading-none rounded-xl shadow-lg divide-y md:divide-y-0 md:divide-x'>
          {
            //@ts-ignore
            education.map((degree, i) => (
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
