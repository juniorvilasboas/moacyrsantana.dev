import React from 'react'
import TechItem from './TechItem'

const techs = [
  { link: '#', name: 'html5', ext: 'original-wordmark', tipo: 'front'},
  { link: '#', name: 'css3', ext: 'original-wordmark', tipo: 'front'},
  { link: 'https://www.javascript.com/', name: 'javascript', ext: 'plain', tipo: 'front'},
  { link: 'https://reactjs.org/', name: 'react', ext: 'original-wordmark', tipo: 'front'},
  { link: 'https://www.typescriptlang.org/', name: 'typescript', ext: 'plain', tipo: 'front'},
  { link: 'https://nodejs.org/', name: 'nodejs', ext: 'original-wordmark', tipo: 'back'},
  { link: 'https://www.python.org/', name: 'python', ext: 'original-wordmark', tipo: 'back'},
  { link: 'https://www.php.net/', name: 'php', ext: 'plain', tipo: 'back'},
  { link: 'https://www.microsoft.com/sql-server', name: 'microsoftsqlserver', ext: 'plain-wordmark', tipo: 'banco'},
  { link: 'https://www.mysql.com/', name: 'mysql', ext: 'original-wordmark', tipo: 'banco'},
  { link: 'https://www.mongodb.com/', name: 'mongodb', ext: 'original-wordmark', tipo: 'banco'}
]

const Techs = () => {
  return (
    <div className='relative border-2 rounded-xl shadow-lg px-8 md:px-14 pb-4 py-10 mt-6'>
      <h3 className='absolute text-xl py-1 px-6 top-0 -mt-6 bg-white border-2 inline-block rounded-xl font-bold'>Techs</h3>
      <p>
        <span className='text-xl font-bold py-1 px-6 -ml-6 border-2 rounded-xl'>FrontEnd</span>
        <div className='grid grid-cols-5 my-8'>
          { techs.filter(tech => tech.tipo === 'front').map( tech => {
              return <a href={ tech.link } target='_blank' rel="noreferrer" className='mb-4'>
                <img className='h-12 inline-block mr-6' src={`https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${tech.name}/${tech.name}-${tech.ext}.svg`} />
              </a>
            })
          }
        </div>
        <span className='text-xl font-bold py-1 px-6 -ml-6 border-2 rounded-xl'>BackEnd</span>
        <div className='grid grid-cols-5 my-8'>
          { techs.filter(tech => tech.tipo === 'back').map( (tech, i) => (
              <TechItem key={'i', i} item={tech} />
            ))
          }
        </div>
        <span className='text-xl font-bold py-1 px-6 -ml-6 border-2 rounded-xl'>Banco de dados</span>
        <div className='grid grid-cols-5 my-8'>
          { techs.filter(tech => tech.tipo === 'banco').map( tech => {
              return <a href={ tech.link } target='_blank' rel="noreferrer" className='mb-4'>
                <img className='h-12 inline-block mr-6' src={`https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${tech.name}/${tech.name}-${tech.ext}.svg`} />
              </a>
            })
          }
        </div>
      </p>
    </div>
  )
}

export default Techs