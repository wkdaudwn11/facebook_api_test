import { Ad, account } from "utils/facebookAPI";

module.exports = {
  /** 애드 목록 */
  getReporting: async (req, res) => {
    const { fields, level, filtering, breakdowns, since, until } = req.body;
    // const fields = [
    //   "account_name", // 계정 이름 (account_id => 계정 아이디값)
    //   "campaign_name", // 캠페인 이름 (campaign_id => 캠페인 아이디값)
    //   "adset_name", // 애드셋 이름 (adset_id => 애드셋 아이디값)
    //   "ad_name", // 애드 이름 (ad_id => 애드 아이디값)
    //   "impressions", // 노출
    //   "spend", // 지출 금액
    //   "cpm", // 1,000회 노출당 비용
    //   "cpp", // 1,000명 도달당 비용
    //   "cpc", // 링크 클릭당 비용
    //   "ctr", // 클릭을 수행 한 비율
    //   "reach", // 도달
    //   "frequency", // 빈도
    //   "quality_score_organic", // 품질 순위
    //   "quality_score_ectr", // 참여율 순위
    //   "quality_score_ecvr", // 전환율 순위
    //   "estimated_ad_recallers", // 추산 광고 상기도 성과 증대(사람수)
    //   "estimated_ad_recall_rate", // 추산 광고 상기도 상승률
    //   "cost_per_estimated_ad_recallers", // 추산 광고 상기도 성과 증대(사람수)당 비용
    //   "date_start", // 보고 시작
    //   "date_stop", // 보고 종료
    //   "objective", // 목표
    //   "buying_type", // 구매 유형
    //   "split_test_split", // 분할 테스트
    //   "split_test_variable" // 변수
    //   /**
    //    * 현재 주석 다음에 있는 필드는 아래의 URL에서 참고함.
    //    * https://developers.facebook.com/docs/marketing-api/reference/ad-campaign-group/insights#--
    //    * 우측 네비에서 '읽기 - 필드' 참고
    //    */
    //   // "account_currency", // 화폐 단위
    //   // "action_values", // 광고에 기여한 모든 전환의 총 가치
    //   // "actions", // 관련 액션 목록
    //   // "ad_click_actions",
    //   // "ad_impression_actions",
    //   // "age_targeting",
    //   // "auction_bid",
    //   // "auction_competitiveness",
    //   // "auction_max_competitor_bid",
    //   // "canvas_avg_view_percent", // 사람들이 본 인스턴트 경험의 평균 비율. 순간 경험은 누군가가 휴대 기기에서 광고와 상호 작용 한 후 열리는 화면입니다. 여기에는 비디오, 이미지 제품 카탈로그 등을 포함한 일련의 대화 형 또는 멀티미디어 구성 요소가 포함될 수 있습니다.
    //   // "canvas_avg_view_time", // 사람들이 인스턴트 경험을 보는 데 걸린 평균 총 시간 (초)입니다. 순간 경험은 누군가가 휴대 기기에서 광고와 상호 작용 한 후 열리는 화면입니다. 여기에는 비디오, 이미지 제품 카탈로그 등을 포함한 일련의 대화 형 또는 멀티미디어 구성 요소가 포함될 수 있습니다.
    //   // "clicks", // 광고 클릭 수
    //   // "conversion_rate_ranking",
    //   // "conversion_values",
    //   // "conversions",
    //   // "cost_per_15_sec_video_view", // 비디오 시청 시간 15 초당 비용
    //   // "cost_per_2_sec_continuous_video_view", // 2 초당 연속 비디오 시청 비용
    //   // "cost_per_action_type", // 각 액션별 평균 비용
    //   // "cost_per_ad_click", // 광고 클릭당 비용
    //   // "cost_per_conversion", // 전환 당 비용
    //   // "cost_per_dda_countby_convs", // 전환 당 전환 수당 비용
    //   // "cost_per_inline_link_click", // 링크 클릭 평균 비용
    //   // "cost_per_inline_post_engagement", // 참여 평균 비용
    //   // "cost_per_one_thousand_ad_impression", // 1,000 회 광고 노출 당 비용
    //   // "cost_per_outbound_click", // 아웃 바운드 클릭당 비용
    //   // "cost_per_store_visit_action", // 매장 당 방문 비용
    //   // "cost_per_thruplay", // 각 ThruPlay의 평균 비용
    //   // "cost_per_unique_action_type", // 각 고유 액션의 평균 비용
    //   // "cost_per_unique_click", // 클릭에 대한 평균 비용
    //   // "cost_per_unique_inline_link_click", // 고유 인라인 링크 클릭의 평균 비용
    //   // "cost_per_unique_outbound_click", // 각 고유 한 아웃 바운드 클릭에 대한 평균 비용
    //   // "created_time", // 생성 날짜
    //   // "dda_countby_convs",
    //   // "engagement_rate_ranking", // 참여율 순위
    //   // "estimated_ad_recall_rate_lower_bound", // 예상 광고 회수율 하한
    //   // "estimated_ad_recall_rate_upper_bound", // 예상 광고 회수율 상한
    //   // "estimated_ad_recallers_lower_bound", // 예상 광고 리콜 러 하한?
    //   // "estimated_ad_recallers_upper_bound", // 예상 광고 리콜 러 상한?
    //   // "full_view_impressions", // 광고의 결과로 페이지 게시물의 전체 조회수
    //   // "full_view_reach", // 전체보기를 수행 한 사용자 수
    //   // "gender_targeting", // 성별 타겟팅
    //   // "inline_link_click_ctr", // 인라인 링크 클릭을 수행 한 시간의 비율
    //   // "inline_link_clicks", // Facebook 소유 또는 외부의 목적지 또는 경험을 선택하기위한 링크 클릭 횟수
    //   // "inline_post_engagement" // 광고와 관련하여 취하는 총 행동 수
    // ];

    const params = {
      level,
      filtering,
      breakdowns, // (구분하는 기준, group by 명령어라고 보면 됨) ad_format_asset, age, body_asset, call_to_action_asset, country, description_asset, gender, image_asset, impression_device, link_url_asset, product_id, region, title_asset, video_asset, dma, frequency_value, hourly_stats_aggregated_by_advertiser_time_zone, hourly_stats_aggregated_by_audience_time_zone, place_page_id, publisher_platform, platform_position, device_platform
      time_range: { since, until }
    };

    try {
      account
        .getInsights(fields, params)
        .then(result => {
          result = result.map(item => {
            return {
              ...item._data
            };
          });
          res.status(200).json({
            result
          });
        })
        .catch(error => {
          res.status(400).json({
            error
          });
        });
    } catch (e) {
      console.log(e);
    }
  }
};
