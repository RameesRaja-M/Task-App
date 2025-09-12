# Task Manager App

A full-stack Task Manager web application built using **React**, **Node.js**, **Express.js**, and **MongoDB**, designed to help users manage tasks efficiently with an intuitive and responsive user interface.

This application allows users to register and log in securely, create and manage their personal task lists, and organize them by status, priority, or due date. The frontend is built with React and Tailwind CSS, while the backend uses Express.js and MongoDB for RESTful API functionality.

## Live Link

Website : https://task-apps-client.vercel.app/

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


![task-1](https://github.com/user-attachments/assets/095da58c-6a6e-4d64-86d5-f653e821cda2)

![task-2](https://github.com/user-attachments/assets/9f770ca7-e313-44c1-a8e5-322336a69217)

![task-3](https://github.com/user-attachments/assets/6093eccc-8e05-4593-8bb4-8a28c97e6dec)

![task-4](https://github.com/user-attachments/assets/737ed6bd-ddf6-4fbb-8a77-e6808c1e63f5)

![task-5](https://github.com/user-attachments/assets/61ebaaf2-7b71-4b33-ae6e-e55c312de4c4)
