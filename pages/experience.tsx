import React from 'react'
import { useGet } from 'hooks/api'

const Experience = () => {
  const { data: experiences } = useGet('/api/experience')
  return (
    <div>
      <h3 className=' text-dourado text-2xl font-bold text-center uppercase mt-16 mb-8'>
        My Experience
      </h3>
      <div className='md:grid lg:grid-cols-2 mx-auto'>
        {experiences &&
          experiences.map((experience: any) => (
            <div
              key={experience.id}
              className='flex bg-white dark:bg-gray-800 rounded-lg shadow-xl md:mx-4 lg:mr-6 mb-4'
            >
              <div className='flex-auto py-4 px-4'>
                <div className='relative flex flex-wrap'>
                  <h1 className='text-dourado text-xs md:text-lg uppercase font-bold flex-auto dark:text-gray-50'>
                    {experience.role}
                  </h1>
                  <span className='absolute right-0 text-xs lg:text-sm'>
                    {experience.begin} -{' '}
                    {experience.end ? experience.end : 'In Progress'}
                  </span>
                </div>
                <div className='flex text-xs md:text-base'>
                  <p className='font-bold'>{experience.company}</p>
                </div>
                <div className='flex text-xs md:text-base capitalize'>
                  {experience.type}&nbsp;- &nbsp;
                  <span>
                    {experience.city} / {experience.country}
                  </span>
                </div>
                <br />
                <div className='flex text-xs md:text-base'>
                  {experience.description}
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  )
}

export default Experience
