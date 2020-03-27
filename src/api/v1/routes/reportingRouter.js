import express from "express";
const router = express.Router();

const reportingController = require("api/v1/controllers/reportingController");

/**
 * @route  GET api/v1/facebook/reporting/test
 * @desc   리포팅 테스트
 * @access Public
 */
router.route("/test").get(reportingController.test);

module.exports = router;
