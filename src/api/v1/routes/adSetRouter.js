import express from "express";
const router = express.Router();

const adSetController = require("api/v1/controllers/adSetController");

/**
 * @route  GET api/v1/facebook/ad-set/list
 * @desc   애드셋 목록 불러오기
 * @access Public
 */
router.route("/list").get(adSetController.getAdSetList);

module.exports = router;
