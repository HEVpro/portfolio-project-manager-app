import React, { useReducer } from 'react';
import projectContext from './projectContext';
import projectReducer from './projectReducer';
import {
  PROJECT_FORM,
  GET_PROJECTS,
  ADD_PROJECTS,
  VALIDATE_FORM,
  ACTIVE_PROJECT,
  DELETE_PROJECT,
} from '../../types';

const ProjectState = (props) => {
  const projects = [
    { id: 1, name: 'Do own web' },
    { id: 2, name: 'MERN project' },
    { id: 3, name: 'Learn PHP' },
  ];
  const initialState = {
    projects: [],
    projectForm: false,
    errorForm: false,
    activeProject: null,
  };
  // Dispatch for do the actions
  const [state, dispatch] = useReducer(projectReducer, initialState);

  // CRUD functions
  const showForm = () => {
    dispatch({
      type: PROJECT_FORM,
    });
  };
  const getProjects = () => {
    dispatch({
      type: GET_PROJECTS,
      payload: projects,
    });
  };
  // Add new project
  const addProject = (project) => {
    //  Insert the id
    project.id = projects.length + 1;
    //  Add the project on the state
    dispatch({
      type: ADD_PROJECTS,
      payload: project,
    });
  };

  // Validate FORM
  const showError = () => {
    dispatch({
      type: VALIDATE_FORM,
    });
  };
  // Select active project
  const activateProject = (projectId) => {
    dispatch({
      type: ACTIVE_PROJECT,
      payload: projectId,
    });
  };
  // Delete active project
  const deleteProject = (projectId) => {
    dispatch({
      type: DELETE_PROJECT,
      payload: projectId,
    });
  };

  return (
    <projectContext.Provider
      value={{
        projects: state.projects,
        projectForm: state.projectForm,
        errorForm: state.errorForm,
        activeProject: state.activeProject,
        showForm,
        getProjects,
        addProject,
        showError,
        activateProject,
        deleteProject,
      }}
    >
      {props.children}
    </projectContext.Provider>
  );
};
export default ProjectState;
