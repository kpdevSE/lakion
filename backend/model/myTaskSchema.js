const mongoose = require("mongoose");

const MyTaskSchema = new mongoose.Schema(
  {
    taskStatus: {
      type: String,
      required: true,
    },
    comments: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("mytasks", MyTaskSchema);
