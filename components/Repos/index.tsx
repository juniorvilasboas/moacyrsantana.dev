import React from 'react'

import UserStats from './UserStats'
import Repo from './Repo'

const Repos = ({ repos, user }: any) => {
  return (
    <div>
      <h3 className='text-dourado text-2xl font-bold text-center uppercase mt-16'>
        Github Repositories
      </h3>
      <UserStats user={user} />
      <div className='md:grid md:grid-cols-2 lg:grid-cols-3 mx-auto shadow-lg rounded-xl pb-6'>
        {repos.map((repo: any) => {
          return <Repo key={repo.id} repo={repo} />
        })}
      </div>
    </div>
  )
}

export default Repos
