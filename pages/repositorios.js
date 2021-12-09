import React from 'react'
import getUser from '../utils/getUser'

const Index = ({ repos, user }) => {
  return (
    <div className='container mx-auto'>
      <h1 className='text-5xl'>Meus repositorios, eu sou o Moacyr Santana</h1>
      <p>Github stats: Public Repos: {user.public_repos} / Public Gists: {user.public_gists} / Followers: {user.followers}</p>
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