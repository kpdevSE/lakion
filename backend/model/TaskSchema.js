const mongoose = require("mongoose");

const TaskSchema = new mongoose.Schema(
  {
    qulifiedLead: {
      type: String,
      required: true,
    },
    driver: {
      type: String,
      required: true,
    },
    shedule: {
      type: String,
      required: false,
    },
    notes: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("tasksection", TaskSchema);
