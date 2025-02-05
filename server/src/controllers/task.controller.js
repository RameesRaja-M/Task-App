const taskService = require("../services/task.service");
const catchAsync = require("../utils/catchAsync");

exports.createTask = catchAsync(async (req, res) => {
  const { userId, title, description, status } = req.body;

  if (!userId || !title || !description) {
    return res.status(400).json({
      message: "Title, Description and UserID are required",
    });
  }

  const newTask = await taskService.createTask({
    userId,
    title,
    description,
    status,
  });
  res.status(201).json(newTask);
});

exports.updateTask = catchAsync(async (req, res) => {
  const { id } = req.params;
  const { title, description, status } = req.body;

  if (!id) {
    return res.status(400).json({ message: "Task ID is required" });
  }

  if (!title || !description) {
    return res.status(400).json({
      message: "Title and Description are required",
    });
  }

  const task = await taskService.updateTask(id, {
    title,
    description,
    status,
  });
  res.json(task);
});

exports.getTasks = catchAsync(async (req, res) => {
  const { userId } = req.query;
  const tasks = userId
    ? await taskService.getTasksByUserId(userId)
    : await taskService.getAllTasks();
  res.json(tasks);
});

exports.togglePinTask = catchAsync(async (req, res) => {
  const { id } = req.params;

  if (!id) {
    return res.status(400).json({ message: "Task ID is required" });
  }

  const updatedTask = await taskService.togglePinTask(id);
  res.json(updatedTask);
});

exports.deleteTask = catchAsync(async (req, res) => {
  const { id } = req.params;

  if (!id) {
    return res.status(400).json({ message: "Task ID is required" });
  }

  await taskService.deleteTask(id);
  res.status(200).json({ message: "Task Deleted Successfully" });
});
