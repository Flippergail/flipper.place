import Image from "next/image";
import React from "react";

export default function HomePage() {
    return(
        <div class="relative h-screen w-full" id="Home">
            <Image
                src="/Images/HomePageBG.png"
                alt="Background Image"
                fill
                class="-z-10"
            />
        </div>
    )
}