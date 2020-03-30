import express from "express";
const router = express.Router();

const pixelController = require("api/v1/controllers/pixelController");

/**
 * @route  POST api/v1/facebook/pixel
 * @desc   기본 픽셀 데이터 가져오기
 * @access Public
 */
router.route("/").post(pixelController.getPixel);

/**
 * @route  POST api/v1/facebook/pixel/stats
 * @desc   페이지뷰 픽셀 데이터 가져오기
 * @access Public
 */
router.route("/stats").post(pixelController.getStatsFunc);

module.exports = router;
