const adsSdk = require("facebook-nodejs-business-sdk");
import { accessToken, accountID } from "config/facebook";

module.exports = {
  /** 캠페인 등록 */
  createCampaign: async (req, res) => {
    const { name } = req.body;
    const api = adsSdk.FacebookAdsApi.init(accessToken);
    const showDebugingInfo = true;
    if (showDebugingInfo) {
      api.setDebug(true);
    }

    const AdAccount = adsSdk.AdAccount;
    const Campaign = adsSdk.Campaign;
    const account = new AdAccount(accountID);

    account
      .createCampaign([], {
        [Campaign.Fields.name]: name,
        [Campaign.Fields.status]: Campaign.Status.paused,
        [Campaign.Fields.objective]: Campaign.Objective.page_likes,
        [Campaign.Fields.special_ad_category]: "NONE"
      })
      .then(campaign => {
        res.status(200).json({
          status: "0000",
          message: null,
          campaign
        });
      })
      .catch(error => {
        res.status(400).json({
          error
        });
      });
  },

  /** 캠페인 목록 */
  getCampaignList: async (req, res) => {
    const api = adsSdk.FacebookAdsApi.init(accessToken);
    const showDebugingInfo = true;
    if (showDebugingInfo) {
      api.setDebug(true);
    }

    const AdAccount = adsSdk.AdAccount;
    const Campaign = adsSdk.Campaign;
    const account = new AdAccount(accountID);

    account
      .getCampaigns(
        [
          Campaign.Fields.account_id,
          Campaign.Fields.adlabels,
          Campaign.Fields.bid_strategy,
          Campaign.Fields.boosted_object_id,
          Campaign.Fields.brand_lift_studies,
          Campaign.Fields.budget_rebalance_flag,
          Campaign.Fields.budget_remaining,
          Campaign.Fields.buying_type,
          Campaign.Fields.can_create_brand_lift_study,
          Campaign.Fields.can_use_spend_cap,
          Campaign.Fields.configured_status,
          Campaign.Fields.created_time,
          Campaign.Fields.daily_budget,
          Campaign.Fields.effective_status,
          Campaign.Fields.id,
          Campaign.Fields.issues_info,
          Campaign.Fields.last_budget_toggling_time,
          Campaign.Fields.lifetime_budget,
          Campaign.Fields.name,
          Campaign.Fields.objective,
          Campaign.Fields.pacing_type,
          Campaign.Fields.promoted_object,
          Campaign.Fields.recommendations,
          Campaign.Fields.source_campaign,
          Campaign.Fields.source_campaign_id,
          Campaign.Fields.special_ad_category,
          Campaign.Fields.spend_cap,
          Campaign.Fields.start_time,
          Campaign.Fields.status,
          Campaign.Fields.stop_time,
          Campaign.Fields.topline_id,
          Campaign.Fields.updated_time
        ],
        {
          limit: 10
        }
      )
      .then(data => {
        data = data.map(item => {
          return {
            ...item._data
          };
        });
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
