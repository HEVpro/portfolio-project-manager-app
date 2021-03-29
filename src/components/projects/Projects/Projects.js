import React from 'react';
import Header from '../../layout/header/Header';
import Sidebar from '../../layout/sidebar/Sidebar';
import TaskForm from '../../tasks/taskForm/TaskFrom';
import './projects.css';

const Projects = () => {
  return (
    <div className="project-app-container">
      <Sidebar />
      <div className="main-section">
        <main>
          <Header />
          <TaskForm />
          <div className="task-container"></div>
        </main>
      </div>
    </div>
  );
};

export default Projects;
