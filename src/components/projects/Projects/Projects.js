import React from 'react';
import Header from '../../layout/header/Header';
import Sidebar from '../../layout/sidebar/Sidebar';
import TaskForm from '../../tasks/taskForm/TaskFrom';
import TaskList from '../../tasks/taskList/TaskList';

import './projects.css';

const Projects = () => {
  return (
    <div className="project-app-container">
      <Sidebar />
      <div className="main-section">
        <main>
          <Header />
          <TaskForm />
          <div className="task-container">
            <TaskList />
          </div>
        </main>
      </div>
    </div>
  );
};

export default Projects;
