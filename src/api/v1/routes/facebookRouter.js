import express from "express";
const router = express.Router();

const facebookController = require("api/v1/controllers/facebookController.js");

/**
 * @route  GET api/v1/facebook/campaign-list
 * @desc   캠페인 목록 불러오기
 * @access Public
 */
router.route("/campaign-list").get(facebookController.getCampaignList);

/**
 * @route  GET api/v1/facebook/ad-account
 * @desc   광고 계정 정보 불러오기
 * @access Public
 */
router.route("/ad-account").get(facebookController.getAdAccount);

module.exports = router;
