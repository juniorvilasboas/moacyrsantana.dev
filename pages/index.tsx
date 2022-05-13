import type { NextPage } from 'next'
import Hero from 'components/Hero'
import Summary from 'components/Summary'
import Education from 'components/Education'
import Ports from 'components/Ports'
import Repos from 'components/Repos'

const Home: NextPage = ({ repos, user }: any) => {
  return (
    <>
      <Hero />
      <Summary />
      <Education />
      {repos && <Repos repos={repos} user={user} />}
      <Ports />
    </>
  )
}

//@ts-ignore
export async function getServerSideProps(context) {
  /*const { repos, user } = await (
    await fetch(`${process.env.API_LOCAL}/api/reposition`)
  ).json()*/

  return {
    props: {
      //repos,
      //user
    }
  }
}

export default Home
