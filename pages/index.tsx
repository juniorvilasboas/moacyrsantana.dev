import type { NextPage } from 'next'
import Hero from 'components/Hero'
import Summary from 'components/Summary'
import Education from 'components/Education'
import Ports from 'components/Ports'
import Repos from 'components/Repos'

const Home: NextPage = () => {
  return (
    <>
      <Hero />
      <Summary />
      <Education />
      {
        //<Repos />
      }
      <Ports />
    </>
  )
}

export default Home
