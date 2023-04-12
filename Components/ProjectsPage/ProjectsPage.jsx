import Image from "next/image";
import React from "react";

const Projects = [
    {
        title: "C++ Chess Engine",
        description: "A chess engine written in C++ that uses the Minimax algorithm with alpha-beta pruning to determine the best move for the AI.",
        image: "/Images/ChessEngine.png",
        imageWidth: 672,
        imageHeight: 513,
    },
]

export default function ProjectsPage() {
    const renderProjects = () => {
        return Projects.map(project => {
            return(
                <div className="flex flex-col md:flex-row items-center justify-center w-full h-screen
                bg-[url('/Images/MainBG.png')] bg-cover bg-center" key={project.name}>
                    <div className="flex flex-col items-center md:max-w-5xl justify-center h-full">
                        <h1 className="underline decoration-4 text-5xl font-bold text-text text-center">{project.title}</h1>
                        <p className="pt-6 lg:pt-0 text-text text-3xl lg:text-5xl leading-tight font-semibold text-center">{project.description}</p>
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