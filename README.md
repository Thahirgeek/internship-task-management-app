# Task Manager

A production-ready full-stack Task Management Web Application built with React, Node.js, Express, and MongoDB.

## Project Overview

This application allows users to create, view, update, and delete tasks. Tasks can be marked as completed or pending, providing a simple yet effective task management solution.

## Tech Stack

### Frontend
- React 18 with Vite
- Bootstrap 5 for styling
- Axios for API calls
- JavaScript (ES6+)

### Backend
- Node.js
- Express.js
- MongoDB with Mongoose ODM

### Deployment
- Frontend: Netlify
- Backend: Railway

## Features

- Create new tasks with title and optional description
- View all tasks in a responsive list
- Edit task details
- Delete tasks
- Mark tasks as completed or pending
- Visual distinction for completed tasks
- Task statistics (total, completed, pending)
- Loading and empty states
- Error handling with user feedback

## API Endpoints

| Method | Endpoint | Purpose |
|--------|----------|---------|
| GET | /api/tasks | Fetch all tasks |
| POST | /api/tasks | Create a new task |
| PUT | /api/tasks/:id | Update a task |
| DELETE | /api/tasks/:id | Delete a task |

## Setup Instructions

### Prerequisites
- Node.js (v14 or higher)
- MongoDB Atlas account
- Git

### Backend Setup

1. Navigate to the backend directory:
```bash
cd backend
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file in the backend directory:
```env
PORT=5000
MONGODB_URI=your_mongodb_connection_string
```

4. Start the backend server:
```bash
npm start
```

### Frontend Setup

1. Navigate to the frontend directory:
```bash
cd frontend
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:3000`

## Project Structure

```
task-manager/
├── backend/
│   ├── config/
│   │   └── db.js
│   ├── controllers/
│   │   └── taskController.js
│   ├── models/
│   │   └── Task.js
│   ├── routes/
│   │   └── taskRoutes.js
│   ├── .env
│   ├── package.json
│   └── server.js
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   ├── TaskForm.jsx
│   │   │   ├── TaskItem.jsx
│   │   │   └── TaskList.jsx
│   │   ├── services/
│   │   │   └── api.js
│   │   ├── App.jsx
│   │   └── main.jsx
│   ├── index.html
│   ├── package.json
│   └── vite.config.js
└── README.md
```

## Task Schema

```javascript
{
  title: { type: String, required: true },
  description: { type: String },
  completed: { type: Boolean, default: false },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now }
}
```

## Live Demo

- **Frontend URL**: https://task-manager-frontend-demo.netlify.app
- **Backend API**: https://task-manager-backend-production-e9d5.up.railway.app/api/tasks

## Development

To run the project locally:

1. Start MongoDB locally or use MongoDB Atlas
2. Configure the backend `.env` file with your MongoDB connection string
3. Run backend: `cd backend && npm start`
4. Run frontend: `cd frontend && npm run dev`
5. Access the application at `http://localhost:3000`

## Testing

Use Postman or curl to test the API endpoints:

```bash
# Get all tasks
curl https://task-manager-backend-production-e9d5.up.railway.app/api/tasks

# Create a task
curl -X POST https://task-manager-backend-production-e9d5.up.railway.app/api/tasks \
  -H "Content-Type: application/json" \
  -d '{"title": "Sample Task", "description": "This is a sample task"}'
```

## License

This project is licensed under the MIT License.

## Author

Developed as an internship final project demonstrating full-stack development skills.
