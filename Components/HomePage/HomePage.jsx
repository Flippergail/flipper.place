import Image from "next/image";
import React from "react";

export default function HomePage() {
    return(
        <div className="relative h-screen w-full" id="Home">
            <Image
                src="/Images/HomePageBG.png"
                alt="Background Image"
                fill
                className="-z-10"
            />
        </div>
    )
}