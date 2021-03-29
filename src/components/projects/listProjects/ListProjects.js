import React from 'react';
import Project from '../project/Project';
import './listProjects.css';

const ProjectsList = () => {
  const projects = [{ name: 'Do own web' }, { name: 'MERN project' }];

  return (
    <ul className="projects-lists">
      {projects.map((project) => (
        <Project project={project} />
      ))}
    </ul>
  );
};

export default ProjectsList;
