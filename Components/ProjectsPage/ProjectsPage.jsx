import Image from "next/image";
import Link from "next/link";
import React, { useRef, useEffect } from "react";

const Projects = require('./Projects.js');

export default function ProjectsPage() {
    const myElementRef = useRef(null);
    const renderProjects = () => {
        return Projects.map(project => {
            return(
                <div className="flex flex-col md:flex-row items-center justify-center w-full h-screen
                 bg-cover bg-center z-10 bg-gradient-to-[#330088] md:bg-none from-[#6A0885]" key={project.title} id={project.title}>
                    <div className="relative flex flex-col items-center md:max-w-5xl justify-center h-full">
                        <a href={project.link}>
                            <h1 className="underline decoration-4 text-4xl lg:text-5xl font-bold
                            text-fuchsia-200 hover:text-teal-500 text-center">{project.title} (Click Me)</h1>
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

export async function getServerSideProps() {
    const data = "This is some data from the server";
    return {
      props: {
        data,
      },
    };
  }