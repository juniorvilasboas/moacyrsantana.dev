import React from 'react'
import getUser from '../utils/getUser'
import PageHead from '../components/PageHead'
import Hero from '../components/Hero';
import Summary from '../components/Summary';
import Education from '../components/Education';
import Repos from '../components/Repos';
import Ports from '../components/Ports';
import Footer from '../components/Footer';

const Index = ({ repos, user, month, year }) => {
  return (
    <div id='home'>
      <PageHead />
      
      <div className='container mx-auto'>
        <Hero month={month} />
        <Summary />
        <Education />
        {/*<Repos repos={repos} user={user} />*/}
        <Ports />
      </div>

      <Footer year={year} />
    </div>
  )
}

export async function getServerSideProps(context) {
  const { repos, user } = await getUser('juniorvilasboas')

  return {
    props: {
      year: new Date().getFullYear(),
      month: new Date().getMonth(),
      //repos,
      //user
    }
  }
}

export default Index