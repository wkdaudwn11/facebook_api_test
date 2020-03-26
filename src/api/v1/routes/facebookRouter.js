import express from "express";
const router = express.Router();

const facebookController = require("api/v1/controllers/facebookController.js");

/**
 * @route  GET api/v1/facebook/campaign/list
 * @desc   캠페인 목록 불러오기
 * @access Public
 */
router.route("/campaign/list").get(facebookController.getCampaignList);

/**
 * @route  GET api/v1/facebook/adset/list
 * @desc   애드셋 목록 불러오기
 * @access Public
 */
router.route("/adset/list").get(facebookController.getAdSetList);

/**
 * @route  GET api/v1/facebook/ad/list
 * @desc   애드 목록 불러오기
 * @access Public
 */
router.route("/ad/list").get(facebookController.getAdList);

module.exports = router;
