import React from 'react'
import PageHead from '../components/PageHead'
import Hero from '../components/Hero'
import Summary from '../components/Summary'
import Education from '../components/Education'
import Repos from '../components/Repos'
import Ports from '../components/Ports'
import Footer from '../components/Footer'

const Index = ({ repos, user, month, year }) => {
  return (
    <div>
      <PageHead />
      
      <div className='container mx-auto px-6 md:px-0'>
        <Hero month={month} />
        <Summary />
        <Education />
        
        <Ports />
      </div>

      <Footer year={year} />
    </div>
  )
}

export async function getServerSideProps(context) {
  console.log(process.env.API_URL)
  const request = await fetch(process.env.API_URL+'/api/getUser')
  const { repos, user } = await request.json()

  return {
    props: {
      year: new Date().getFullYear(),
      month: new Date().getMonth(),
      repos,
      user
    }
  }
}

export default Index