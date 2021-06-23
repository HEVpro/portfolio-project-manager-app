import {
  ADD_TASK,
  DELETE_TASK,
  PROJECT_TASKS,
  VALIDATE_TASK,
  CURRENT_TASK,
  UPDATE_TASK,
} from '../../types';

// eslint-disable-next-line import/no-anonymous-default-export
export default (state, action) => {
  switch (action.type) {
    case PROJECT_TASKS:
      return {
        ...state,
        tasksProject: action.payload
      };
    case ADD_TASK:
      return {
        ...state,
        tasksProject: [action.payload, ...state.tasksProject],
        errorTask: false,
      };
    case VALIDATE_TASK:
      return {
        ...state,
        errorTask: true,
      };
    case DELETE_TASK:
      return {
        ...state,
        tasksProject: state.tasksProject.filter((task) => task._id !== action.payload),
      };
    case UPDATE_TASK:
      return {
        ...state,
        tasksProject: state.tasksProject.map((task) =>
          task._id === action.payload._id ? action.payload : task
        ),
        selectedTask: null,
      };
    case CURRENT_TASK:
      return {
        ...state,
        selectedTask: action.payload,
      };

    default:
      return state;
  }
};
