import React, { useEffect } from 'react'

import Head from 'next/head'
import Image from 'next/image'

import NavBar from '/Components/HomePage/NavBar'
import HomePage from "/Components/HomePage/HomePage"
import ProjectsPage from '/Components/ProjectsPage/ProjectsPage'
import ExperiencePage from '/Components/ExperiencePage/ExperiencePage'
import AboutPage from '/Components/AboutPage/AboutPage'

export default function Home() {
  return (
    <>
      <Head>
        <title>Flipper&apos;s Portfolio WIP</title>
        <meta name="description" content="Flippergail&apos;s official portfolio made using Next.js + Tailwind + react-three-fiber" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/Images/FlipperPFP.png" />
      </Head>
      <main className='select-none'>
        <NavBar/>
        <HomePage/>
        <ProjectsPage/>
        <ExperiencePage/>
        <AboutPage/>
      </main>
    </>
  )
}