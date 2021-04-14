import React, { useContext } from 'react';
import './project.css';
import projectContext from '../../../context/projects/projectContext';
import taskContext from '../../../context/tasks/taskContext';

const Project = ({ project }) => {
  // Get projects state
  const projectsContext = useContext(projectContext);
  const { activateProject } = projectsContext;

  // Get tasks state
  const tasksContext = useContext(taskContext);
  const { getTasks } = tasksContext;

  // Function to add current project
  const selectProject = (id) => {
    activateProject(id); //Select current project
    getTasks(id);
  };
  return (
    <li>
      <button
        type="button"
        className="button-listproject"
        onClick={() => selectProject(project.id)}
      >
        {project.name}
      </button>
    </li>
  );
};

export default Project;
