const Tasks = require("../model/TaskSchema");

// Save -Tasks
const saveTasks = async (req, resp) => {
  try {
    const tasks = new Tasks({
      qulifiedLead: req.body.qulifiedLead,
      driver: req.body.driver,
      shedule: req.body.shedule,
      notes: req.body.notes,
    });
    await tasks
      .save()
      .then((result) => {
        if (result.ok) {
          resp.status(200).json({
            status: true,
            message: "Data added successfully",
            data: result,
          });
        }
      })
      .catch((error) => {
        resp.status(404).json(error);
      });
  } catch {
    resp.status(500).json({
      status: 500,
      message: "Bad request",
    });
  }
};

// get all tasks
const getAllTasks = async (req, resp) => {
  try {
    await Tasks.find()
      .then((result) => {
        if (result.ok) {
          resp.status(200).json({
            status: true,
            message: "Data getting successfully",
            data: result,
          });
        }
      })
      .catch((error) => {
        resp.status(404).json({
          status: false,
          message: "Data not found",
        });
      });
  } catch {
    resp.status(500).json({
      status: false,
      message: "Bad Request .Soomething went wrong",
    });
  }
};

// get one lead using id
const getOneTask = async (req, resp) => {
  const taskID = req.params.id;
  try {
    await Tasks.findById(taskID)
      .then((result) => {
        if (result.ok) {
          resp.status(200).json({
            status: true,
            message: "Data getting successfully",
            data: result,
          });
        }
      })
      .catch(() => {
        resp.status(404).json({
          status: false,
          message: "Data not found in this id",
        });
      });
  } catch {
    resp.status(500).json({
      status: false,
      message: "Bad request",
    });
  }
};

// update task using id
const updateTask = async (req, resp) => {
  const taskID = req.params.id;
  try {
    await Tasks.findByIdAndUpdate(taskID, {
      $set: {
        qulifiedLead: req.body.qulifiedLead,
        driver: req.body.driver,
        shedule: req.body.shedule,
        notes: req.body.notes,
      },
    }).then((result) => {
      if (result.isModified > 0) {
        resp.status(200).json({
          status: true,
          message: "Data updated successsfully",
          data: result,
        });
      }
    });
  } catch {
    resp.status(500).json({
      status: false,
      message: "Something went wrong",
    });
  }
};

// Delete Task usoing id
const deleteTask = async (req, resp) => {
  const taskID = req.params.id;
  try {
    await Tasks.findByIdAndDelete(taskID)
      .then((result) => {
        if (result.deletedCount > 0) {
          resp.status(200).json({
            status: true,
            message: "Data deleted successfully",
          });
        }
      })
      .catch(() => {
        resp.status(404).json({
          status: false,
          message: "Data not found to delete",
        });
      });
  } catch {
    resp.status(500).json({
      status: false,
      message: "Bad Request .Something went wrong",
    });
  }
};

module.exports = {
  saveTasks,
  getAllTasks,
  getOneTask,
  updateTask,
  deleteTask,
};
