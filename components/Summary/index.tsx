import React from 'react'
import SummaryItem from './SummaryItem'
import Techs from '../Techs/index'

const itens = [
  {
    title: 'Fullstack Developer'
  },
  {
    title: 'Software Engineer'
  }
]

const Summary = () => {
  return (
    <div className='rounded-xl bg-white shadow-lg mx-auto py-12'>
      <h3 className='text-dourado text-3xl text-center mb-8'>What I do</h3>
      <div className='md:grid lg:grid-cols-2 bg-white mx-auto divide-y lg:divide-y-0 px-2 lg:px-6'>
        <Techs />
        <div className='mt-6 lg:mt-2'>
          {itens.map((item, i) => (
            <SummaryItem key={i} item={item} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Summary