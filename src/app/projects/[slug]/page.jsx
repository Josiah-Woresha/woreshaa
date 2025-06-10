// app/projects/[slug]/page.jsx
"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import projectsData from "../../../../lib/Projects"; // Ensure this path is correct
import ReactLenis from "@studio-freight/react-lenis";
import Link from "next/link"; // Import Link for navigation

const ProjectDetail = () => {
  const params = useParams();
  const { slug } = params;
  const [project, setProject] = useState(null);
  const [prevProject, setPrevProject] = useState(null);
  const [nextProject, setNextProject] = useState(null);

  useEffect(() => {
    if (slug) {
      const currentIndex = projectsData.findIndex((p) => p.slug === slug);
      if (currentIndex !== -1) {
        setProject(projectsData[currentIndex]);

        // Determine previous project
        if (currentIndex > 0) {
          setPrevProject(projectsData[currentIndex - 1]);
        } else {
          setPrevProject(null); // No previous project if it's the first one
        }

        // Determine next project
        if (currentIndex < projectsData.length - 1) {
          setNextProject(projectsData[currentIndex + 1]);
        } else {
          setNextProject(null); // No next project if it's the last one
        }
      } else {
        setProject(null); // Project not found
      }
    }
  }, [slug]);

  if (!project) {
    return (
      <div className="project-detail-container">
        <p>Loading project or project not found...</p>
      </div>
    );
  }

  return (
    <ReactLenis root>
      <div className="project-detail-page">
        {/* Hero Section */}
        <div
          className="project-hero"
          style={{ backgroundImage: `url(${project.image})` }}
        >
          <div className="hero-overlay">
            <h1 className="hero-title">{project.name}</h1>
            <div className="hero-meta">
              {project.client && (
                <span className="hero-client">Client: {project.client}</span>
              )}
              {project.year && (
                <span className="hero-year">Year: {project.year}</span>
              )}
              {project.websiteLink && (
                <Link
                  href={project.websiteLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hero-website-link"
                >
                  Visit Website &rarr;
                </Link>
              )}
            </div>
          </div>
        </div>

        <div className="project-detail-content">
          {/* Tagline / Short Description */}
          {project.description && (
            <p className="project-tagline">{project.description}</p>
          )}

          {/* Project Story */}
          {project.story && (
            <div className="project-story-section">
              <h2>The Story Behind {project.name}</h2>
              <p>{project.story}</p>
            </div>
          )}

          {/* Problem and Solution Section */}
          {(project.problem || project.solution) && (
            <div className="problem-solution-section">
              {project.problem && (
                <div className="problem-column">
                  <h2>The Problem</h2>
                  <p>{project.problem}</p>
                </div>
              )}
              {project.solution && (
                <div className="solution-column">
                  <h2>The Solution</h2>
                  <p>{project.solution}</p>
                </div>
              )}
            </div>
          )}

          {/* Big Div Image 1 (Desktop) */}
          <div
            className="project-large-image desktop-image-div"
            style={{ backgroundImage: `url(${project.image})` }}
          ></div>
          {/* Big Div Image 1 (Mobile) */}
          {project.mobileImage && (
            <div
              className="project-large-image mobile-image-div"
              style={{ backgroundImage: `url(${project.mobileImage})` }}
            ></div>
          )}

          {/* Additional Two Images Section */}
          {(project.additionalImage1 || project.additionalImage2) && (
            <div className="additional-images-section">
              {project.additionalImage1 && (
                <div
                  className="additional-image-item"
                  style={{ backgroundImage: `url(${project.additionalImage1})` }}
                ></div>
              )}
              {project.additionalImage2 && (
                <div
                  className="additional-image-item"
                  style={{ backgroundImage: `url(${project.additionalImage2})` }}
                ></div>
              )}
            </div>
          )}

          {/* Full Description */}
          {project.fullDescription && (
            <div className="project-full-description">
              <h2>In-depth Overview</h2>
              <p>{project.fullDescription}</p>
            </div>
          )}

          {/* Previous/Next Project Navigation */}
          <div className="project-navigation">
            {prevProject ? (
              <Link
                href={`/projects/${prevProject.slug}`}
                className="nav-button prev"
              >
                &larr; Previous Project
              </Link>
            ) : (
              <span className="nav-button disabled">&larr; Previous Project</span>
            )}

            {nextProject ? (
              <Link
                href={`/projects/${nextProject.slug}`}
                className="nav-button next"
              >
                Next Project &rarr;
              </Link>
            ) : (
              <span className="nav-button disabled">Next Project &rarr;</span>
            )}
          </div>
        </div>
      </div>
    </ReactLenis>
  );
};

export default ProjectDetail;




