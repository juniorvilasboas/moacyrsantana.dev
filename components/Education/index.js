import React from 'react'
import EducationItem from './EducationItem'

const degrees = [
  {
    degree: 'University graduate',
    subject: 'Computer Sience',
    institution: 'UNIFACS - University of Salvador',
    site: 'https://www.unifacs.br/'
  },
  {
    degree: 'Technical Course',
    subject: 'Fullstack Master',
    institution: 'DevPleno',
    site: 'https://devpleno.com/'
  }
]

const Education = () => {
  return (
    <div id='education'>
      <h3 className=' text-dourado text-2xl font-bold text-center uppercase mt-16 mb-5'>My Education</h3>
      <div className='md:grid md:grid-cols-2 mx-auto leading-none rounded-xl shadow-lg divide-y md:divide-y-0 md:divide-x'>
        {degrees.map((degree, i) => (
          <EducationItem key={'i', i} degree={degree} />
        ))}
      </div>
    </div>
  )
}

export default Education