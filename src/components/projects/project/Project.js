import React from 'react';
import './project.css';

const Project = ({ project }) => {
  return (
    <li>
      <button type="button" className="button-listproject">
        {project.name}
      </button>
    </li>
  );
};

export default Project;
