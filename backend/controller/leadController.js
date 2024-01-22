const lead = require("../model/leadSchema");

// Save - Lead

const saveLead = async (req, resp) => {
  try {
    const leads = new lead({
      name: req.body.name,
      mobile: req.body.mobile,
      vehicleModel: req.body.vehicleModel,
      year: req.body.year,
      condition: req.body.condition,
      address: req.body.address,
      city: req.body.city,
      province: req.body.province,
      zipCode: req.body.zipCode,
      leadSource: req.body.leadSource,
      refferalSource: req.body.refferalSource,
    });
    await leads
      .save()
      .then((result) => {
        if (result.ok) {
          resp.status(200).json({
            status: true,
            message: "Lead added successfully",
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
      message: "Bad Request,Something went wrong",
    });
  }
};

// get all leads
const getAllLeads = async (req, resp) => {
  try {
    console.log("Fetching all leads");
    const leads = await lead.find();
    console.log("Leads fetched", leads);
    resp.status(200).json({
      status: true,
      message: "Data retrieved successfully",
      data: leads,
    });
  } catch (error) {
    console.error("Error fetching leads", error);
    resp.status(500).json({
      status: false,
      message: "Something went wrong",
    });
  }
};
// get one data using id
const getOneLead = async (req, resp) => {
  const leadID = req.params.id;
  try {
    await lead
      .findById(leadID)
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
          message: "Lead not found in this id",
        });
      });
  } catch {
    resp.status(500).json({
      status: false,
      message: "Bad request",
    });
  }
};

// update lead
const updateLead = async (req, resp) => {
  const leadID = req.params.id;
  try {
    await lead
      .findByIdAndUpdate(leadID, {
        $set: {
          name: req.body.name,
          mobile: req.body.mobile,
          vehicleModel: req.body.vehicleModel,
          year: req.body.year,
          condition: req.body.condition,
          address: req.body.address,
          city: req.body.city,
          province: req.body.province,
          zipCode: req.body.zipCode,
          leadSource: req.body.leadSource,
          refferalSource: req.body.refferalSource,
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
        resp.status(404).json({
          status: false,
          message: "Data not found to update",
        });
      });
  } catch {
    resp.status(500).json({
      status: false,
      message: "Bad Request",
    });
  }
};

// Delete Lead using id
const deleteId = async (req, resp) => {
  const leadID = req.params.id;
  try {
    await lead
      .findByIdAndDelete(leadID)
      .then((result) => {
        if (result.deletedCount > 0) {
          resp.status(200).json({
            status: true,
            message: "Deleting successfully",
            data: result,
          });
        }
      })
      .catch(() => {
        resp.status(404).json({
          status: false,
          message: "lead not found to delete",
        });
      });
  } catch {
    resp.status(500).json({
      status: false,
      message: "Bad request",
    });
  }
};

// Export to using inside another file
module.exports = {
  saveLead,
  getAllLeads,
  getOneLead,
  updateLead,
  deleteId,
};
