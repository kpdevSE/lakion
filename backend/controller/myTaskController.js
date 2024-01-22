const MyTasks = require("../model/myTaskSchema");

// save-myTasks
const saveMyTask = async (req, resp) => {
  try {
    const mytasks = new MyTasks({
      taskStatus: req.body.taskStatus,
      comments: req.body.comments,
    });
    await mytasks
      .save()
      .then((result) => {
        if (result.ok) {
          resp.status(200).json({
            status: true,
            message: "Data saved successfully",
            data: result,
          });
        }
      })
      .catch((error) => {
        resp.json(error);
      });
  } catch {
    resp.status(500).json({
      status: false,
      message: "Bad Request",
    });
  }
};

// get-all-myTasks
const getAllMyTasks = async (req, resp) => {
  try {
    await MyTasks.find()
      .then((result) => {
        if (result.ok) {
          resp.status(200).json({
            status: true,
            message: "Data getting successfully",
          });
        }
      })
      .catch((error) => {
        resp.json(error);
      });
  } catch {
    resp.status(500).json({
      status: false,
      message: "Bad request Something wrong",
    });
  }
};

// get-one-myTask
const getOneMyTask = async (req, resp) => {
  const myTaskID = req.params.id;
  try {
    await MyTasks.findById(myTaskID)
      .then((result) => {
        if (result.ok) {
          resp.status(200).json({
            status: true,
            message: "Data getting successfully using id",
            data: result,
          });
        }
      })
      .catch(() => {
        resp.status(404).json({
          status: false,
          message: "Data not found this id",
        });
      });
  } catch {
    resp.status(500).json({
      status: false,
      message: "Bad request ,Something went wrong",
    });
  }
};

// update-myTask
const updateMyTask = async (req, resp) => {
  const mytaskID = req.params.id;
  try {
    await MyTasks.findByIdAndUpdate(mytaskID, {
      $set: {
        taskStatus: req.body.taskStatus,
        comments: req.body.comments,
      },
    })
      .then((result) => {
        if (result.isModified > 0) {
          resp.status(200).json({
            status: true,
            message: "Updated successfully",
          });
        }
      })
      .catch(() => {
        resp.status(404),
          json({
            status: false,
            message: "myTask not found in this id",
          });
      });
  } catch {
    resp.status(500).json({
      status: false,
      message: "Bad request ,Something went wrong",
    });
  }
};

// delete-myTask
const deleteMyTask = async (req, resp) => {
  const mytaskID = req.params.id;
  try {
    await MyTasks.findByIdAndDelete(mytaskID)
      .then((result) => {
        if (result.deletedCount > 0) {
          resp.status(200).json({
            status: true,
            message: "Task Deletd successfully",
          });
        }
      })
      .catch(() => {
        resp.status(404).json({
          status: false,
          message: "Task not found",
        });
      });
  } catch {
    resp.status(500).json({
      status: false,
      message: "Bad Request ,Data not found",
    });
  }
};

module.exports = {
  saveMyTask,
  getAllMyTasks,
  getOneMyTask,
  updateMyTask,
  deleteMyTask,
};
