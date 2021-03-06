import { Ad, AdAccount, Campaign, api, account } from "utils/facebookAPI";

module.exports = {
  /** 캠페인 등록 */
  createCampaign: async (req, res) => {
    const { campaign_name, campaign_status, campaign_kpi } = req.body;
    // console.log("KPI 목록 >", Campaign.Objective);
    account
      .createCampaign([], {
        [Campaign.Fields.name]: campaign_name,
        [Campaign.Fields.status]: campaign_status,
        [Campaign.Fields.objective]: campaign_kpi,
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

  /** 캠페인 수정 */
  updateCampaign: async (req, res) => {
    const { campaign_id, campaign_name, campaign_kpi } = req.body;

    try {
      await new Campaign(campaign_id, {
        [Campaign.Fields.name]: campaign_name,
        [Campaign.Fields.objective]: campaign_kpi
      })
        .update()
        .then(() => {
          res.status(200).json({
            status: "0000",
            message: null,
            data: null
          });
        })
        .catch(error => {
          const { message, stack } = error;
          res.status(200).json({
            status: "9001",
            message,
            data: stack
          });
        });
    } catch (e) {
      console.log(e);
      res.status(400).json({
        error: "시스템 에러입니다. 관리자에게 문의해주세요."
      });
    }
  },

  /** 캠페인 삭제 */
  deleteCampaign: async (req, res) => {
    const { campaign_id } = req.body;
    try {
      new Campaign(campaign_id)
        .delete()
        .then(() => {
          res.status(200).json({
            status: "0000",
            message: null,
            data: null
          });
        })
        .catch(error => {
          const { message, stack } = error;
          res.status(200).json({
            status: "9001",
            message,
            data: stack
          });
        });
    } catch (e) {
      console.log(e);
      res.status(400).json({
        error: "시스템 에러입니다. 관리자에게 문의해주세요."
      });
    }
  },

  /** 캠페인 상세 */
  detailCampaign: async (req, res) => {
    const { campaign_id } = req.body;

    const insightsFields = [
      "impressions",
      "frequency",
      "unique_clicks",
      "actions",
      "spend",
      "cpc"
    ];

    new Campaign(campaign_id)
      .getInsights(insightsFields, {})
      .then(insight => {
        res.status(200).json({
          status: "0000",
          message: null,
          data: insight
        });
      })
      .catch(error => {
        const { message, stack } = error;
        res.status(200).json({
          status: "9001",
          message,
          data: stack
        });
      });
  }
};
