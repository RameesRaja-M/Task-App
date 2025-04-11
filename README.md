# Task Manager App

A full-stack Task Manager web application built using **React**, **Node.js**, **Express.js**, and **MongoDB**, designed to help users manage tasks efficiently with an intuitive and responsive user interface.

This application allows users to register and log in securely, create and manage their personal task lists, and organize them by status, priority, or due date. The frontend is built with React and Tailwind CSS, while the backend uses Express.js and MongoDB for RESTful API functionality.

## Features

### 1. User Authentication
- Users can sign up and log in securely using Firebase Authentication.
- Authentication tokens are used to verify user sessions and restrict unauthorized access.
- Only authenticated users can create, update, or delete their tasks.

### 2. Task Management
- Add new tasks with a title, description, due date, and status.
- Update existing tasks to reflect progress or changes.
- Mark tasks as complete or incomplete.
- Delete tasks permanently.

### 3. Task Sorting and Pinning
- Tasks can be sorted by:
  - Title (A-Z or Z-A)
  - Date (Newest to Oldest or vice versa)
  - Status (Completed, Incomplete)
- Important tasks can be pinned to appear at the top of the list.

### 4. User-Specific Data
- Each user only sees and manages their own tasks.
- Tasks are fetched based on the authenticated user's ID.

### 5. Clean and Responsive UI
- Built with React and styled using Tailwind CSS for a modern look.
- Fully responsive design suitable for both desktop and mobile devices.
- Intuitive task management flow with minimal user friction.

## Tech Stack

### Frontend
- React
- React Router for client-side routing
- Axios for API communication
- Tailwind CSS for styling

### Backend
- Node.js
- Express.js
- MongoDB (via Mongoose for schema modeling)
- Firebase Admin SDK for authentication token verification

### Authentication
- Firebase Authentication (email and password login)

### Deployment
- Frontend deployed using **Vercel**
- Backend deployed using **Render**
- MongoDB Atlas used for cloud-hosted database

ScreenShots:
![task-1](https://github.com/user-attachments/assets/32dbbaa0-bc2d-48be-8a77-56491be15c8e)
![task-2](https://github.com/user-attachments/assets/64de3445-a4af-4bbc-aed6-e2e316b3b81a)


