import React from "react";
import projectList from './projects.json'
import Project from "./Project";

export default function Projects() {

    const [projects, setProjects] = React.useState(makeComponent(projectList))

    function makeComponent(list) {
        return list.map(pj => <Project title={pj.title} img={pj.img} link={pj.link} link2={pj.link2} title2={pj.title2} 
            description={pj.description} technologies={pj.technologies.map(tech => tech == pj.technologies[0] ? tech : ", " + tech)}/>
            )
    }

    function selectionFilter(selection) {
        const filteredList = [];
        if(selection != "Filter By Language") {
        for(let project of projectList) {
            if(project.technologies.includes(selection)) {
                filteredList.push(project);
            }
            setProjects(makeComponent(filteredList))
        }
    }  else {
        setProjects(makeComponent(projectList))
    }
    }

    return(
            <>
            <div className="bg-bg-light px-16 pt-8">
            <select onChange={e => selectionFilter(e.target.value)} name="filter" id="filter" className="py-3 px-5 border-black border-2 ">
            <option className="italic" >Filter By Language</option>
            <option>Java</option>
            <option>Javascript</option>
            </select>
            </div>
            <div className=" bg-bg-light pb-16 xl:grid-cols-3 justify-evenly md:grid-cols-2 grid flex-column flex-1">
            {projects}
            </div>
            </>
    )
}