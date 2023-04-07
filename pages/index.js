import React, { useRef, useEffect } from 'react'

import Head from 'next/head'
import Image from 'next/image'


import HomePage from "/Components/HomePage/HomePage"
import NavBar from '/Components/HomePage/NavBar'

export default function Home() {
  return (
    <>
      <Head>
        <title>Flipper&apos;s Portfolio</title>
        <meta name="description" content="Flippergail&apos;s official portfolio made using Next.js + Tailwind" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/Images/FlipperPFP.png" />
      </Head>
      <main className='select-none' >
        <NavBar/>
        <HomePage/>
      </main>
    </>
  )
}