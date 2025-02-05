const express = require("express");
const router = express.Router();
const taskController = require("../controllers/task.controller");

router.post("/", taskController.createTask);
router.get("/", taskController.getTasks);
router.put("/:id", taskController.updateTask);
router.delete("/:id", taskController.deleteTask);
router.put("/pin/:id", taskController.togglePinTask);

module.exports = router;
