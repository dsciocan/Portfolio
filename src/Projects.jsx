import React from "react";
import projectList from './projects.json'
import Project from "./Project";

export default function Projects() {

    const projects = projectList.map(pj => <Project title={pj.title} img={pj.img} link={pj.link}/>
        
    )

    return(
            <div className=" bg-bg-light pb-16 xl:grid-cols-3 justify-evenly md:grid-cols-2 grid flex-column flex-1">
            {projects[0]}
            {projects[1]}
            {projects[2]}
            {/* </div>
            <div className="sm:flex justify-evenly"> */}
            {projects[3]}
            {projects[4]}
            {projects[5]}
            </div>
    )
}