import React from 'react'

import { FiUsers } from 'react-icons/fi'
import { GoGist, GoRepo } from 'react-icons/go'

const UserStats = ({ user }: any) => {
  return (
    <p className='text-center mb-5'>
      Github stats:
      <GoRepo className='inline-block' /> {user?.public_repos} /
      <GoGist className='inline-block' /> {user?.public_gists} /
      <FiUsers className='inline-block' /> {user?.followers}
    </p>
  )
}

export default UserStats
