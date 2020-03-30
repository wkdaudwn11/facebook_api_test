import { AdsPixel } from "utils/facebookAPI";
import { pixel_id } from "config/facebook";

module.exports = {
  /** 픽셀 데이터 가져오기 */
  getPixel: async (req, res) => {
    /**
     * facebook-nodejs-business-sdk 공식 Github의 get 함수
     * https://github.com/facebook/facebook-nodejs-business-sdk/blob/7fd12b5ea8935be7a5a4a0d8d2a36c4f9a61dd6f/src/objects/ads-pixel.js
     *
     * facebook marketing api
     * https://developers.facebook.com/docs/marketing-api/audiences-api/pixel
     */

    const fields = [
        // "automatic_matching_fields",
        // "can_proxy",
        // "code",
        // "data_use_setting",
        // "enable_automatic_matching",
        // "first_party_cookie_status",
        // "is_created_by_business",
        // "is_unavailable",
        "creation_time",
        "creator",
        "id",
        "last_fired_time",
        "name",
        "owner_ad_account",
        "owner_business"
      ],
      params = {};

    new AdsPixel(pixel_id)
      .get(fields, params)
      .then(data => {
        res.status(200).json({
          data: data._data
        });
      })
      .catch(error => {
        res.status(400).json({
          error
        });
      });
  },

  /** 픽셀 데이터 가져오기 */
  getStatsFunc: async (req, res) => {
    /**
     * facebook-nodejs-business-sdk 공식 Github의 getStats 함수
     * https://github.com/facebook/facebook-nodejs-business-sdk/blob/7fd12b5ea8935be7a5a4a0d8d2a36c4f9a61dd6f/src/objects/ads-pixel.js
     *
     * facebook marketing api
     * https://developers.facebook.com/docs/marketing-api/facebook-pixel/conversion-tracking
     */

    let { aggregation, start_time, end_time } = req.body;
    start_time = Math.round(new Date(start_time).getTime()) / 1000;
    end_time = Math.round(new Date(end_time).getTime()) / 1000;

    const fields = [],
      params = {
        // "event"
        // "browser_type",
        // "custom_data_field",
        // "device_os",
        // "device_type",
        // "host",
        // "match_keys"
        // had_pii,
        // pixel_fire,
        // event_detection_method,
        // url,
        // event_value_count,
        // url_by_rule,
        // event_total_counts,
        // event_source,
        // event_processing_results
        aggregation,
        start_time: start_time,
        end_time: end_time
      };

    new AdsPixel(pixel_id)
      .getStats(fields, params)
      .then(data => {
        res.status(200).json({
          data
        });
      })
      .catch(error => {
        res.status(400).json({
          error
        });
      });
  }
};
