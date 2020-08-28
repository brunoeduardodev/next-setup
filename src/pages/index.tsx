import Head from 'next/head'
import Link from 'next/link'
import React from 'react'

import { Container } from '@styles/Home'

import RocketseatLogo from '../assets/rocketseat.svg'

const Home: React.FC = () => {
  return (
    <Container>
      <Head>
        <title>Homepage</title>
      </Head>

      <RocketseatLogo />
      <h1>ReactJS Structure</h1>
      <p>
        A ReactJS + Next.js structure made by Rocketseat, (and improved by
        brunoeduardodev).
      </p>
      <Link href="/about">Go to about page</Link>
    </Container>
  )
}

export default Home
