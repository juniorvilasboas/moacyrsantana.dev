const getUser = async (username: any) => {
  const resUser = await fetch('https://api.github.com/users/' + username)
  const user = await resUser.json()
  const resRepos = await fetch(
    `https://api.github.com/users/${username}/repos?sort=update`
  )
  const originalRepos = await resRepos.json()

  const dontShowRepos = [
    'juniorvilasboas/teste',
    'juniorvilasboas/juniorvilasboas'
  ]

  const isNotFork = (repo: any) => !repo.fork
  const dontShowFilter = (repo: any) =>
    dontShowRepos.indexOf(repo.full_name) === -1
  const extractData = (repo: any) => ({
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
    repos,
    user
  }
}

export default getUser
