import React, { useEffect } from 'react'

import Head from 'next/head'
import Image from 'next/image'

import NavBar from '/Components/HomePage/NavBar'
import HomePage from "/Components/HomePage/HomePage"
import ProjectsPage from '/Components/ProjectsPage/ProjectsPage'
import ExperiencePage from '/Components/ExperiencePage/ExperiencePage'
import AboutPage from '/Components/AboutPage/AboutPage'

const Projects = require('/Components/ProjectsPage/Projects.js');
const sections = [{title: "Home"}, ...Projects];

export default function Home() {
  useEffect(() => {
    const handleScroll = () => {
      sections.forEach((section) => {
        const element = document.getElementById(section.title);
        const { top } = element.getBoundingClientRect();
        const scale = Math.max(0, 1 - top / window.innerHeight);
        element.style.transform = `scale(${scale})`;
      });
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <>
      <Head>
        <title>Flipper&apos;s Portfolio WIP</title>
        <meta name="description" content="Flippergail&apos;s official portfolio made using Next.js + Tailwind + react-three-fiber" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/Images/FlipperPFP.png" />
      </Head>
      <main className='bg-[#540083] select-none w-full overflow-hidden'>
        <NavBar/>
        <HomePage/>
        <ProjectsPage/>
      </main>
    </>
  )
}

export async function getServerSideProps() {
  const data = "This is some data from the server";
  return {
    props: {
      data,
    },
  };
}