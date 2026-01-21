import React from 'react';
import TaskItem from './TaskItem';

const TaskList = ({ tasks, onToggle, onDelete, onUpdate, loading }) => {
  if (loading) {
    return (
      <div className="text-center py-5">
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
        <p className="mt-2">Loading tasks...</p>
      </div>
    );
  }

  if (tasks.length === 0) {
    return (
      <div className="text-center py-5">
        <div className="text-muted mb-3" style={{ fontSize: '4rem' }}>📝</div>
        <h5 className="text-muted">No tasks yet</h5>
        <p className="text-muted">Create your first task to get started!</p>
      </div>
    );
  }

  return (
    <div>
      <h5 className="mb-3">All Tasks ({tasks.length})</h5>
      {tasks.map((task) => (
        <TaskItem
          key={task._id}
          task={task}
          onToggle={onToggle}
          onDelete={onDelete}
          onUpdate={onUpdate}
        />
      ))}
    </div>
  );
};

export default TaskList;
