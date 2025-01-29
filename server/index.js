// server.js

// Using Express
const express = require('express')
const bodyparser = require('body-parser')
const cors = require('cors');
const { default: mongoose } = require('mongoose');

// Create a Express Instence 
const app = express();
app.use(cors({
    origin:process.env.FRONTEND_URL || 'https://task-apps-client.vercel.app',
    methods: 'GET,PUT,POST,DELETE',
    credentials: true,
}))
app.use(bodyparser.json());

// .env
require('dotenv').config()
const port = process.env.PORT || 5000
const mongoURL = process.env.MONGO_URL

// Middleware
app.use(express.json())
 
// MongoDB Connection
mongoose.connect(process.env.MONGO_URL).then(() => {
    console.log("Connection mongo DB Successfull")
})

// Define Schema
const taskschema = new mongoose.Schema({
    title: {
        required: true,
        type: String
    },
    description: {
        required: true,
        type: String
    },
    date: {
        type: Date,
        default: Date.now
    },
    status: {
        type: String,
        enum: ['ToDo', 'In Progress', 'Completed'],
        default: 'ToDo'
    },
    createdAt: {
        type: Date,
        default: Date.now // Automatically set when the task is created
    },
    isPinned: {
        type: Boolean,
        default: false
    },
    userId: { 
        type: String,
         required: true 
        }, // User UID
    

})

const userschema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    uid: {
        type: String,
        required: true,
        unique: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
})


// Model
const taskmodel = mongoose.model('Task', taskschema)
const usermodel = mongoose.model('User', userschema)

// Create a New Tasks
app.post('/api/tasks', async (req, res) => {

    const {userId, title, description, status, } = req.body;

    if (!userId || !title || !description) {
        return res.status(400).json({ message: "Title,Description and UserID are required" });
    }

    try {
        const newTask = new taskmodel({ userId,
             title, description, status, });
        await newTask.save();
        res.status(201).json(newTask)
    }

    catch (error) {
        console.log(error);
        res.status(500).json({ message: error.message });
    }

})

// SignUp Route
app.post('/api/signup', async (req, res) => {
    const { uid, email } = req.body;

    try {
        if (!uid || !email) {
            return res.status(400).json({ error: "UID and Email are required" });
        }

        const newUser = new usermodel({ uid, email });
        await newUser.save();
        res.status(201).json({ message: "User saved successfully" });
    } catch (error) {
        console.error("Error saving user:", error);  
        res.status(500).json({ error: "Failed to save user" });
    }
});


// Get all Tasks
app.get('/api/tasks', async (req, res) => {
    try {
        const tasks = await taskmodel.find().sort({ isPinned: -1, createdAt: 1 });
        res.json(tasks)
    }
    catch (error) {
        console.log(error);
        res.status(500).json({ message: error.message });
    }
})


// Update all Tasks
app.put('/api/tasks/:id', async (req, res) => {
    try {
        const { title, description, status, } = req.body;
        const id = req.params.id;

        if (!title || !description) {
            return res.status(400).json({ message: "Title and Description are required" });
        }

        const updatedTask = await taskmodel.findByIdAndUpdate(
            id,
            {
                title,
                description,
                status,
            },
            { new: true }
        );

        if (!updatedTask) {
            return res.status(404).json({ message: "Task Not Found" });
        }

        res.json(updatedTask);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: error.message });
    }
});


// Delete a Task
app.delete('/api/tasks/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const deletedTask = await taskmodel.findByIdAndDelete(id)

        if (!deletedTask) {
            return res.status(404).json({ message: "Task Not Found" });
        }

        res.status(200).json({ message: "Task Deleted Successfully" });
    }
    catch (error) {
        console.log(error);
        res.status(500).json({ message: error.message });
    }

})


// Pin a Task
app.put('/api/tasks/pin/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const task = await taskmodel.findById(id);

        if (!task) {
            return res.status(404).json({ message: "Task Not Found" });
        }

        task.isPinned = !task.isPinned; // Toggle the pin status
        await task.save();

        res.json(task);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: error.message });
    }
});


// Start server
const PORT = 5000
app.listen(PORT, () => console.log("Server running on port :"+ PORT))
