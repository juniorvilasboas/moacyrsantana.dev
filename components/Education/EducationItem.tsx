import React, { ReactElement } from 'react'
import Link from 'next/link'

const EducationItem = ({ degree }: any) => {
  return (
    <div className='border-dashed py-6 px-12'>
      <h4 className='text-dourado text-lg uppercase font-bold'>
        {degree.degree}
      </h4>
      <p className='text-xl uppercase mb-4'>
        {degree.subject} <br />
        <span className='text-lg normal-case font-bold'>
          {degree.institution}
        </span>
      </p>
      {degree.site && (
        <Link href={'https://' + degree.site}>
          <a
            className='text-dourado hover:underline'
            target='_blank'
            rel='noreferrer'
          >
            Web Site
          </a>
        </Link>
      )}
    </div>
  )
}

export default EducationItem
