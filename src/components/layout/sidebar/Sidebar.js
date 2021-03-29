import React from 'react';
import ProjectsList from '../../projects/listProjects/ListProjects';
import NewProject from '../../projects/newProject/NewProject';
import './sidebar.css';

const Sidebar = () => {
  return (
    <aside>
      <h1>
        MERN <span>Project</span>
      </h1>
      <NewProject />
      <div className="projects">
        <h2>Your projects</h2>
        <ProjectsList />
      </div>
    </aside>
  );
};

export default Sidebar;
