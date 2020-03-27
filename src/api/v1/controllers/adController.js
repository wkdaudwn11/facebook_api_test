import { Ad, account } from "utils/facebookAPI";

module.exports = {
  /** 애드 목록 */
  getAdList: async (req, res) => {
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
