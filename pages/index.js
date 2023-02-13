import Head from 'next/head'
import Image from 'next/image'

import HomePage from "/Components/HomePage/HomePage"
import NavBar from '@/Components/HomePage/NavBar'

export default function Home() {
  return (
    <>
      <Head>
        <title>Flipper's Portfolio</title>
        <meta name="description" content="Flippergail's official portfolio" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/Images/FlipperPFP.png" />
      </Head>
      <main>
        <NavBar/>
        <HomePage/>
      </main>
    </>
  )
}