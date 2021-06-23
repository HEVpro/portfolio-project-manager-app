import React, { useContext, useState, useEffect } from 'react';
import './taskForm.css';
import projectContext from '../../../context/projects/projectContext';
import taskContext from '../../../context/tasks/taskContext';

const TaskForm = () => {
  // Get project state
  const projectsContext = useContext(projectContext);
  const { activeProject } = projectsContext;

  // Get tasks state
  const tasksContext = useContext(taskContext);
  const {
    selectedTask,
    errorTask,
    addTask,
    validateTask,
    getTasks,
    updateTasks,
  } = tasksContext;

  // Effect that identies if a task is selected

  useEffect(() => {
    if (selectedTask !== null) {
      setTask(selectedTask);
    } else {
      setTask({
        name: '',
      });
    }
  }, [selectedTask]);

  // State form
  const [task, setTask] = useState({
    name: '',
  });

  const { name } = task;

  // Read the values of the form
  const handleChangeTask = (e) => {
    setTask({
      ...task,
      [e.target.name]: e.target.value,
    });
  };

  if (!activeProject) return null;

  const [currentProject] = activeProject;

  // Submit new task
  const submitTask = (e) => {
    e.preventDefault();

    // validate
    if (name.trim() === '') {
      validateTask();
      return;
    }
    // Check if is update task or add task
    if (selectedTask === null) {
      // add task to task state
      task.project = currentProject._id;
      addTask(task);
    } else {
      // update task
      updateTasks(task);
    }

    // Get all project tasks
    getTasks(currentProject.id);
    // reboot form
    setTask({
      name: '',
    });
  };
  return (
    <div className="form-container">
      <form onSubmit={submitTask}>
        <div className="task-container">
          <input
            type="text"
            className="task-input"
            placeholder="Task name..."
            name="name"
            value={name}
            onChange={handleChangeTask}
          />
        </div>
        <div className="task-container">
          <input
            type="submit"
            className="button-submit"
            value={selectedTask ? 'Edit task' : 'Add task'}
          />
        </div>
      </form>
      {errorTask ? (
        <p className="errorTask">The name of the task is required!</p>
      ) : null}
    </div>
  );
};

export default TaskForm;
