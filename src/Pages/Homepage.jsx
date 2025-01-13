import { useRef } from "react";
import ProjectCard from "../Components/ProjectCard.jsx";
import Projects from "../static/project.js";
import { useNavigate } from "react-router";
import PageTemplate from "../Components/PageTemplate.jsx";

function Homepage() {
  const projects = useRef(Projects);
  const navigate = useNavigate();

  return (
    <PageTemplate>
          <div className="flex flex-col justify-center items-center md:items-start sm:justify-start w-fit mb-9 p-6 text-[#FAFCFF]">
            <p className="text-3xl sm:text-4xl font-semibold w-fit pb-1 whitespace-nowrap">Aidan Scribner</p>
            <p className="text-2xl font-semibold w-fit mb-2">Software Engineer</p>
            <a href="https://github.com/ascribner2" className="text-2xl font-semibold w-fit mb-2 px-2 rounded-md bg-[#313333] text-[#6AB57D] cursor-pointer">GitHub</a>
            <a href="https://www.linkedin.com/in/aidan-scribner/" className="text-2xl font-semibold w-fit px-2 rounded-md bg-[#0072b1] cursor-pointer">LinkedIn</a>
          </div>
          
          {/* Projects */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-10 items-start lg:gap-8 w-full">
            { 
              projects.current.map((item, index) => {
                return (
                  <ProjectCard key={"project" + index} onClick={() => navigate("/view-project", { state: { "projectData": item } })} title={item.Title} thumbnail={item.Thumbnail} technologies={item.Technologies}/>
                )
              }) 
            }

          </div>
    </PageTemplate>
  )
}

export default Homepage;