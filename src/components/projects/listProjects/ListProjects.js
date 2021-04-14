import React, { useContext, useEffect } from 'react';
import Project from '../project/Project';
import './listProjects.css';
import projectContext from '../../../context/projects/projectContext';

const ProjectsList = () => {
  // Use projects from initialState in Context
  const projectsContext = useContext(projectContext);
  const { projects, getProjects } = projectsContext;

  // Get projects when component comes
  useEffect(() => {
    getProjects();
    // eslint-disable-next-line
  }, []);

  //  Check if there are projects
  if (projects.length === 0) return <p>Please create one project!</p>;

  return (
    <ul className="projects-lists">
      {projects.map((project) => (
        <Project key={project.id} project={project} />
      ))}
    </ul>
  );
};

export default ProjectsList;
