const adsSdk = require("facebook-nodejs-business-sdk");
import { accessToken, accountID } from "config/facebook";

module.exports = {
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
  }
};
