const express = require("express");
const myTaskController = require("../controller/myTaskController");

const router = express.Router();

router.post("/save-mytask", myTaskController.saveMyTask);
router.get("/getall-mytask", myTaskController.getAllMyTasks);
router.get("/getone-mytask/:id", myTaskController.getOneMyTask);
router.put("/update-mytask/:id", myTaskController.updateMyTask);
router.delete("/delete-mytask/:id", myTaskController.deleteMyTask);

module.exports = router;
