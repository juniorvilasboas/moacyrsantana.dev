import React from 'react'
import { useGet } from 'hooks/api'
import { format } from 'date-fns'
import Page from 'components/Page'

const Experience = () => {
  const { data: experiences } = useGet('/api/experience')
  return (
    <div>
      <Page title='Experience' />
      <div className='md:grid lg:grid-cols-2 md:mx-auto'>
        {experiences &&
          experiences.map((experience: any) => (
            <div
              key={experience.id}
              className='flex bg-white dark:bg-gray-600 rounded-lg shadow-xl md:mx-4 lg:mr-6 mb-4'
            >
              <div className='flex-auto py-4 px-4'>
                <div className='relative flex flex-wrap'>
                  <h1 className='text-dourado text-xs md:text-lg capitalize font-bold flex-auto dark:text-white'>
                    {experience.role}
                  </h1>
                  <span className='absolute right-0 text-xs lg:text-sm dark:text-white'>
                    {format(new Date(experience.begin), 'MM/dd/yyyy')} -{' '}
                    {experience.end
                      ? format(new Date(experience.end), 'MM/dd/yyyy')
                      : 'In Progress'}
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
