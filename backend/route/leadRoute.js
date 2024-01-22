const express = require("express");

// import controller and router files and dependancies
const leadController = require("../controller/leadController");
const router = express.Router();

// create post,get,put,delete routes
router.post("/save-lead", leadController.saveLead);
router.get("/getleads", leadController.getAllLeads);
router.get("/get-onelead/:id", leadController.getOneLead);
router.put("/update-lead/:id", leadController.updateLead);
router.delete("/delete-lead/:id", leadController.deleteId);

// export to using inside another file
module.exports = router;
