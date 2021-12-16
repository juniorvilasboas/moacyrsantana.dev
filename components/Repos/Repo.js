import React from "react";

import { FaStar } from 'react-icons/fa';

const Repo = ({ repo }) => {
  return (
    <div className='rounded-xl'>
      <div key={repo.id} className='rounded-xl bg-gray-200 mx-4 my-2 p-4 hover:shadow-md'>
        <h3 className='font-bold hover:underline capitalize'><a href={'http://github.com/'+repo.usuario+'/'+repo.name} target='_blank'>{repo.name}</a></h3>
        <p>Language: {repo.language} / <FaStar className='inline-block' />Stars: {repo.stargazers_count}</p>
      </div>
    </div>
  )
}

export default Repo