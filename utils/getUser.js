const getUser = async(username) => {
  const resUser = await fetch('https://api.github.com/users/'+username)
  const user = await resUser.json()
  const resRepos = await fetch(`https://api.github.com/users/${username}/repos?sort=update`)
  const originalRepos = await resRepos.json()

  const dontShowRepos = [
    'juniorvilasboas/teste',
    'juniorvilasboas/juniorvilasboas'
  ]

  const isNotFork = repo => !repo.fork
  const dontShowFilter = repo => dontShowRepos.indexOf(repo.full_name) === -1
  const extractData = repo => ({
    id: repo.id,
    usuario: username,
    name: repo.name,
    language: repo.language,
    stargazers_count: repo.stargazers_count
  })
  const repos = originalRepos
                    .filter(isNotFork)
                    .filter(dontShowFilter)
                    .map(extractData)
  
  return {
    repos, user
  }
}

export default getUser