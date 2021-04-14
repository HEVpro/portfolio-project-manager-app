import React, { useContext } from 'react';
import Task from '../task/Task';
import './taskList.css';
import projectContext from '../../../context/projects/projectContext';
import taskContext from '../../../context/tasks/taskContext';

const TaskList = () => {
  // Project Context
  const projectsContext = useContext(projectContext);
  const { activeProject, deleteProject } = projectsContext;

  // Task Context
  const tasksContext = useContext(taskContext);
  const { tasksProject } = tasksContext;

  // If there are not active project
  if (!activeProject)
    return <h2 className="no-active-project">Please select a Project</h2>;
  // Array destructuring
  const [currentProject] = activeProject;

  // Delete project
  const handleDelete = () => {
    deleteProject(currentProject.id);
  };
  return (
    <div className="task-list-container">
      <div className="title">
        <p className="project-title">Project: {currentProject.name}</p>
      </div>

      <ul className="task-list">
        {tasksProject.length === 0 ? (
          <li>There are not tasks yet</li>
        ) : (
          tasksProject.map((task) => <Task key={task.id} task={task} />)
        )}
      </ul>
      <button type="button" className="delete-project" onClick={handleDelete}>
        Delete Project
      </button>
    </div>
  );
};

export default TaskList;
