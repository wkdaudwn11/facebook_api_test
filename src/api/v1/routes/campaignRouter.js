import express from "express";
const router = express.Router();

const campaignController = require("api/v1/controllers/campaignController");

/**
 * @route  POST api/v1/facebook/campaign
 * @desc   캠페인 등록
 * @access Public
 */
router.route("/").post(campaignController.createCampaign);

/**
 * @route  GET api/v1/facebook/campaign/list
 * @desc   캠페인 목록 불러오기
 * @access Public
 */
router.route("/list").get(campaignController.getCampaignList);

module.exports = router;
