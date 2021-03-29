import React, { useState } from 'react';
import './newProject.css';

const NewProject = () => {
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

  const handleSubmit = (e) => {
    e.preventDeafult();
  };

  return (
    <div className="new-project-container">
      <button type="button" className="button-project">
        New Project
      </button>
      <form className="new-project">
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
          onSubmit={handleSubmit}
        />
      </form>
    </div>
  );
};

export default NewProject;
