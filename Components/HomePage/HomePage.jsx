import Image from "next/image";
import React from "react";

export default function HomePage() {
    return(
        <div className="relative h-screen w-full flex flex-col md:flex-row align-middle" id="Home">
            <Image
                src="/Images/HomePageBG.png"
                alt="Background Image"
                fill
                className="-z-10 object-cover"
                priority
            />
            
            <p className=" ml-12 lg:ml-48 mt-24 lg:mt-44 text-text text-4xl md:text-3xl lg:text-5xl leading-tight font-semibold">Hello, my name is<br/>Tristan.<br/><br/>I am a Full Stack<br/>Developer living in<br/>the UK.</p>

            <div className="relative lg:mt-24 overflow-hidden">
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