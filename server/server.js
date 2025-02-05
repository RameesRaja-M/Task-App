// server.js

// Using Express
const express = require("express");
const cors = require("cors");
const bodyparser = require("body-parser");
const { port, frontendUrl } = require("./src/config/enviroment");
const connectDB = require("./src/config/database");
const taskRoutes = require("./src/routes/task.routes");
const userRoutes = require("./src/routes/user.routes");

// Create a Express Instence
const app = express();

//middleware
app.use(
  cors({
    origin: process.env.FRONTEND_URL || "http://localhost:3000",
    methods: "GET,PUT,POST,DELETE",
    allowedHeaders: "Content-Type,Authorization",
    credentials: true,
  })
);
app.use(bodyparser.json());
app.use(express.json());

// Routes
app.use("/api/tasks", taskRoutes);
app.use("/api/users", userRoutes);

// Error handling middleware (add these lines before app.listen)
const { errorConverter, errorHandler } = require("./src/errors/error");
app.use(errorConverter);
app.use(errorHandler);

// Handle 404 routes
app.use((req, res, next) => {
  next(new ApiError(404, "Not found"));
});

//connect to Database
connectDB();

app.listen(port, () => console.log(`Server running on port: ${port}`));
