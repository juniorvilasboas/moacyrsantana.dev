import React from 'react'

import { FaPhp, FaPython } from 'react-icons/fa';
import { SiTypescript, SiJavascript, SiHtml5, SiNodedotjs, SiReact, SiCss3, SiMysql, SiMongodb, SiMicrosoftsqlserver } from 'react-icons/si';

const Techs = () => {
  return (
    <div className='relative border-2 rounded-xl shadow-lg px-8 md:px-14 pb-4 py-10 mt-6'>
      <h3 className='absolute text-xl py-1 px-6 top-0 -mt-6 bg-white border-2 inline-block rounded-xl font-bold'>Techs</h3>
      <p>
        <span className='text-xl font-bold py-1 px-6 -ml-6 border-2 rounded-xl'>FrontEnd</span>
        <div className='grid grid-cols-5 my-8'>
          <a href='#' target='_blank' className='mb-4'><SiHtml5 className='text-4xl hover:text-dourado inline-block mr-6' /></a>
          <a href='#' target='_blank' className='mb-4'><SiCss3 className='text-4xl hover:text-dourado inline-block mr-6' /></a>
          <a href='https://www.javascript.com/' target='_blank' rel="noreferrer" className='mb-4'><SiJavascript className='text-4xl hover:text-dourado inline-block' /></a>
          <a href='https://reactjs.org/' target='_blank' rel="noreferrer" className='mb-4'><SiReact className='text-4xl hover:text-dourado inline-block mr-6' /></a>
          <a href='https://www.typescriptlang.org/' target='_blank' rel="noreferrer" className='mb-4'><SiTypescript className='text-4xl hover:text-dourado inline-block mr-6' /></a>
        </div>
        <span className='text-xl font-bold py-1 px-6 -ml-6 border-2 rounded-xl'>BackEnd</span>
        <div className='grid grid-cols-5 my-8'>
          <a href='https://www.php.net/' target='_blank' rel="noreferrer" className='mb-4'><FaPhp className='text-4xl hover:text-dourado inline-block mr-6' /></a>
          <a href='https://www.python.org/' target='_blank' rel="noreferrer" className='mb-4'><FaPython className='text-4xl hover:text-dourado inline-block mr-6' /></a>
          <a href='https://nodejs.org/' target='_blank' rel="noreferrer" className='mb-4'><SiNodedotjs className='text-4xl hover:text-dourado inline-block mr-6' /></a>
        </div>
        <span className='text-xl font-bold py-1 px-6 -ml-6 border-2 rounded-xl'>Banco de dados</span>
        <div className='grid grid-cols-5 my-8'>
          <a href='https://www.microsoft.com/sql-server' target='_blank' rel="noreferrer" className='mb-4'><SiMicrosoftsqlserver className='text-4xl hover:text-dourado inline-block mr-6' /></a>
          <a href='https://www.mysql.com/' target='_blank' rel="noreferrer" className='mb-4'><SiMysql className='text-4xl hover:text-dourado inline-block mr-6' /></a>
          <a href='https://www.mongodb.com/' target='_blank' rel="noreferrer" className='mb-4'><SiMongodb className='text-4xl hover:text-dourado inline-block mr-6' /></a>
        </div>
      </p>
    </div>
  )
}

export default Techs