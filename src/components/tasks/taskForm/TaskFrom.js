import React from 'react';
import './taskForm.css';

const TaskForm = () => {
  return (
    <div className="form-container">
      <form>
        <div className="task-container">
          <input
            type="text"
            className="task-input"
            placeholder="Task name..."
            name="name"
          />
        </div>
        <div className="task-container">
          <input type="submit" className="button-submit" value="Add task" />
        </div>
      </form>
    </div>
  );
};

export default TaskForm;
