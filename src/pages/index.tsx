import Head from 'next/head'
import Link from 'next/link'
import React from 'react'

import { Container } from '@styles/index'

const Home: React.FC = () => {
  return (
    <Container>
      <Head>
        <title>Homepage</title>
      </Head>

      <h1>ReactJS Structure</h1>
      <p>
        A ReactJS + Next.js structure made by Rocketseat, (and improved by
        brunoeduardodev).
      </p>
    </Container>
  )
}

export default Home
