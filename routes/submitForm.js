const express = require("express");
const router = express.Router();
const feedbackController = require("../controllers/feedback");

router.post("/sendFeedback", feedbackController.saveForm);

module.exports = router;
