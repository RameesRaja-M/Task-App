const Task = require("../models/task.model");
const ApiError = require("../utils/ApiError");
class TaskService {
  async createTask(taskData) {
    const task = await Task.create(taskData);
    return task;
  }

  async getAllTasks() {
    const tasks = await Task.find().sort({ isPinned: -1, createdAt: 1 });
    return tasks;
  }

  async getTasksByUserId(userId) {
    const tasks = await Task.find({ userId }).sort({
      isPinned: -1,
      createdAt: 1,
    });
    return tasks;
  }

  async updateTask(taskId, updateData) {
    const task = await Task.findByIdAndUpdate(taskId, updateData, {
      new: true,
    });

    if (!task) {
      throw new ApiError(404, "Task not found");
    }

    return task;
  }

  async deleteTask(taskId) {
    const task = await Task.findByIdAndDelete(taskId);

    if (!task) {
      throw new ApiError(404, "Task not found");
    }

    return task;
  }

  async togglePinTask(taskId) {
    const task = await Task.findById(taskId);
    if (!task) {
      throw new ApiError(404, "Task not found");
    }

    task.isPinned = !task.isPinned;
    await task.save();
    return task;
  }
}

module.exports = new TaskService();
