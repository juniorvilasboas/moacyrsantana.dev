import React from 'react'
import Hero from '../components/Hero'
import Summary from '../components/Summary'
import Education from '../components/Education'
import Repos from '../components/Repos'
import Ports from '../components/Ports'

const Index = ({ degrees, repos, user, ports, month }) => {
  return (
    <>
      <Hero month={month} />
      <Summary />
      <Education degrees={degrees} />
      <Ports portifolios={ports} />
    </>
  )
}

export async function getServerSideProps(context) {
  /*const request = await fetch(process.env.API_URL + '/getUser')
  const { repos, user } = await request.json()*/
  const educRequest = await fetch(process.env.API_URL + '/education')
  const { degrees } = await educRequest.json()
  const portRequest = await fetch(process.env.API_URL + '/portifolio')
  const { ports } = await portRequest.json()

  return {
    props: {
      month: new Date().getMonth(),
      degrees,
      /*repos,
      user*/
      ports
    }
  }
}

export default Index
