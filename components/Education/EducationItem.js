import React from 'react'

const EducationItem = ({ degree }) => {
  return (
    <div className='border-dashed px-12 mb-8 md:my-4'>
      <h4 className='text-dourado text-lg uppercase font-bold'>{degree.degree}</h4>
      <p className='text-xl uppercase'>{degree.subject} <br />
      <span className='text-lg normal-case font-bold hover:underline'><a href={degree.site} target='_blank'>{degree.institution}</a></span></p>
    </div>
  )
}

export default EducationItem