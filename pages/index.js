import React, { useEffect, useState, useRef } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import NavBar from '/Components/HomePage/NavBar';
import HomePage from '/Components/HomePage/HomePage';
import ProjectsPage from '/Components/ProjectsPage/ProjectsPage';
import ExperiencePage from '/Components/ExperiencePage/ExperiencePage';
import AboutPage from '/Components/AboutPage/AboutPage';
import DownArrow from '/public/Images/DownArrow.svg';
import Projects from '/Components/ProjectsPage/Projects';

import { Gradient } from '/Components/HomePage/Gradient.js'

const sections = [{ title: "Home" }, ...Projects];

const downArrowPressed = () => {
  document.getElementById("Projects").scrollIntoView({ behavior: "smooth" });
};

export default function Home() {
  const [showDownArrow, setShowDownArrow] = useState(true);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const mainRef = useRef(null);

  useEffect(() => {
    const sectionElements = {};
    let frameId;
    let lastScrollY = window.scrollY;
    let hueRotation = 0;

    function initializeElements() {
      if (typeof document === 'undefined') return;

      Projects.forEach(project => {
        const element = document.getElementById(project.title);
        if (element) {
          sectionElements[project.title] = element;
          element.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale(0.7)';
          element.style.opacity = '0';
          element.style.transition = 'transform 0.5s cubic-bezier(0.23, 1, 0.32, 1), opacity 0.5s ease-in-out';
          element.style.transformOrigin = 'center center';
        }
      });
    }

    function handleMouseMove(e) {
      //setMousePosition({ x: e.clientX, y: e.clientY });
    }

    function updateParallaxEffect() {
      const { x, y } = mousePosition;
      const centerX = window.innerWidth / 2;
      const centerY = window.innerHeight / 2;
      const moveX = (x - centerX) / centerX * 5;
      const moveY = (y - centerY) / centerY * 5;

      const elementsToUpdate = Object.values(sectionElements).map(element => {
        const rect = element.getBoundingClientRect();
        const proximity = 1 - Math.min(Math.abs((rect.top + rect.height / 2) - window.innerHeight / 2) / (window.innerHeight / 2), 1);
        return { element, proximity, moveX, moveY };
      });

      elementsToUpdate.forEach(({ element, proximity, moveX, moveY }) => {
        let transformValue = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale(0.7)';

        if (proximity > 0.1) {
          const rotateX = -moveY * proximity;
          const rotateY = moveX * proximity;
          transformValue = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(${0.7 + (0.3 * proximity)})`;
        }
        element.style.transform = transformValue;
      });
    }

    function updateSectionAnimations() {
      const viewportHeight = window.innerHeight;
      const triggerStart = viewportHeight;
      const triggerEnd = viewportHeight / 3;
      let currentHueRotation = hueRotation;
      const elementsToUpdate = Object.entries(sectionElements).map(([title, element]) => {
        const rect = element.getBoundingClientRect();
        const progress = Math.max(0, Math.min(1, 1 - ((rect.top - triggerEnd) / (triggerStart - triggerEnd))));
        const easedProgress = Math.pow(progress, 1.5);
        const opacity = easedProgress;
        return { element, opacity, progress };
      });

      elementsToUpdate.forEach(({ element, opacity, progress }) => {
        element.style.opacity = opacity.toFixed(2);
        currentHueRotation = (currentHueRotation + 0.5) % 360;
        if (mainRef.current) {
          mainRef.current.style.filter = `hue-rotate(${currentHueRotation * progress / 10}deg)`;
        }
      });
      hueRotation = currentHueRotation;
    }

    function updateArrowVisibility() {
      const shouldShow = window.scrollY <= window.innerHeight - 1;
      if (shouldShow !== showDownArrow) {
        setShowDownArrow(shouldShow);
      }
    }

    function onScroll() {
      if (frameId) return;
      frameId = requestAnimationFrame(() => {
        if (lastScrollY !== window.scrollY) {
          updateArrowVisibility();
          updateSectionAnimations();
          updateParallaxEffect();
          lastScrollY = window.scrollY;
        }
        frameId = null;
      });
    }

    initializeElements();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    onScroll();

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("mousemove", handleMouseMove);
      if (frameId) cancelAnimationFrame(frameId);
      if (mainRef.current) {
        mainRef.current.style.filter = '';
      }
    };
  }, [showDownArrow, mousePosition]);

  useEffect(() => {
    const gradient = new Gradient()
    gradient.initGradient('#gradient-canvas')
}, [])

  return (
    <>
      <Head>
        <title>Tristan Carter&apos;s Portfolio</title>
        <meta name="description" content="Tristan Carter&apos;s official portfolio website made using Next.js + Tailwind" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/Images/FlipperPFP.png" />
      </Head>
      <main ref={mainRef} className='to-[#330088] from-[#81129F] bg-gradient-to-r via-[#5A178E] select-none w-full overflow-hidden transition-all duration-1000'>
        <canvas className="absolute" id="gradient-canvas" data-transition-in />
        <NavBar />
        <HomePage />
        <ProjectsPage />
      </main>
      {showDownArrow && (
    <div className="fixed bottom-0 right-[40%] md:right-[50%] self-center md:place-self-end
        animate-bounce text-4xl font-bold opacity-70 rounded-full">
        <Image
            src={DownArrow}
            alt="Down Arrow"
            width={64}
            height={64}
            priority
        />
      </div>
    )}
    </>
  );
}

export async function getServerSideProps() {
  const data = "This is some data from the server";
  return {
    props: {
      data,
    },
  };
}