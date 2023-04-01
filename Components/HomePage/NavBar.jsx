import Image from "next/image";
import React, { useState } from "react";

export default function NavBar() {
    const [isOpen, setIsOpen] = useState(false)

    const toggleMenu = () => {
      setIsOpen(!isOpen)
    }
    return(
        <div className="p-4 justify-between items-center flex flex-row h-[4.5rem] md:h-13 lg:h-[4.5rem] fixed w-full z-50 backdrop-blur-md">
            <div className="relative hover:animate-spin">
                <Image
                    src="/Images/FlipperPFP.png"
                    alt="PFP"
                    width={64}
                    height={64}
                    priority={true}
                />
            </div>

            <p className="md:self-center text-text text-3xl md:text-5xl font-semibold">flipper.place</p>
            
            <nav>
                <ul className="list-none flex gap-3 relative">
                    <li className="group">
                        <a className="text-text text-l font-semibold" href="#Home">Home</a>
                        <div className="rounded-full ml-[20%] mr-[20%] flex-grow h-0.5 group-hover:bg-text"/>
                    </li>
                    <li className="group">
                        <a className="text-text text-l font-semibold" href="#Projects">Projects</a>
                        <div className="rounded-full ml-[20%] mr-[20%] flex-grow h-0.5 group-hover:bg-text"/>
                    </li>
                    <li className="group">
                        <a className="text-text text-l font-semibold" href="#About">About</a>
                        <div className="rounded-full ml-[20%] mr-[20%] flex-grow h-0.5 group-hover:bg-text"/>
                    </li>
                </ul>
            </nav>
        </div>
    )
}