import { useGet } from 'hooks/api'
import Repo from './Repo'
import UserStats from './UserStats'

const Repos = () => {
  const { data } = useGet('/api/reposition')
  return (
    <div>
      <h3 className='text-dourado text-xl md:text-2xl font-bold text-center uppercase mt-16'>
        Github Repositories
      </h3>
      <UserStats user={data?.user} />
      <div className='md:grid md:grid-cols-2 lg:grid-cols-3 mx-auto shadow-lg rounded-xl pb-6'>
        {data?.repos.map((repo: any) => {
          return <Repo key={repo.id} repo={repo} />
        })}
      </div>
    </div>
  )
}

export default Repos
