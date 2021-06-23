import React, { useContext, useEffect } from 'react';
import Project from '../project/Project';
import './listProjects.css';
import projectContext from '../../../context/projects/projectContext';
import AlertContext from '../../../context/alerts/alertContext';

const ProjectsList = () => {
  // Use projects from initialState in Context
  const projectsContext = useContext(projectContext);
  const { message, projects, getProjects } = projectsContext;

  const alertContext = useContext(AlertContext);
  const {alert, showAlert} = alertContext;

  // Get projects when component comes
  useEffect(() => {
    if(message){
      showAlert(message.msg, message.category)
    }
    getProjects();
    // eslint-disable-next-line
  }, [message]);

  //  Check if there are projects
  if (projects.length === 0) return <p>Please create one project!</p>;

  return (
    <ul className="projects-lists">
      {alert ? (<div className={alert.category}>{alert.msg}</div>): null}
      {projects.map((project) => (
        <Project key={project._id} project={project} />
      ))}
    </ul>
  );
};

export default ProjectsList;
