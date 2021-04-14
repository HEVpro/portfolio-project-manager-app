import React, { useReducer } from 'react';
import taskContext from './taskContext';
import TaskReducer from './taskReducer';
import {
  PROJECT_TASKS,
  ADD_TASK,
  VALIDATE_TASK,
  DELETE_TASK,
  TASK_STATE,
  CURRENT_TASK,
  UPDATE_TASK,
} from '../../types';

const TaskState = (props) => {
  const initialState = {
    tasks: [
      { id: 0, name: 'do the header', completed: false, projectId: 1 },
      { id: 1, name: 'choose the colors', completed: true, projectId: 2 },
      { id: 2, name: 'do login', completed: false, projectId: 1 },
      { id: 3, name: 'do testing', completed: true, projectId: 3 },
      { id: 4, name: 'do loops', completed: true, projectId: 2 },
      { id: 5, name: 'test production', completed: true, projectId: 3 },
      { id: 6, name: 'doing nothing', completed: true, projectId: 1 },
      { id: 7, name: 'do logout', completed: true, projectId: 3 },
    ],
    tasksProject: null,
    errorTask: false,
    selectedTask: null,
  };

  const [state, dispatch] = useReducer(TaskReducer, initialState);

  // Get project tasks
  const getTasks = (projectId) => {
    dispatch({
      type: PROJECT_TASKS,
      payload: projectId,
    });
  };

  // Add task to project
  const addTask = (task) => {
    task.id = state.tasks.length + 1;
    dispatch({
      type: ADD_TASK,
      payload: task,
    });
  };
  // validate task
  const validateTask = () => {
    dispatch({
      type: VALIDATE_TASK,
    });
  };
  // Delete task by Id
  const deleteTask = (taskId) => {
    dispatch({
      type: DELETE_TASK,
      payload: taskId,
    });
  };
  // Get the task state
  const changeTaskState = (task) => {
    dispatch({
      type: TASK_STATE,
      payload: task,
    });
  };
  // charge current task
  const getCurrentTask = (task) => {
    dispatch({
      type: CURRENT_TASK,
      payload: task,
    });
  };
  // update a task
  const updateTasks = (task) => {
    dispatch({
      type: UPDATE_TASK,
      payload: task,
    });
  };
  return (
    <taskContext.Provider
      value={{
        tasks: state.tasks,
        tasksProject: state.tasksProject,
        errorTask: state.errorTask,
        selectedTask: state.selectedTask,
        getTasks,
        addTask,
        validateTask,
        deleteTask,
        changeTaskState,
        getCurrentTask,
        updateTasks,
      }}
    >
      {props.children}
    </taskContext.Provider>
  );
};

export default TaskState;
