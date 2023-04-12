import Image from "next/image";
import Link from "next/link";
import React from "react";

const Projects = [
    {
        title: "C++ Chess Engine",
        description: "A chess engine written in C++ that uses the Minimax algorithm with alpha-beta pruning to determine the best move for the AI.",
        image: "/Images/ChessEngine.png",
        link: "https://github.com/Flippergail/ChessEngine-cpp",
        imageWidth: 672,
        imageHeight: 513,
    },
    {
        title: "SnellRun",
        description: "A 2d game in the style of google dinausor. Made using Next.js + Tailwind and react-three-fiber for the actual game part of the website. I made the game as a light hearted entry to a school STEM competition which went on to win and have over 800 different people play. Being built to work well on both desktop and mobile.",
        image: "/Images/SnellRun.png",
        link: "https://snellrun.com/",
        imageWidth: 672,
        imageHeight: 513,
    }
]

export default function ProjectsPage() {
    const renderProjects = () => {
        return Projects.map(project => {
            return(
                <div className="flex flex-col md:flex-row items-center justify-center w-full h-screen
                bg-[url('/Images/MainBG.png')] bg-cover bg-center" key={project.name}>
                    <div className="flex flex-col items-center md:max-w-5xl justify-center h-full">
                        <a href={project.link}>
                            <h1 className="underline decoration-4 text-4xl lg:text-5xl font-bold text-fuchsia-200 hover:text-teal-500 text-center">{project.title} (Click Me)</h1>
                        </a>
                        <p className="pt-6 lg:pt-0 text-text text-3xl lg:text-4xl leading-tight font-semibold text-center">{project.description}</p>
                    </div>
                    <div className="relative">
                        <Image
                        src={project.image}
                        alt="Chess Engine"
                        height={project.imageHeight}
                        width={project.imageWidth}
                        className="object-contain md:rounded-3xl"
                        priority
                         />
                    </div>
                </div>
            );
        });
    }

    return (
        <div id="Projects">
            {renderProjects()}
        </div>
    )
}