import express from "express";
const router = express.Router();

const reportingController = require("api/v1/controllers/reportingController");

/**
 * @route  POST api/v1/facebook/reporting
 * @desc   리포팅 가져오기
 * @access Public
 */
router.route("/").post(reportingController.getReporting);

module.exports = router;
