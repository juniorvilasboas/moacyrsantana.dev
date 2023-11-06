import Education from 'components/Education'
import Hero from 'components/Hero'
import Ports from 'components/Ports'
import Repos from 'components/Repos'
import Summary from 'components/Summary'
import type { NextPage } from 'next'

const Home: NextPage = () => {
  return (
    <>
      <Hero />
      <Summary />
      <Education />
      <Repos />
      <Ports />
    </>
  )
}

export default Home
