import { format } from 'date-fns'
import Link from 'next/link'
import React from 'react'

const Education = ({ degrees }) => {
  return (
    <div>
      <h3 className=' text-dourado text-2xl font-bold text-center uppercase mt-16 mb-5'>
        My Education
      </h3>
      <div className='md:grid mx-auto leading-none divide-y'>
        {degrees.map((degree, i) => (
          <div className='mx-auto border inline-flex grid-cols-2 divide-x rounded-xl shadow-lg mb-4'>
            <div className='py-6 px-2 w-32 text-right text-sm md:text-lg font-bold'>
              {format(new Date(degree.begin), 'YYY')}
              <br />
              {degree.end ? format(new Date(degree.end), 'YYY') : 'In progress'}
            </div>
            <div className='py-6 px-8 w-full md:w-96'>
              <h4 className='text-dourado text-sm md:text-lg uppercase font-bold'>
                {degree.degree}
              </h4>
              <p className='text-base md:text-xl uppercase mb-4'>
                {degree.subject} <br />
                <span className='text-base md:text-lg normal-case font-bold'>
                  {degree.institution}
                </span>
              </p>
              {degree.site && (
                <Link href={degree.site}>
                  <a className='text-dourado hover:underline' target='_blank'>
                    Web Site
                  </a>
                </Link>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export async function getServerSideProps(context) {
  const educRequest = await fetch(process.env.API_URL + '/education')
  const { degrees } = await educRequest.json()

  return {
    props: {
      degrees
    }
  }
}

export default Education
