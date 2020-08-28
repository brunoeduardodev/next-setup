import React from 'react'
import Head from 'next/head'

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
    </Container>
  )
}

export default Home
