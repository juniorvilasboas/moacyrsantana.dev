import React from 'react'

const Index = ({ repos, user }) => {
  return (
    <div className='container mx-auto'>
      <h1 className='text-5xl'>Olá, eu sou o Moacyr Santana</h1>
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
  const resUser = await fetch('https://api.github.com/users/juniorvilasboas')
  const user = await resUser.json()
  const resRepos = await fetch('https://api.github.com/users/juniorvilasboas/repos?sort=update')
  const originalRepos = await resRepos.json()

  const dontShowRepos = [
    'juniorvilasboas/teste',
    'juniorvilasboas/juniorvilasboas'
  ]

  const isNotFork = repo => !repo.fork
  const dontShowFilter = repo => dontShowRepos.indexOf(repo.full_name) === -1
  const extractData = repo => ({
    id: repo.id,
    full_name: repo.full_name,
    language: repo.language,
    stars: repo.stargazers_count
  })
  const repos = originalRepos
                    .filter(isNotFork)
                    .filter(dontShowFilter)
                    .map(extractData)

  return {
    props: {
      currentDate: new Date().toString(),
      repos,
      user
    }
  }
}

export default Index