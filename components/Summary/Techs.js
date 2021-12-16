import React from 'react'

import { FaGithub } from 'react-icons/fa';
import { SiJavascript, SiHtml5, SiNodedotjs, SiReact, SiCss3 } from 'react-icons/si';

const Techs = () => {
  return (
    <div className='relative border-2 rounded-xl shadow-lg px-8 md:px-14 pb-4 pt-10 mt-6'>
      <h3 className='absolute text-xl py-1 px-6 top-0 -mt-6 bg-white border-2 inline-block rounded-xl font-bold'>Techs</h3>
      <p className='grid grid-cols-4'>
        <a href='https://www.javascript.com/' target='_blank' className='mb-4'><SiJavascript className='text-3xl hover:text-dourado inline-block' /></a>
        <a href='https://reactjs.org/' target='_blank' className='mb-4'><SiReact className='text-3xl hover:text-dourado inline-block mr-6' /></a>
        <a href='https://nodejs.org/' target='_blank' className='mb-4'><SiNodedotjs className='text-3xl hover:text-dourado inline-block mr-6' /></a>
        <a href='https://github.com' target='_blank' className='mb-4'><FaGithub className='text-3xl hover:text-dourado inline-block mr-6' /></a>
        <a href='#' target='_blank' className='mb-4'><SiHtml5 className='text-3xl hover:text-dourado inline-block mr-6' /></a>
        <a href='#' target='_blank' className='mb-4'><SiCss3 className='text-3xl hover:text-dourado inline-block mr-6' /></a>
      </p>
    </div>
  )
}

export default Techs