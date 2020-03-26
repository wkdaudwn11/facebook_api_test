import express from "express";
const router = express.Router();

const testController = require("api/v1/controllers/testController.js");

/**
 * @route  GET api/v1/test
 * @desc   test
 * @access Public
 */
router.route("/").get(testController.test);

module.exports = router;
