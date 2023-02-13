import Image from "next/image";
import React from "react";

export default function NavBar() {
    return(
        <ul className="gap-4 p-4 items-center flex-row-reverse flex h-[11%] fixed w-full z-100">
            <li className="relative h-[105%] aspect-square">
                <Image
                src="/Images/FlipperPFP.png"
                alt="PFP"
                fill
                />
            </li>

            <li className="group">
                <a className="text-text text-l  font-semibold" href="#About">About</a>
                <div className="rounded-full ml-[20%] mr-[20%] flex-grow h-0.5 bg-text hidden group-hover:block"/>
            </li>
            <li className="group">
                <a className="text-text text-l  font-semibold" href="#Projects">Projects</a>
                <div className="rounded-full ml-[20%] mr-[20%] flex-grow h-0.5 bg-text hidden group-hover:block"/>
            </li>
            <li className="group">
                <a className="text-text text-l  font-semibold" href="#Home">Home</a>
                <div className="rounded-full ml-[20%] mr-[20%] flex-grow h-0.5 bg-text hidden group-hover:block"/>
            </li>

            <li className="self-end justify-center mr-[25%]" ><p className="text-text text-5xl font-semibold">flipper.place</p></li>
        </ul>
    )
}
