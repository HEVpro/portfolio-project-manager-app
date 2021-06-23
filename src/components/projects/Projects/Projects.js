import React, { useContext, useEffect } from 'react';
import Header from '../../layout/header/Header';
import Sidebar from '../../layout/sidebar/Sidebar';
import TaskForm from '../../tasks/taskForm/TaskFrom';
import TaskList from '../../tasks/taskList/TaskList';
import AuthContext from '../../../context/auth/authContext';

import './projects.css';

const Projects = () => {
  // Get the auth info
  const authContext = useContext(AuthContext);
  const { authUser } = authContext;

  useEffect(() => {
    authUser();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
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
