import Image from "next/image";
import React from "react";

export default function HomePage() {
    return(
        <div className="relative h-screen w-full flex flex-row align-middle" id="Home">
            <Image
                src="/Images/HomePageBG.png"
                alt="Background Image"
                fill
                className="-z-10"
            />
            
            <p className="absolute text-text text-5xl leading-tight font-semibold mt-[11%] ml-[12%]">Hello, my name is<br/>Tristan.<br/><br/>I am a Full Stack<br/>Developer living in<br/>the UK.</p>
            <div className="relative h-[70%] aspect-[791/597] ml-[42%]" >
                <Image
                    src="/Images/LaptopGrad.png"
                    alt="Laptop Gradient Vector"
                    fill
                    className="z-0 mt-[14%]"
                />
            </div>
        </div>
    )
}