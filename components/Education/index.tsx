import { useGet } from 'hooks/api'
import React from 'react'
import EducationItem from './EducationItem'

const Education = () => {
  const { data: education } = useGet('http://localhost:3001/education')
  if (education) {
    return (
      <div>
        <h3 className=' text-dourado text-2xl font-bold text-center uppercase mt-16 mb-5'>
          My Education
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
