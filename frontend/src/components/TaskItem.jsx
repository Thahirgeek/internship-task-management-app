import React, { useState } from 'react';

const TaskItem = ({ task, onToggle, onDelete, onUpdate }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editTitle, setEditTitle] = useState(task.title);
  const [editDescription, setEditDescription] = useState(task.description || '');

  const handleUpdate = () => {
    if (editTitle.trim()) {
      onUpdate(task._id, { title: editTitle, description: editDescription, completed: task.completed });
      setIsEditing(false);
    }
  };

  if (isEditing) {
    return (
      <div className="card mb-3">
        <div className="card-body">
          <div className="mb-3">
            <input
              type="text"
              className="form-control mb-2"
              value={editTitle}
              onChange={(e) => setEditTitle(e.target.value)}
              placeholder="Task title"
              required
            />
            <textarea
              className="form-control"
              value={editDescription}
              onChange={(e) => setEditDescription(e.target.value)}
              placeholder="Task description (optional)"
              rows="2"
            />
          </div>
          <div className="btn-group">
            <button className="btn btn-success btn-sm me-2" onClick={handleUpdate}>
              Save
            </button>
            <button className="btn btn-secondary btn-sm" onClick={() => setIsEditing(false)}>
              Cancel
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={`card mb-3 ${task.completed ? 'border-success bg-light' : ''}`}>
      <div className="card-body">
        <div className="d-flex justify-content-between align-items-start">
          <div className="flex-grow-1">
            <h5 className={`card-title ${task.completed ? 'text-decoration-line-through text-muted' : ''}`}>
              {task.title}
            </h5>
            {task.description && (
              <p className={`card-text ${task.completed ? 'text-muted' : ''}`}>
                {task.description}
              </p>
            )}
            <small className="text-muted">
              Created: {new Date(task.createdAt).toLocaleDateString()}
            </small>
          </div>
          <div className="btn-group ms-3">
            <button
              className={`btn btn-sm ${task.completed ? 'btn-warning' : 'btn-success'}`}
              onClick={() => onToggle(task._id, !task.completed)}
            >
              {task.completed ? 'Mark Incomplete' : 'Mark Complete'}
            </button>
            <button
              className="btn btn-primary btn-sm ms-2"
              onClick={() => setIsEditing(true)}
            >
              Edit
            </button>
            <button
              className="btn btn-danger btn-sm ms-2"
              onClick={() => onDelete(task._id)}
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TaskItem;
