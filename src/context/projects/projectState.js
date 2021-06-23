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
  PROJECT_ERROR
} from '../../types';
import axiosClient from '../../config/axios';

const ProjectState = (props) => {

  const initialState = {
    projects: [],
    projectForm: false,
    errorForm: false,
    activeProject: null,
    message: null
  };
  // Dispatch for do the actions
  const [state, dispatch] = useReducer(projectReducer, initialState);

  // CRUD functions
  const showForm = () => {
    dispatch({
      type: PROJECT_FORM,
    });
  };
  const getProjects = async () => {
    try {
      const response = await axiosClient.get('/api/projects');
      dispatch({
        type: GET_PROJECTS,
        payload: response.data.projects
      })
    } catch (error) {
      console.log(error);
    }
  };
  // Add new project
  const addProject =async (project) => {
    try {
      const response = await axiosClient.post('/api/projects', project);
      dispatch({
        type: ADD_PROJECTS,
        payload: response.data,
      });
    } catch (error) {
      console.log(error);
    }
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
  const deleteProject = async(projectId) => {
    try {
      await axiosClient.delete(`/api/projects/${projectId}`);
      dispatch({
        type: DELETE_PROJECT,
        payload: projectId,
      });
    } catch (error) {
      const alert = {
        msg: 'There are an error!',
        category: 'alert-error'
      }
      dispatch({
        type: PROJECT_ERROR,
        payload: alert
      })

    }

  };

  return (
    <projectContext.Provider
      value={{
        projects: state.projects,
        projectForm: state.projectForm,
        errorForm: state.errorForm,
        activeProject: state.activeProject,
        message: state.message,
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
