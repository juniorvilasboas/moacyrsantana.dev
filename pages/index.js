import React from 'react'
import Hero from '../components/Hero'
import Summary from '../components/Summary'
import Education from '../components/Education'
import Repos from '../components/Repos'
import Ports from '../components/Ports'

const Index = ({ month, techs, degrees, repos, user, ports }) => {
  return (
    <>
      <Hero month={month} />
      <Summary techs={techs} />
      <Education degrees={degrees} />
      <Ports portifolios={ports} />
    </>
  )
}

export async function getServerSideProps(context) {
  //const request = await fetch(process.env.API_URL + '/repos')
  //const { repos, user } = await request.json()
  const educRequest = await fetch(process.env.API_URL + '/education')
  const { degrees } = await educRequest.json()
  const portRequest = await fetch(process.env.API_URL + '/portifolio')
  const { ports } = await portRequest.json()
  const techRequest = await fetch(process.env.API_URL + '/tech')
  const { tech } = await techRequest.json()

  console.log(tech)

  return {
    props: {
      month: new Date().getMonth(),
      techs: tech,
      degrees,
      //repos,
      //user,
      ports
    }
  }
}

export default Index
