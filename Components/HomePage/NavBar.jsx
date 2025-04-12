import Image from "next/image";
import React, { useState, useRef } from "react";
import BurgerMenu from '/public/Images/BurgerMenu.svg';
import ExitButton from '/public/Images/ExitButton.svg';

export default function NavBar() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen)
    }
    const mobileMenuRef = useRef(null)

    return(
        <div className="p-4 lg:p-3 justify-between items-center flex flex-row h-[4.5rem] md:h-13 lg:h-[5.4rem] fixed w-full z-50 backdrop-blur-md">
            { !isMobileMenuOpen && (<>
            <div className="relative lg:hover:animate-spin">
                <Image
                    src="/Images/FlipperPFP.png"
                    alt="PFP"
                    width={64}
                    height={64}
                    priority
                />
            </div>

            <p className="md:self-center text-text text-3xl md:text-5xl font-semibold">My Portfolio</p>
            
            <nav className="hidden md:block items-center">
                <ul className="list-none flex gap-3 relative items-center">
                    <li className="group items-center">
                        <a className="text-text text-l lg:text-2xl font-semibold" 
                        onClick={()=>document.getElementById("Home").scrollIntoView({behavior: "smooth"})}>Home</a>
                        <div className="rounded-full ml-[20%] mr-[20%] flex-grow h-0.5 group-hover:bg-text duration-200"/>
                    </li>
                    <li className="group items-center">
                        <a className="text-text text-l lg:text-2xl font-semibold" 
                        onClick={()=>document.getElementById("Projects").scrollIntoView({behavior: "smooth"})}>Projects</a>
                        <div className="rounded-full ml-[20%] mr-[20%] flex-grow h-0.5 group-hover:bg-text duration-200"/>
                    </li>
                </ul>
            </nav>

            <div className="flex items-center md:hidden">
                <button className="text-white text-4xl font-bold opacity-70 hover:opacity-100 duration-300" onClick={toggleMobileMenu}>
                    <div className="relative md:hover:animate-spin">
                        <Image
                            src={BurgerMenu}
                            alt="Burger Menu"
                            width={40}
                            height={40}
                            priority
                        />
                    </div>
                </button>
            </div>
            </>)}
            
            { isMobileMenuOpen && (<div ref={mobileMenuRef} className="fixed container h-full w-full flex items-center z-50">
                <ul className="w-full h-full items-center p-8
                    mrelative flex justify-between md:bg-transparent flex-row md:space-x-6">

                    <li>
                        <a className="text-text text-2xl font-semibold opacity-70 hover:opacity-100 duration-300"
                        onClick={()=>document.getElementById("Home").scrollIntoView({behavior: "smooth"})}>Home</a>
                    </li>
                    <li>
                        <a className="text-text text-2xl font-semibold opacity-70 hover:opacity-100 duration-300"
                        onClick={()=>document.getElementById("Projects").scrollIntoView({behavior: "smooth"})}>Projects</a>
                    </li>
                    <li>
                        <a className="text-text text-2xl font-semibold opacity-70 hover:opacity-100 duration-300"
                        onClick={()=>document.getElementById("About").scrollIntoView({behavior: "smooth"})}>About</a>
                    </li>
                    
                    <li className="flex items-center">
                        <button className="text-white text-4xl font-bold opacity-70 hover:opacity-100 duration-300" onClick={toggleMobileMenu}>
                            <div className="relative">
                                <Image
                                    src={ExitButton}
                                    alt="Exit Button"
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