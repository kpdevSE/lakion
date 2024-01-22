const express = require("express"); //importing express
const taskController = require("../controller/taskController"); //importing task Controller file

const router = express.Router();

router.post("/save-task", taskController.saveTasks);
router.get("/get-tasks", taskController.getAllTasks);
router.get("/get-task/:id", taskController.getOneTask);
router.put("/update-task/:id", taskController.updateTask);
router.delete("/delete-task/:id", taskController.deleteTask);

module.exports = router;
