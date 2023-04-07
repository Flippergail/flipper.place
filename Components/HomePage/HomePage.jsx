import Image from "next/image";
import React, { useEffect } from "react";
import DownArrow from '/public/Images/DownArrow.svg';

import { Gradient } from './Gradient.js'

export default function HomePage() {
    useEffect(() => {
        const gradient = new Gradient()
        gradient.initGradient('#gradient-canvas')
    }, [])
    return(
        <div className="lg:space-x-20 relative h-screen w-full flex flex-col md:flex-row items-center justify-center overflow-hidden" id="Home">
            {/*<Image
                src="/Images/HomePageBG.png"
                alt="Background Image"
                fill
                className="-z-10 object-cover"
                priority
            />*/}
            <canvas className="absolute -z-50" id="gradient-canvas" data-transition-in />
            <p className="pt-5 lg:pt-0 text-text text-4xl md:hidden lg:block lg:text-6xl leading-tight font-semibold">Hello, my name is<br/>Tristan.<br/><br/>I am a Full Stack<br/>Developer living in<br/>the UK.</p>
            
            <p className="pt-6 hidden md:block lg:hidden text-text text-3xl leading-tight font-semibold">Hello, my name is Tristan.<br/>I am a Full Stack Developer living in<br/>the UK.</p>

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

            <button className="absolute bottom-0 md:right-[50%] self-center md:place-self-end animate-bounce text-4xl font-bold opacity-70 hover:bg-[#950EAB] rounded-full duration-300">
                <Image
                    src={DownArrow}
                    alt="Down Arrow"
                    width={64}
                    height={64}
                    priority
                />
            </button>
        </div>
    )
}