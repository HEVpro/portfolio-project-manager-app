import React, { useReducer } from 'react';
import taskContext from './taskContext';
import TaskReducer from './taskReducer';
import {
  PROJECT_TASKS,
  ADD_TASK,
  VALIDATE_TASK,
  DELETE_TASK,
  CURRENT_TASK,
  UPDATE_TASK,
} from '../../types';
import axiosClient from '../../config/axios';

const TaskState = (props) => {
  const initialState = {
    tasksProject: [],
    errorTask: false,
    selectedTask: null,
  };

  const [state, dispatch] = useReducer(TaskReducer, initialState);

  // Get project tasks
  const getTasks = async(project) => {
    console.log(project)
    try {
      const response = await axiosClient.get('/api/tasks', {params: {project}})
      console.log(response);
      dispatch({
        type: PROJECT_TASKS,
        payload: response.data.tasks,
      });
    } catch (error) {
      console.log(error);
    }

  };

  // Add task to project
  const addTask = async (task) => {

    try {
      const response = await axiosClient.post('/api/tasks', task);
      console.log(response);
      dispatch({
        type: ADD_TASK,
        payload: response.data.task
      });
    } catch (error) {
      console.log(error);
    }

  };
  // validate task
  const validateTask = () => {
    dispatch({
      type: VALIDATE_TASK,
    });
  };
  // Delete task by Id
  const deleteTask = async(taskId, project) => {
    try {
      await axiosClient.delete(`/api/tasks/${taskId}`, {params: {project}})
      dispatch({
        type: DELETE_TASK,
        payload: taskId,
      });
    } catch (error) {
      console.log(error);
    }

  };
  // update a task
  const updateTasks = async (task) => {
    try {
      const response = await axiosClient.put(`/api/tasks/${task._id}`, task)
      dispatch({
        type: UPDATE_TASK,
        payload: response.data.task,
      });
    } catch (error) {
      console.log(error)
    }

  };
  // charge current task
  const getCurrentTask = (task) => {
    dispatch({
      type: CURRENT_TASK,
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
        getCurrentTask,
        updateTasks,
      }}
    >
      {props.children}
    </taskContext.Provider>
  );
};

export default TaskState;
