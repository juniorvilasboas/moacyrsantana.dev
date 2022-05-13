import { useGet } from 'hooks/api'
import React from 'react'
import TechItem from './TechItem'

const Techs = () => {
  const { data: techs } = useGet(
    'https://moacyrsantana-dev-arsg9zu95-moacyr.vercel.app/tech'
  )
  return (
    <div className='relative border-2 rounded-xl shadow-lg px-8 md:px-14 pb-4 py-10 mt-6'>
      <h3 className='absolute text-xl py-1 px-6 top-0 -mt-6 bg-white border-2 inline-block rounded-xl font-bold'>
        Techs
      </h3>
      <p>
        <span className='text-xl font-bold py-1 px-6 -ml-6 border-2 rounded-xl'>
          FrontEnd
        </span>
        <div className='grid grid-cols-5 my-8'>
          {techs &&
            techs
              .filter((tech: any) => tech.tipo === 'front')
              .map((tech: any) => (
                <TechItem
                  key={tech.id}
                  item={tech}
                  css='h-12 inline-block mr-6'
                />
              ))}
        </div>
        <span className='text-xl font-bold py-1 px-6 -ml-6 border-2 rounded-xl'>
          BackEnd
        </span>
        <div className='grid grid-cols-5 my-8'>
          {techs &&
            techs
              .filter((tech: any) => tech.tipo === 'back')
              .map((tech: any) => (
                <TechItem
                  key={tech.id}
                  item={tech}
                  css='h-12 inline-block mr-6'
                />
              ))}
        </div>
        <span className='text-xl font-bold py-1 px-6 -ml-6 border-2 rounded-xl'>
          Banco de dados
        </span>
        <div className='grid grid-cols-5 my-8'>
          {techs &&
            techs
              .filter((tech: any) => tech.tipo === 'banco')
              .map((tech: any) => (
                <TechItem
                  key={tech.id}
                  item={tech}
                  css='h-12 inline-block mr-6'
                />
              ))}
        </div>
      </p>
    </div>
  )
}

export default Techs
