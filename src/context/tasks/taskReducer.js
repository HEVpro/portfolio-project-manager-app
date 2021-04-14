import {
  ADD_TASK,
  DELETE_TASK,
  PROJECT_TASKS,
  TASK_STATE,
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
        tasksProject: state.tasks.filter(
          (task) => task.projectId === action.payload
        ),
      };
    case ADD_TASK:
      return {
        ...state,
        tasks: [action.payload, ...state.tasks],
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
        tasks: state.tasks.filter((task) => task.id !== action.payload),
      };
    case UPDATE_TASK:
    case TASK_STATE:
      return {
        ...state,
        tasks: state.tasks.map((task) =>
          task.id === action.payload.id ? action.payload : task
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
