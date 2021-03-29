import React from 'react';
import './task.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrashAlt } from '@fortawesome/free-solid-svg-icons';

const Task = ({ task }) => {
  return (
    <li className="task shadow">
      <p>{task.name}</p>
      <div className="buttons-container">
        <div className="task-state">
          {task.completed ? (
            <button type="button" className="completed">
              Completed
            </button>
          ) : (
            <button type="button" className="incomplete">
              Not completed
            </button>
          )}
        </div>
        <div className="actions">
          <button type="button" className="action-button">
            <FontAwesomeIcon icon={faEdit} />
          </button>
          <button type="button" className="action-button">
            <FontAwesomeIcon icon={faTrashAlt} />
          </button>
        </div>
      </div>
    </li>
  );
};

export default Task;
