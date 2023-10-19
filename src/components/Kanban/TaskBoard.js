// TaskCard.js
import React from 'react';

const TaskCard = ({ task, onTaskUpdate, onTaskDelete }) => {
  return (
    <div className="task-card">
      <h3>{task.title}</h3>
      <p>{task.description}</p>
      <button onClick={() => onTaskUpdate(task)}>Edit</button>
      <button onClick={() => onTaskDelete(task._id)}>Delete</button>
    </div>
  );
};

export default TaskCard;
