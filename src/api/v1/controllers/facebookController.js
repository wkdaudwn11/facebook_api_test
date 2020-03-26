const adsSdk = require("facebook-nodejs-business-sdk");
import { accessToken, accountID } from "config/facebook";

module.exports = {
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
  },

  /** 애드셋 목록 */
  getAdSetList: async (req, res) => {
    const api = adsSdk.FacebookAdsApi.init(accessToken);
    const showDebugingInfo = true;
    if (showDebugingInfo) {
      api.setDebug(true);
    }

    const AdAccount = adsSdk.AdAccount;
    const AdSet = adsSdk.AdSet;
    const account = new AdAccount(accountID);
    const Ad = adsSdk.Ad;

    account
      .getAdSets(
        [
          AdSet.Fields.account_id,
          AdSet.Fields.adlabels,
          AdSet.Fields.adset_schedule,
          AdSet.Fields.asset_feed_id,
          AdSet.Fields.attribution_spec,
          AdSet.Fields.bid_adjustments,
          AdSet.Fields.bid_amount,
          AdSet.Fields.bid_constraints,
          AdSet.Fields.bid_info,
          AdSet.Fields.bid_strategy,
          AdSet.Fields.billing_event,
          AdSet.Fields.budget_remaining,
          AdSet.Fields.campaign,
          AdSet.Fields.campaign_id,
          AdSet.Fields.configured_status,
          AdSet.Fields.created_time,
          AdSet.Fields.creative_sequence,
          AdSet.Fields.daily_budget,
          AdSet.Fields.daily_min_spend_target,
          AdSet.Fields.daily_spend_cap,
          AdSet.Fields.destination_type,
          AdSet.Fields.effective_status,
          AdSet.Fields.end_time,
          AdSet.Fields.frequency_control_specs,
          // AdSet.Fields.full_funnel_exploration_mode
          AdSet.Fields.id,
          AdSet.Fields.instagram_actor_id,
          AdSet.Fields.is_dynamic_creative,
          AdSet.Fields.issues_info,
          AdSet.Fields.learning_stage_info,
          AdSet.Fields.lifetime_budget,
          AdSet.Fields.lifetime_imps,
          AdSet.Fields.lifetime_min_spend_target,
          AdSet.Fields.lifetime_spend_cap,
          AdSet.Fields.name,
          AdSet.Fields.optimization_goal,
          AdSet.Fields.optimization_sub_event,
          AdSet.Fields.pacing_type,
          AdSet.Fields.promoted_object,
          AdSet.Fields.recommendations,
          AdSet.Fields.recurring_budget_semantics,
          AdSet.Fields.review_feedback,
          AdSet.Fields.rf_prediction_id,
          AdSet.Fields.source_adset,
          AdSet.Fields.source_adset_id,
          AdSet.Fields.start_time,
          AdSet.Fields.status,
          AdSet.Fields.targeting,
          AdSet.Fields.time_based_ad_rotation_id_blocks,
          AdSet.Fields.time_based_ad_rotation_intervals,
          AdSet.Fields.updated_time,
          AdSet.Fields.use_new_app_click
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
  },

  /** 애드 목록 */
  getAdList: async (req, res) => {
    const api = adsSdk.FacebookAdsApi.init(accessToken);
    const showDebugingInfo = true;
    if (showDebugingInfo) {
      api.setDebug(true);
    }

    const AdAccount = adsSdk.AdAccount;
    const Ad = adsSdk.Ad;
    const account = new AdAccount(accountID);

    account
      .getAds(
        [
          Ad.Fields.account_id,
          Ad.Fields.adlabels,
          // Ad.Fields.adset_schedule,
          // Ad.Fields.asset_feed_id,
          // Ad.Fields.attribution_spec,
          // Ad.Fields.bid_adjustments,
          Ad.Fields.bid_amount,
          // Ad.Fields.bid_constraints,
          Ad.Fields.bid_info,
          // Ad.Fields.bid_strategy,
          // Ad.Fields.billing_event,
          // Ad.Fields.budget_remaining,
          Ad.Fields.campaign,
          Ad.Fields.campaign_id,
          Ad.Fields.configured_status,
          Ad.Fields.created_time,
          // Ad.Fields.creative_sequence,
          // Ad.Fields.daily_budget,
          // Ad.Fields.daily_min_spend_target,
          // Ad.Fields.daily_spend_cap,
          // Ad.Fields.destination_type,
          Ad.Fields.effective_status,
          // Ad.Fields.end_time,
          // Ad.Fields.frequency_control_specs,
          // Ad.Fields.full_funnel_exploration_mode,
          Ad.Fields.id,
          // Ad.Fields.instagram_actor_id,
          // Ad.Fields.is_dynamic_creative,
          Ad.Fields.issues_info,
          // Ad.Fields.learning_stage_info,
          // Ad.Fields.lifetime_budget,
          // Ad.Fields.lifetime_imps,
          // Ad.Fields.lifetime_min_spend_target,
          // Ad.Fields.lifetime_spend_cap,
          Ad.Fields.name,
          // Ad.Fields.optimization_goal
          // Ad.Fields.optimization_sub_event
          // Ad.Fields.pacing_type
          // Ad.Fields.promoted_object
          Ad.Fields.recommendations,
          // Ad.Fields.recurring_budget_semantics
          // Ad.Fields.review_feedback
          // Ad.Fields.rf_prediction_id
          // Ad.Fields.source_adset
          // Ad.Fields.source_adset_id
          // Ad.Fields.start_time
          Ad.Fields.status,
          Ad.Fields.targeting,
          // Ad.Fields.time_based_ad_rotation_id_blocks
          // Ad.Fields.time_based_ad_rotation_intervals
          Ad.Fields.updated_time
          // Ad.Fields.use_new_app_click
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
