import React from 'react'

const PortsItem = ({ portifolio }) => {
  return (
    <div className='px-8 md:px-2 lg:px-10 shadow-lg w-3/4 sm:w-1/2 md:w-3/4 lg:w-3/4 mx-auto my-8 rounded-xl'>
      <a href={portifolio.site} target='_blank' className='w-full'>
        <img src={portifolio.layout} className='w-full h-36' />
      </a>
        <h4 className='text-center mt-8 pb-6'>{portifolio.name}</h4>
    </div>
  )
}

export default PortsItem