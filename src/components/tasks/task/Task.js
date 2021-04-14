import React, { useContext } from 'react';
import './task.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import projectContext from '../../../context/projects/projectContext';
import taskContext from '../../../context/tasks/taskContext';

const Task = ({ task }) => {
  // Get project state
  const projectsContext = useContext(projectContext);
  const { activeProject } = projectsContext;

  // Get tasks state
  const tasksContext = useContext(taskContext);
  const {
    deleteTask,
    getTasks,
    changeTaskState,
    getCurrentTask,
  } = tasksContext;

  const [currentProject] = activeProject;

  // delte task when click button
  const handleDeleteTask = (taskId) => {
    deleteTask(taskId);
    getTasks(currentProject.id);
  };
  // modify state of tasks
  const changeState = (task) => {
    if (task.completed) {
      task.completed = false;
    } else {
      task.completed = true;
    }
    changeTaskState(task);
  };
  // add current task
  const selectTask = (task) => {
    getCurrentTask(task);
  };

  return (
    <li className="task-shadow">
      <p>{task.name}</p>
      <div className="buttons-container">
        <div className="task-state">
          {task.completed ? (
            <button
              type="button"
              className="completed"
              onClick={() => changeState(task)}
            >
              Completed
            </button>
          ) : (
            <button
              type="button"
              className="incomplete"
              onClick={() => changeState(task)}
            >
              Not completed
            </button>
          )}
        </div>
        <div className="actions">
          <button
            type="button"
            className="action-button"
            onClick={() => selectTask(task)}
          >
            <FontAwesomeIcon icon={faEdit} />
          </button>
          <button
            type="button"
            className="action-button"
            onClick={() => handleDeleteTask(task.id)}
          >
            <FontAwesomeIcon icon={faTrashAlt} />
          </button>
        </div>
      </div>
    </li>
  );
};

export default Task;
