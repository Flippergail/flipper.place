import Image from "next/image";
import React from "react";

export default function NavBar() {
    return(
        <header className="list-none p-4 justify-between items-center flex h-[10%] fixed w-full z-50">
            <li className="relative h-[120%] aspect-square">
                <Image
                    src="/Images/FlipperPFP.png"
                    alt="PFP"
                    fill
                />
            </li>

            <li className="self-end" ><p className="text-text text-4xl font-semibold">flipper.place</p></li>

            <nav>
                <ul className="list-none flex gap-3 relative">
                    <li className="group">
                        <a className="text-text text-l  font-semibold" href="#Home">Home</a>
                        <div className="rounded-full ml-[20%] mr-[20%] flex-grow h-0.5 group-hover:bg-text"/>
                    </li>
                    <li className="group">
                        <a className="text-text text-l  font-semibold" href="#Projects">Projects</a>
                        <div className="rounded-full ml-[20%] mr-[20%] flex-grow h-0.5 group-hover:bg-text"/>
                    </li>
                    <li className="group">
                        <a className="text-text text-l  font-semibold" href="#About">About</a>
                        <div className="rounded-full ml-[20%] mr-[20%] flex-grow h-0.5 group-hover:bg-text"/>
                    </li>
                </ul>
            </nav>
        </header>
    )
}