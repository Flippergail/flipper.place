import Image from "next/image";
import React, { useRef, useEffect } from "react";
import DownArrow from '/public/Images/DownArrow.svg';

import { Gradient } from './Gradient.js'

export default function HomePage() {
    useEffect(() => {
        const gradient = new Gradient()
        gradient.initGradient('#gradient-canvas')
    }, [])
    return(
        <div className="lg:space-x-20 h-screen w-full flex flex-col md:flex-row
         items-center justify-center overflow-hidden" id="Home">
            {/*<Image
                src="/Images/HomePageBG.png"
                alt="Background Image"
                fill
                className="-z-10 object-cover"
                priority
            />*/}
            {/*<canvas className="absolute" id="gradient-canvas" data-transition-in />*/}
            <p className="hidden">Official portfolio of Tristan Carter, developed in Next.js, an aspiring software engineer currently living in the UK. To find out more go to either his wesbsite, Github profile or LinkedIn</p>
            <p className="z-10 pt-6 lg:pt-0 text-text text-4xl md:hidden lg:block lg:text-5xl leading-tight font-semibold">Hello, my name is<br/>Tristan Carter.<br/><br/>I am an aspiring software engineer<br/>currently living in the UK.</p>
            
            <p className="z-10 pt-8 hidden md:block lg:hidden text-text text-2xl leading-tight font-semibold">Hello, my name is Tristan Carter.<br/>I am a an aspiring software engineer currently <br/> living in the UK.</p>

            <div className="relative animate-float">
                <Image
                    src="/Images/LaptopGrad.png"
                    alt="Laptop Gradient Vector"
                    height={513}
                    width={672}
                    className="z-0"
                    priority
                />
            </div>
        </div>
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