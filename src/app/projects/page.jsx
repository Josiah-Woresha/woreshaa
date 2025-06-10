// app/projects/page.jsx
"use client";

import ReactLenis from "@studio-freight/react-lenis";
import ProjectsGrid from "../components/ProjectsGrid";
import projectsData from "../../../lib/Projects";

const Projects = () => {
  return (
    <ReactLenis root>
      <div className="projects">
        <ProjectsGrid projects={projectsData} />
      </div>
    </ReactLenis>
  );
};

export default Projects;