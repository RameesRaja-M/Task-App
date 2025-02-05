const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema({
  title: {
    required: true,
    type: String,
  },
  description: {
    required: true,
    type: String,
  },
  date: {
    type: Date,
    default: Date.now,
  },
  status: {
    type: String,
    enum: ["ToDo", "In Progress", "Completed"],
    default: "ToDo",
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  isPinned: {
    type: Boolean,
    default: false,
  },
  userId: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Task", taskSchema);
