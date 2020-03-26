import express from "express";
const router = express.Router();

const adController = require("api/v1/controllers/adController");

/**
 * @route  GET api/v1/facebook/ad/list
 * @desc   애드 목록 불러오기
 * @access Public
 */
router.route("/list").get(adController.getAdList);

module.exports = router;
