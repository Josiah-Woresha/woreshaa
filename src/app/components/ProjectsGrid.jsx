// app/components/ProjectsGrid.jsx
import Link from 'next/link';
import ReactLenis from '@studio-freight/react-lenis';

const ProjectsGrid = ({ projects }) => {
  return (
    <ReactLenis root>
    <div className="projects-grid">
      {projects.map((project) => (
        <div key={project.id} className="project-card">
          {/* Main clickable area for the entire card content */}
          <Link href={`/projects/${project.slug}`} passHref>
            <img src={project.image} alt={project.name} className="project-thumbnail" />
            
            {/* New: Div to hold title and arrow on large screens, overlaid on image */}
            <div className="project-overlay-content">
                <h3 className="project-title-large-screen">{project.name}</h3>
                {/* Unicode right arrow character */}
                <span className="project-arrow-icon">&#x2192;</span> 
            </div>
          </Link>

          {/* Project details - visible only on small screens */}
          <div className="project-details">
            {/* Project title visible on small screens as part of the text block */}
            <h3 className="project-title-small-screen">{project.name}</h3>
            <p className="project-description">{project.description}</p>
            <Link href={`/projects/${project.slug}`} passHref>
              <button className="view-button">View Project</button>
            </Link>
          </div>
        </div>
      ))}
    </div>
    </ReactLenis>
  );
};

export default ProjectsGrid;