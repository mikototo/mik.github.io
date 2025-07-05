import { useState } from "react";
import { useRouter } from "next/router";     // ← NEW
import ProjectDetail from "./ProjectDetail";

type Project = {
    title: string;
    content: string;
    img: string;            // must start with a leading “/”
};

const projects: Project[] = [
    { title: "Project One",   content: "Detailed content for Project One",   img: "/resources/koi.jpg" },
    { title: "Project Two",   content: "Detailed content for Project Two",   img: "/resources/agame.jpg" },
    { title: "Project Three", content: "Detailed content for Project Three", img: "/resources/tattoos/Flow_1.jpg" },
];

export default function Portfolio() {
    const [selectedProject, setSelectedProject] = useState<Project | null>(null);
    const { basePath } = useRouter();          // ← NEW (“”, or “/mik.github.io” in prod)

    const loadProject = (project: Project) => setSelectedProject(project);
    const backToPortfolio = () => setSelectedProject(null);

    return (
        <>
            <div className="portfolio">
                {projects.map((proj, idx) => (
                    <div key={idx} className="project" onClick={() => loadProject(proj)}>
                        {/* prepend basePath so images resolve in both dev & GH Pages */}
                        <img src={`${basePath}${proj.img}`} alt={proj.title} />
                        <h3>{proj.title}</h3>
                    </div>
                ))}
            </div>

            {selectedProject && (
                <ProjectDetail project={selectedProject} backToPortfolio={backToPortfolio} />
            )}
        </>
    );
}
