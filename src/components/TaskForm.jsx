import React, { useState, useEffect } from 'react';
import './TaskForm.css'; // Import CSS for styling

const TaskForm = ({ initialData, onSubmit }) => {
  const [task, setTask] = useState({ title: '', description: '', status: 'Pending' });
  const [errors, setErrors] = useState({});

  useEffect(() => {
    if (initialData) {
      setTask(initialData);
    }
  }, [initialData]);

  const validate = () => {
    const newErrors = {};
    if (!task.title) newErrors.title = 'Title is required.';
    if (task.description.length < 10) newErrors.description = 'Description must be at least 10 characters.';
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length) {
      setErrors(validationErrors);
    } else {
      onSubmit(task);
      setTask({ title: '', description: '', status: 'Pending' });
      setErrors({});
    }
  };

  return (
    <form onSubmit={handleSubmit} className="task-form">
      <div className="form-group">
        <label>Title:</label>
        <input
          type="text"
          value={task.title}
          onChange={(e) => setTask({ ...task, title: e.target.value })}
          placeholder="Title"
        />
        {errors.title && <span className="error">{errors.title}</span>}
      </div>
      <div className="form-group">
        <label>Description:</label>
        <textarea
          value={task.description}
          onChange={(e) => setTask({ ...task, description: e.target.value })}
          placeholder="Description"
        />
        {errors.description && <span className="error">{errors.description}</span>}
      </div>
      <div className="form-group">
        <label>Status:</label>
        <select
          value={task.status}
          onChange={(e) => setTask({ ...task, status: e.target.value })}
        >
          <option>Pending</option>
          <option>In Progress</option>
          <option>Completed</option>
        </select>
      </div>
      <button type="submit" className="submit-button">Submit</button>
    </form>
  );
};

export default TaskForm;
