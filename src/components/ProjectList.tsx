import { useEffect, useState } from "react"
import projects from "../data/projects";

const ProjectList = ({ className }) => {
    const [filteredProjects, setFilteredProjects] = useState(projects);
    useEffect(() => {
        console.log("coucou");
    })

    const filterProjects = (filter: string) => {
        console.log("coucou")
        console.log(projects.filter((project) => project.category == filter))
        setFilteredProjects(projects.filter((project) => project.category == filter))
    }

    return (
        <div className={className}>
            <div className="projectsFilter">
                <button onClick={() => filterProjects("web")}>Dev</button>
                <button onClick={() => filterProjects("movie")}>Films</button>
            </div>
            <ul className="projectsList">
                {
                    filteredProjects.map((project) => (
                        <li key={project.id} className="project-item">
                            <a className="primaryLink" href={project.link}>
                                {project.title}
                            </a>
                            {project.secondaryLink && (
                                <a href={project.secondaryLink} className="secondaryLink">{project.secondaryLinkName}</a>
                            )}
                        </li>
                    ))
                }
            </ul>
        </div>
    );
}

export default ProjectList;