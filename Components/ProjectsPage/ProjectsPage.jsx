import Image from "next/image";
import Link from "next/link";
import React, { useRef, useEffect } from "react";

const Projects = require('./Projects.js');

export default function ProjectsPage() {
  const renderProjects = () => {
    return Projects.map(project => (
      <div
        className="rounded-3xl bg-gradient-to-tl from-violet-900 to-pink-800
                   p-5 md:p-12 md:px-12
                   flex flex-col md:flex-row justify-center items-center
                   w-full h-200 bg-cover bg-center z-10"
        key={project.title}
        id={project.title}
      >
        <div className="relative flex flex-col md:max-w-5xl justify-center h-full mt-24 md:mt-0 md:mb-0 md:items-start">
          <a href={project.link} className="group">
            <h1 className="underline decoration-4 text-3xl lg:text-4xl font-bold
                        text-fuchsia-200 group-hover:text-teal-500 transition-colors">
              {project.title}
            </h1>
            <h2 className="text-text text-lg lg:text-xl font-semibold">
              (click for more)
            </h2>
          </a>
          <p
            className="pt-6 lg:pt-0 text-text text-2xl lg:text-3xl leading-tight font-semibold"
            dangerouslySetInnerHTML={{ __html: project.description }}
          />
        </div>

        <div className="relative flex items-center justify-center h-full">
          <div className="flex items-center justify-center h-full">
            <Image
              src={project.image}
              alt={`${project.title} preview`}
              height={project.imageHeight}
              width={project.imageWidth}
              className="object-contain rounded-3xl md:my-auto"
              priority
            />
          </div>
        </div>
      </div>
    ));
  };

  return (
    <section id="Projects">
      {renderProjects()}
    </section>
  );
}

export async function getServerSideProps() {
  const data = "This is some data from the server";
  return {
    props: {
      data,
    },
  };
}