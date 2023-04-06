import Image from "next/image";
import React, { useEffect } from "react";
import MeshGradient from 'mesh-gradient.js';

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
            
            <p className=" ml-12 mt-24 lg:m-0 text-text text-4xl md:hidden lg:block lg:text-5xl leading-tight font-semibold">Hello, my name is<br/>Tristan.<br/><br/>I am a Full Stack<br/>Developer living in<br/>the UK.</p>

            <p className=" hidden md:block lg:hidden ml-12 mt-16 text-text text-3xl leading-tight font-semibold">Hello, my name is Tristan.<br/>I am a Full Stack Developer living in<br/>the UK.</p>

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