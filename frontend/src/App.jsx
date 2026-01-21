import React, { useState, useEffect } from 'react';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
import { getTasks, createTask, updateTask, deleteTask } from './services/api';

function App() {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    try {
      setLoading(true);
      const response = await getTasks();
      setTasks(response.data);
      setError(null);
    } catch (err) {
      setError('Failed to fetch tasks. Please try again later.');
      console.error('Error fetching tasks:', err);
    } finally {
      setLoading(false);
    }
  };

  const handleAddTask = async (taskData) => {
    try {
      const response = await createTask(taskData);
      setTasks([response.data, ...tasks]);
    } catch (err) {
      setError('Failed to create task. Please try again.');
      console.error('Error creating task:', err);
    }
  };

  const handleToggleTask = async (id, completed) => {
    try {
      const response = await updateTask(id, { completed });
      setTasks(tasks.map(task => (task._id === id ? response.data : task)));
    } catch (err) {
      setError('Failed to update task. Please try again.');
      console.error('Error updating task:', err);
    }
  };

  const handleUpdateTask = async (id, taskData) => {
    try {
      const response = await updateTask(id, taskData);
      setTasks(tasks.map(task => (task._id === id ? response.data : task)));
    } catch (err) {
      setError('Failed to update task. Please try again.');
      console.error('Error updating task:', err);
    }
  };

  const handleDeleteTask = async (id) => {
    try {
      await deleteTask(id);
      setTasks(tasks.filter(task => task._id !== id));
    } catch (err) {
      setError('Failed to delete task. Please try again.');
      console.error('Error deleting task:', err);
    }
  };

  const completedCount = tasks.filter(task => task.completed).length;
  const pendingCount = tasks.length - completedCount;

  return (
    <div className="min-vh-100 bg-light">
      <nav className="navbar navbar-dark bg-primary mb-4">
        <div className="container">
          <span className="navbar-brand mb-0 h1">📋 Task Manager</span>
        </div>
      </nav>

      <div className="container">
        {error && (
          <div className="alert alert-danger alert-dismissible fade show" role="alert">
            {error}
            <button
              type="button"
              className="btn-close"
              onClick={() => setError(null)}
              aria-label="Close"
            />
          </div>
        )}

        <div className="row">
          <div className="col-md-4">
            <TaskForm onAddTask={handleAddTask} loading={loading} />

            {tasks.length > 0 && (
              <div className="card mb-4">
                <div className="card-header">
                  <h6 className="mb-0">Task Statistics</h6>
                </div>
                <div className="card-body">
                  <div className="d-flex justify-content-between mb-2">
                    <span>Total Tasks:</span>
                    <strong>{tasks.length}</strong>
                  </div>
                  <div className="d-flex justify-content-between mb-2">
                    <span>Completed:</span>
                    <strong className="text-success">{completedCount}</strong>
                  </div>
                  <div className="d-flex justify-content-between">
                    <span>Pending:</span>
                    <strong className="text-warning">{pendingCount}</strong>
                  </div>
                </div>
              </div>
            )}
          </div>

          <div className="col-md-8">
            <TaskList
              tasks={tasks}
              onToggle={handleToggleTask}
              onDelete={handleDeleteTask}
              onUpdate={handleUpdateTask}
              loading={loading}
            />
          </div>
        </div>
      </div>

      <footer className="text-center py-4 text-muted">
        <small>Task Manager © 2024</small>
      </footer>
    </div>
  );
}

export default App;
