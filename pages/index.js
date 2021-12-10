import React from 'react'
import getUser from '../utils/getUser'

const Index = ({ repos, user }) => {
  return (
    <div className='container mx-auto border'>
      <div className='grid grid-cols-2 pt-16 mx-auto leading-none w-2/3'>
        <div>
          <h1 className='text-2xl uppercase'>Hi! I'm</h1>
          <h1 className='text-2xl uppercase font-bold'>Moacyr Santana</h1>
          <h2 className='text-2xl'>Software Engineer</h2>
          <h3>Contact</h3>
          <ul>
            <li>Linkedin</li>
            <li>Github</li>
            <li>Youtube</li>
          </ul>
          <p>Github stats: Public Repos: {user.public_repos} / Public Gists: {user.public_gists} / Followers: {user.followers}</p>
        </div>
        <div>
          <img className='esquerda h-64 pt-4 ml-28' src='/images/foto.png' />
        </div>
      </div>
      <div className='bg-white rounded-xl shadow-lg mx-auto w-4/5 py-12'>
        <h3 className='text-3xl text-center'>What I do</h3>
        <p className='text-2xl pt-6 px-16 font-bold'>Fullstack Developer asdlkfjaslkdfjçaslkdfjçslakdfjçsdlk</p>
        <p className='text-2xl pt-6 px-16 font-bold'>Fullstack Developer asdlkfjaslkdfjçaslkdfjçslakdfjçsdlk</p>
      </div>
      <h2 className='font-bold text-3xl'>Meus repositórios no Github</h2>
      {repos.map(repo => {
        return (
          <div key={repo.id} className='rounded bg-gray-200 mx-8 my-4 p-4 hover:shadow-md'>
            <h3 className='font-bold'>{repo.full_name}</h3>
            <p>Language: {repo.language} / Stars: {repo.stargazers_count}</p>
          </div>
        )
      })}
    </div>
  )
}

export async function getServerSideProps(context) {
  const { repos, user } = await getUser('juniorvilasboas')

  return {
    props: {
      currentDate: new Date().toString(),
      repos,
      user
    }
  }
}

export default Index