import { useGet } from 'hooks/api'
import React from 'react'
import SkilItem from './SkilItem'

const Skills = () => {
  const { data: skills } = useGet('/api/skil')
  return (
    <div className='relative border-2 rounded-xl shadow-lg px-8 md:px-14 pb-4 py-10 mt-6'>
      <h3 className='absolute text-xl py-1 px-6 top-0 -mt-6 bg-white border-2 inline-block rounded-xl font-bold'>
        Skills
      </h3>
      <div>
        <span className='text-xl font-bold py-1 px-6 -ml-6 border-2 rounded-xl'>
          FrontEnd
        </span>
        <div className='grid grid-cols-5 my-8'>
          {skills &&
            skills
              .filter((skil: any) => skil.tipo === 'front')
              .map((skil: any) => (
                <SkilItem
                  key={skil.id}
                  item={skil}
                  css='h-12 inline-block mr-6'
                />
              ))}
        </div>
        <span className='text-xl font-bold py-1 px-6 -ml-6 border-2 rounded-xl'>
          BackEnd
        </span>
        <div className='grid grid-cols-5 my-8'>
          {skills &&
            skills
              .filter((skil: any) => skil.tipo === 'back')
              .map((skil: any) => (
                <SkilItem
                  key={skil.id}
                  item={skil}
                  css='h-12 inline-block mr-6'
                />
              ))}
        </div>
        <span className='text-xl font-bold py-1 px-6 -ml-6 border-2 rounded-xl'>
          Banco de dados
        </span>
        <div className='grid grid-cols-5 my-8'>
          {skills &&
            skills
              .filter((skil: any) => skil.tipo === 'banco')
              .map((skil: any) => (
                <SkilItem
                  key={skil.id}
                  item={skil}
                  css='h-12 inline-block mr-6'
                />
              ))}
        </div>
      </div>
    </div>
  )
}

export default Skills
