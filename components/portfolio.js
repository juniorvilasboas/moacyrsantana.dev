import React from 'react'

const Portfolio = () => {
  return (
    <div id='port'>
      <h3 className='text-dourado text-2xl font-bold text-center uppercase mt-16 mb-5'>Portfolios</h3>
      <div className='md:grid md:grid-cols-3 bg-white w-4/5 mx-auto leading-none shadow-lg rounded-xl p-2 md:p-6'>
        {[1,2,3,4].map( i => (
          <div className='px-8 md:px-10 shadow-lg w-4/5 mx-auto my-8 rounded-xl'>
            <a href='' target='_blank' className='w-full'>
              <img src='/images/layout-base.png' className='w-full' />
              <h4 className='text-center mt-8 pb-6'>Nome do site</h4>
            </a>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Portfolio