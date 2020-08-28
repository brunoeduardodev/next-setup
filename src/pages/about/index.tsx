import Head from 'next/head'
import React from 'react'

import ExampleComponent from '@components/ExampleComponent'

import { Container } from '@styles/Home'

import RocketseatLogo from '../../assets/rocketseat.svg'

const Home: React.FC = () => {
  return (
    <Container>
      <Head>
        <title>Homepage</title>
      </Head>

      <RocketseatLogo />
      <h1>ReactJS Structure</h1>
      <p>An about Page </p>
      <ExampleComponent />
    </Container>
  )
}

export default Home
