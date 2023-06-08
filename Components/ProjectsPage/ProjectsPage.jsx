import Image from "next/image";
import Link from "next/link";
import React, { useRef, useEffect } from "react";

const Projects = require('./Projects.js');

export default function ProjectsPage() {
    const myElementRef = useRef(false);
    const renderProjects = () => {
        return Projects.map(project => {
            return(
                <div className="to-[#330088] from-[#81129F] bg-gradient-to-r via-[#5A178E] flex flex-col md:flex-row items-center justify-center w-full h-screen
                 bg-cover bg-center z-10 md:bg-none" key={project.title} id={project.title}>
                    <div className="relative flex flex-col md:max-w-5xl justify-center h-full">
                        <a href={project.link}>
                            <h1 className="underline decoration-4 text-3xl lg:text-4xl font-bold
                            text-fuchsia-200 hover:text-teal-500">{project.title} (Click Me)</h1>
                        </a>
                        <p className="pt-6 lg:pt-0 text-text text-2xl lg:text-3xl leading-tight font-semibold">{project.description}</p>
                    </div>
                    <div className="relative">
                        <Image
                        src={project.image}
                        alt="Chess Engine"
                        height={project.imageHeight}
                        width={project.imageWidth}
                        className="object-contain rounded-3xl mb-3 md:mb-none"
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