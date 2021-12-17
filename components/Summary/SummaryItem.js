import React from 'react'

const SummaryItem = ({ item }) => {
  return (
    <p className='text-2xl ml-4 md:ml-0 pt-4 px-2 md:px-16 font-bold'>{item.title}</p>
  )
}

export default SummaryItem