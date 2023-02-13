import Image from "next/image";
import React from "react";

export default function NavBar() {
    return(
        <ul class=" gap-4 p-4 items-center flex-row-reverse flex h-[11%] absolute w-full z-10">
            <li class="relative h-[105%] aspect-square">
                <Image
                src="/Images/FlipperPFP.png"
                alt="PFP"
                fill
                />
            </li>

            <li class="group">
                <a class="text-text text-l  font-semibold" href="#About">About</a>
                <div class="rounded-full ml-[20%] mr-[20%] flex-grow h-0.5 bg-text hidden group-hover:block"/>
            </li>
            <li class="group">
                <a class="text-text text-l  font-semibold" href="#Projects">Projects</a>
                <div class="rounded-full ml-[20%] mr-[20%] flex-grow h-0.5 bg-text hidden group-hover:block"/>
            </li>
            <li class="group">
                <a class="text-text text-l  font-semibold" href="#Home">Home</a>
                <div class="rounded-full ml-[20%] mr-[20%] flex-grow h-0.5 bg-text hidden group-hover:block"/>
            </li>

            <li class="self-end justify-center mr-[25%]" ><p class="text-text text-5xl font-semibold">flipper.place</p></li>
        </ul>
    )
}
