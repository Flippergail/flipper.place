import React, { useEffect, useState, useRef } from 'react'

import Head from 'next/head'
import Image from 'next/image'

import NavBar from '/Components/HomePage/NavBar'
import HomePage from "/Components/HomePage/HomePage"
import ProjectsPage from '/Components/ProjectsPage/ProjectsPage'
import ExperiencePage from '/Components/ExperiencePage/ExperiencePage'
import AboutPage from '/Components/AboutPage/AboutPage'
import DownArrow from '/public/Images/DownArrow.svg';

const Projects = require('/Components/ProjectsPage/Projects.js');
const sections = [{title: "Home"}, ...Projects];

const downArrowPressed = () => {
  document.getElementById("Projects").scrollIntoView({behavior: "smooth"});
}
export default function Home() {
  const [showDownArrow, setShowDownArrow] = useState(true);
  
  useEffect(() => {
    let ticking = false;
    let frameId;
    
    function handleScroll() {
      // Arrow visibility logic
      if (window.scrollY > window.innerHeight - 1) {
        setShowDownArrow(false);
      } else {
        setShowDownArrow(true);
      }
      
      // Scale animations for sections
      if (!ticking) {
        frameId = requestAnimationFrame(() => {
          sections.forEach((section) => {
            const element = document.getElementById(section.title);
            if (element) {
              const { top } = element.getBoundingClientRect();
              const scale = Math.max(0, 1 - top / window.innerHeight);
              element.style.transform = `scale(${scale})`;
            }
          });
          ticking = false;
        });
        ticking = true;
      }
    }
    
    window.addEventListener("scroll", handleScroll);
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
      cancelAnimationFrame(frameId);
    };
  }, []);

  return (
    <>
      <Head>
        <title>Flipper&apos;s Portfolio WIP</title>
        <meta name="description" content="Flippergail&apos;s official portfolio made using Next.js + Tailwind" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/Images/FlipperPFP.png" />
      </Head>
      <main className='to-[#330088] from-[#81129F] bg-gradient-to-r via-[#5A178E] select-none w-full overflow-hidden'>
        <NavBar/>
        <HomePage/>
        <ProjectsPage/>
        {showDownArrow && (<button onClick={downArrowPressed} className="fixed bottom-0 right-[40%] md:right-[50%] self-center md:place-self-end
            animate-bounce text-4xl font-bold opacity-70 hover:bg-[#950EAB] rounded-full duration-300">
                <Image
                    src={DownArrow}
                    alt="Down Arrow"
                    width={64}
                    height={64}
                    priority
                />
        </button>)}
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