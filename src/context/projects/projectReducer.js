import {
  PROJECT_FORM,
  GET_PROJECTS,
  ADD_PROJECTS,
  VALIDATE_FORM,
  ACTIVE_PROJECT,
  DELETE_PROJECT,
  PROJECT_ERROR
} from '../../types';

// eslint-disable-next-line import/no-anonymous-default-export
export default (state, action) => {
  switch (action.type) {
    case PROJECT_FORM:
      return {
        ...state,
        projectForm: true,
      };
    case GET_PROJECTS:
      return {
        ...state,
        projects: action.payload,
      };
    case ADD_PROJECTS:
      return {
        ...state,
        projects: [...state.projects, action.payload],
        projectForm: false,
        errorForm: false,
      };
    case VALIDATE_FORM:
      return {
        ...state,
        errorForm: true,
      };
    case ACTIVE_PROJECT:
      return {
        ...state,
        activeProject: state.projects.filter(
          (project) => project._id === action.payload
        ),
      };
    case DELETE_PROJECT:
      return {
        ...state,
        projects: state.projects.filter(
          (project) => project._id !== action.payload
        ),
        activeProject: null,
      };
      case PROJECT_ERROR: 
      return{
        ...state, 
        message: action.payload
      }
    default:
      return state;
  }
};
