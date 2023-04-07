import Image from "next/image";
import React, { useState, useRef } from "react";

export default function NavBar() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen)
    }
    const mobileMenuRef = useRef(null)

    return(
        <div className="p-4 lg:p-2 justify-between items-center flex flex-row h-[4.5rem] md:h-13 lg:h-20 fixed w-full z-50 backdrop-blur-md">
            { !isMobileMenuOpen && (<>
            <div className="relative md:hover:animate-spin">
                <Image
                    src="/Images/FlipperPFP.png"
                    alt="PFP"
                    width={64}
                    height={64}
                    priority
                />
            </div>

            <p className="md:self-center text-text text-3xl md:text-5xl font-semibold">flipper.place</p>
            
            <nav class="hidden md:block items-center">
                <ul className="list-none flex gap-3 relative items-center">
                    <li className="group items-center">
                        <a className="text-text text-l lg:text-2xl font-semibold" href="#Home">Home</a>
                        <div className="rounded-full ml-[20%] mr-[20%] flex-grow h-0.5 group-hover:bg-text"/>
                    </li>
                    <li className="group items-center">
                        <a className="text-text text-l lg:text-2xl font-semibold" href="#Projects">Projects</a>
                        <div className="rounded-full ml-[20%] mr-[20%] flex-grow h-0.5 group-hover:bg-text"/>
                    </li>
                    <li className="group items-center">
                        <a className="text-text text-l lg:text-2xl font-semibold" href="#About">About</a>
                        <div className="rounded-full ml-[20%] mr-[20%] flex-grow h-0.5 group-hover:bg-text"/>
                    </li>
                </ul>
            </nav>

            <div class="flex items-center md:hidden">
                <button class="text-white text-4xl font-bold opacity-70 hover:opacity-100 duration-300" onClick={toggleMobileMenu}>
                    <div className="relative md:hover:animate-spin">
                        <Image
                            src="/Images/BurgerMenu.png"
                            alt="Burger Menu"
                            width={40}
                            height={40}
                            priority
                        />
                    </div>
                </button>
            </div>
            </>)}
            
            { isMobileMenuOpen && (<div ref={mobileMenuRef} class="fixed container h-full w-full flex items-center z-50">
                <ul class="w-full h-full items-center p-8
                    mrelative flex justify-between md:bg-transparent flex-row md:space-x-6">

                    <li>
                        <a class="text-text text-2xl font-semibold opacity-70 hover:opacity-100 duration-300" href="#Home">Home</a>
                    </li>
                    <li>
                        <a class="text-text text-2xl font-semibold opacity-70 hover:opacity-100 duration-300" href="#Projects">Projects</a>
                    </li>
                    <li>
                        <a class="text-text text-2xl font-semibold opacity-70 hover:opacity-100 duration-300" href="#About">About</a>
                    </li>
                    
                    <li class="flex items-center">
                        <button class="text-white text-4xl font-bold opacity-70 hover:opacity-100 duration-300" onClick={toggleMobileMenu}>
                            <div className="relative">
                                <Image
                                    src="/Images/BurgerMenu.png"
                                    alt="Burger Menu"
                                    width={40}
                                    height={40}
                                    priority
                                />
                            </div>
                        </button>
                    </li>
                </ul>
            </div>)}
        </div>
    )
}