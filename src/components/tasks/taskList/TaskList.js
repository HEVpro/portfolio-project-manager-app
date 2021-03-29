import React, { Fragment } from 'react';
import Task from '../task/Task';
import './taskList.css';

const TaskList = () => {
  const tasks = [
    { name: 'do the header', completed: false },
    { name: 'choose the colors', completed: true },
    { name: 'do login', completed: false },
    { name: 'do logout', completed: true },
  ];
  return (
    <div className="task-list-container">
      <div className="title">
        Project: <p className="project-title">Do Own Web</p>
      </div>

      <ul className="task-list">
        {tasks.length === 0 ? (
          <li>There are not tasks yet</li>
        ) : (
          tasks.map((task) => <Task task={task} />)
        )}
      </ul>
      <button type="button" className="delete-project">
        Delete Project
      </button>
    </div>
  );
};

export default TaskList;
