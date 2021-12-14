import React from 'react'
import Head from 'next/head';
import getUser from '../utils/getUser'
import { FaLinkedin, FaGithub, FaYoutube, FaStar } from 'react-icons/fa';
import { FiLink, FiUsers } from 'react-icons/fi';
import { GoGist, GoRepo } from 'react-icons/go';
import { SiJavascript, SiHtml5, SiNodedotjs, SiReact, SiCss3 } from 'react-icons/si';

const Index = ({ repos, user, year }) => {
  return (
    <div id='home'>
      <Head>
        <title>Moacyr Santana - Fullstack Developer</title>
      </Head>
      <nav id='menu' className='p-4 border-b-2'>
        <h3 className='float-left ml-56 text-2xl'>Personal</h3>
        <ul>
          <li className='mr-6'><a href='#home'>Home</a></li>
          <li className='mr-6'><a href='#education'>My Education</a></li>
          <li className='mr-6'><a href='#repos'>Repositories</a></li>
          <li className='mr-6'><a href='#port'>Portfolio</a></li>
        </ul>
      </nav>
      <div className='container mx-auto'>
        <div className='grid grid-cols-2 pt-8 mx-auto leading-none w-2/3'>
          <div className='pt-20'>
            <h1 className='text-2xl uppercase pl-14 -mb-2'>Hi! I'm</h1>
            <h1 className='text-dourado text-2xl uppercase font-bold pl-14 -mb-2 dourado'>Moacyr Santana</h1>
            <h2 className='text-2xl pl-14'>Software Engineer</h2>
            <div className='relative border border-dourado rounded-xl px-14 pb-4 pt-10 mt-6'>
              <h3 className='absolute rounded-xl bg-dourado text-white py-2 px-6 top-0 -mt-5 text-xl font-bold uppercase'>Contact me</h3>
              <p>
                <a href='http://www.linkedin.com/in/moacyrsantana' target='_black'>< FaLinkedin className='text-5xl hover:text-dourado inline-block mr-6'/></a>
                <a href='https://github.com/juniorvilasboas' target='_black'>< FaGithub className='text-5xl hover:text-dourado inline-block mr-6'/></a>
                <a href='https://www.youtube.com/channel/UC17gkRYV_f6qZJz6SBC9-lg' target='_black'>< FaYoutube className='text-5xl hover:text-dourado inline-block mr-6'/></a>
                <a href='http://www.linkedin.com/in/moacyrsantana' target='_black'>< FiLink className='text-5xl hover:text-dourado inline-block mr-6'/></a>
                <br />
                <span className='inline-block mt-4'>or drop a line: <a href='mailto:junior.vilasboas@gmail.com' className='hover:text-dourado'>junior.vilasboas@gmail.com</a></span>
              </p>
            </div>
          </div>
          <div className='realtive'>
            <img className='absolute z-10 -ml-20 h-24' src='/images/Bola-natal.png' />
            <img className='absolute ml-20 h-80 z-0' src='/images/back-network.png' />
            <img className='esquerda h-96 pt-4 ml-28' src='/images/foto.png' />
          </div>
        </div>
        <div className='rounded-xl bg-white shadow-lg mx-auto w-4/5 py-12'>
          <h3 className='text-dourado text-3xl text-center mb-8'>What I do</h3>
          <div className='grid grid-cols-2 bg-white w-4/5 mx-auto'>
            <div className='relative border-2 rounded-xl shadow-lg px-14 pb-4 pt-10 mt-6'>
              <h3 className='absolute text-xl py-1 px-6 top-0 ml-6 -mt-6 bg-white border-2 inline-block rounded-xl font-bold'>Techs</h3>
              <p className='grid grid-cols-4'>
                <a href='#' target='_blank' className='mb-4'><SiJavascript className='text-3xl hover:text-dourado inline-block' /></a>
                <a href='#' target='_blank'><SiReact className='text-3xl hover:text-dourado inline-block mr-6' /></a>
                <a href='#' target='_blank'><SiHtml5 className='text-3xl hover:text-dourado inline-block mr-6' /></a>
                <a href='#' target='_blank'><SiNodedotjs className='text-3xl hover:text-dourado inline-block mr-6' /></a>
                <a href='#' target='_blank'><SiCss3 className='text-3xl hover:text-dourado inline-block mr-6' /></a>
                <a href='#' target='_blank'><FaGithub className='text-3xl hover:text-dourado inline-block mr-6' /></a>
              </p>
            </div>
            <div>
              <p className='text-2xl pt-6 px-16 font-bold'>Fullstack Developer asdlkfjaslkdfjçaslkdfjçslakdfjçsdlk</p>
              <p className='text-2xl pt-6 px-16 font-bold'>Fullstack Developer asdlkfjaslkdfjçaslkdfjçslakdfjçsdlk</p>
            </div>
          </div>
        </div>

        <div id='education'>
          <h3 className=' text-dourado text-2xl font-bold text-center uppercase mt-16 mb-5'>My Education</h3>
          <div className='grid grid-cols-2 bg-white w-4/5 mx-auto leading-none rounded-xl shadow-lg py-6'>
            <div className='border-dashed border-l px-12 my-4'>
              <h4 className='text-dourado text-lg uppercase font-bold'>University graduate</h4>
              <p className='text-xl uppercase'>Computer Sience <br />
              <span className='text-lg normal-case font-bold hover:underline'><a href='https://www.unifacs.br/' target='_blank'>UNIFACS - University of Salvador</a></span></p>
            </div>
            <div className='border-dashed border-l px-12 my-4'>
              <h4 className='text-dourado text-lg uppercase font-bold'>Cursos</h4>
              <p className='text-xl uppercase'>Fullstack Master <br />
              <span className='text-lg normal-case font-bold hover:underline'><a href='https://devpleno.com/' target='_blank'>DevPleno</a></span></p>
            </div>
          </div>
        </div>

        {/** Repositorios */}
        <div id='repos'>
          <h3 className='text-dourado text-2xl font-bold text-center uppercase mt-16'>Github Repositories</h3>
          <p className='text-center mb-5'>Github stats: <GoRepo className='inline-block' /> {user.public_repos} / <GoGist className='inline-block' /> {user.public_gists} / <FiUsers className='inline-block' /> {user.followers}</p>
          <div className='grid grid-cols-3 bg-white w-4/5 mx-auto leading-none shadow-lg rounded-xl py-6'>
            {repos.map(repo => {
              return (
                <div className='rounded-xl'>
                  <div key={repo.id} className='rounded-xl bg-gray-200 mx-4 my-2 p-4 hover:shadow-md'>
                    <h3 className='font-bold hover:underline'><a href={'http://github.com/'+repo.full_name} target='_blank'>{repo.full_name}</a></h3>
                    <p>Language: {repo.language} / <FaStar className='inline-block' />Stars: {repo.stargazers_count}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/** Portifolios */}
        <div id='port'>
          <h3 className='text-dourado text-2xl font-bold text-center uppercase mt-16 mb-5'>Portfolios</h3>
          <div className='grid grid-cols-3 bg-white w-4/5 mx-auto leading-none shadow-lg rounded-xl p-6'>
            {[1,2,3,4].map( i => (
              <div className='px-12 shadow-lg w-4/5 mx-auto my-4 rounded-xl'>
                <a href='' target='_blank' className='w-full'>
                  <img src='/images/layout-base.png' className='w-full' />
                  <h4 className='text-center my-5'>Nome do site</h4>
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>


      <div className='footer-basic mt-10 border-t-2 drop-shadow-[0_10px_3px_rgba(0,0,0,0.25)]'>
        <footer>
            <div className='social'>
              <a href="https://www.instagram.com/moacyr.santana/" target='_blank'><i className='icon ion-social-instagram'></i></a>
              <a href="https://twitter.com/Santana_Sud" target='_blank'><i className='icon ion-social-twitter'></i></a>
              <a href="https://www.facebook.com/junior.vilasboas/" target='_blank'><i className='icon ion-social-facebook'></i></a>
            </div>
            <ul className='list-inline'>
                <li className='list-inline-item inline-block'><a href="#home" className='hover:text-dourado'>Home</a></li>
                <li className='list-inline-item inline-block'><a href="#education" className='hover:text-dourado'>My Education</a></li>
                <li className='list-inline-item inline-block'><a href="#repos" className='hover:text-dourado'>Repositories</a></li>
                <li className='list-inline-item inline-block'><a href="#port" className='hover:text-dourado'>Portfolios</a></li>
            </ul>
            <p className='copyright'>Serveware Sistemas © { year }</p>
        </footer>
      </div>
    </div>
  )
}

export async function getServerSideProps(context) {
  const { repos, user } = await getUser('juniorvilasboas')

  return {
    props: {
      year: new Date().getFullYear(),
      repos,
      user
    }
  }
}

export default Index