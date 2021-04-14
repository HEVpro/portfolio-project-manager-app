import React, { useContext, useState } from 'react';
import projectContext from '../../../context/projects/projectContext';
import './newProject.css';

const NewProject = () => {
  // Get our project form state
  const projectsContext = useContext(projectContext);
  const {
    projectForm,
    errorForm,
    showForm,
    addProject,
    showError,
  } = projectsContext;

  const [project, setProject] = useState({
    name: '',
  });

  const { name } = project;

  const handleChange = (e) => {
    setProject({
      ...project,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmitProject = (e) => {
    e.preventDefault();
    // Validar el proyecto
    if (name === '') {
      showError();
      return;
    }
    //  Add project
    addProject(project);

    // Reset project form
    setProject({
      name: '',
    });
  };

  return (
    <div className="new-project-container">
      <button type="button" className="button-project" onClick={showForm}>
        New Project
      </button>
      {projectForm ? (
        <form className="new-project" onSubmit={onSubmitProject}>
          <input
            type="text"
            className="input-project"
            placeholder="Project's name"
            name="name"
            onChange={handleChange}
            value={name}
          />
          <input
            type="submit"
            className="button-newproject"
            value="Add Project"
          />
        </form>
      ) : null}
      {errorForm ? (
        <p className="errorMessage">The name of the project is required</p>
      ) : null}
    </div>
  );
};

export default NewProject;
