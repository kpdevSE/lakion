const mongoose = require("mongoose");

const LeadSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    mobile: {
      type: String,
      required: true,
    },
    vehicleModel: {
      type: String,
      required: true,
    },
    year: {
      type: String,
      required: true,
    },
    condition: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
    city: {
      type: String,
      required: true,
    },
    province: {
      type: String,
      required: true,
    },
    zipCode: {
      type: String,
      required: true,
    },
    leadSource: {
      type: String,
      required: true,
    },
    refferalSource: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("leadSection", LeadSchema);
