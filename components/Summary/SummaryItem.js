import React from 'react'

const SummaryItem = ({ item }) => {
  return (
    <p className='text-2xl pt-2 px-4 md:px-16 font-bold'>{item.title}</p>
  )
}

export default SummaryItem