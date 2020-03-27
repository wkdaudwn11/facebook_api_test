import { Ad, account } from "utils/facebookAPI";

module.exports = {
  /** 애드 목록 */
  test: async (req, res) => {
    const fields = [
      "account_name", // 계정 이름
      "campaign_name", // 캠페인 이름
      "adset_name", // 애드셋 이름
      "ad_name", // 애드 이름
      "impressions", // 노출
      "spend", // 지출 금액
      "cpm", // 1,000회 노출당 비용
      "cpp", // 1,000명 도달당 비용
      "cpc", // 링크 클릭당 비용
      "cost_per_unique_click", // 고유 클릭당 비용
      "reach", // 도달
      "frequency", // 빈도
      "quality_score_organic", // 품질 순위
      "quality_score_ectr", // 참여율 순위
      "quality_score_ecvr", // 전환율 순위
      "estimated_ad_recallers", // 추산 광고 상기도 성과 증대(사람수)
      "estimated_ad_recall_rate", // 추산 광고 상기도 상승률
      "cost_per_estimated_ad_recallers", // 추산 광고 상기도 성과 증대(사람수)당 비용
      "date_start", // 보고 시작
      "date_stop", // 보고 종료
      "objective", // 목표
      "buying_type", // 구매 유형
      "split_test_split", // 분할 테스트
      "split_test_variable", // 변수
      ///////////////////////////////
      "account_currency"

      // "results" - X
      // "result_rate" - X
      // "delivery" - X 게재
      // "impressions_gross" - X 전체 노출수(기계적으로 발생한 트래픽의 유효하지 않은 노출 포함)
      // "impressions_auto_refresh" - X 노출 자동 새로 고침
      // "cost_per_result" - X 결과당 비용
      // "actions:page_engagement" - X 페이지 참여
      // "actions:like" - X 페이지 좋아요
      // "unique_video_continuous_2_sec_watched_actions:video_view" - X 고유 동영상 연속 2초 이상 재생
      // "actions:link_click" - X 링크 클릭
      // "bid" - X 입찰 전략
      // "budget", - X 예산
      // "schedule" - X 일정
    ];

    const params = {
      level: "ad",
      filtering: [],
      breakdowns: ["gender"], // (구분하는 기준, group by 명령어라고 보면 됨) ad_format_asset, age, body_asset, call_to_action_asset, country, description_asset, gender, image_asset, impression_device, link_url_asset, product_id, region, title_asset, video_asset, dma, frequency_value, hourly_stats_aggregated_by_advertiser_time_zone, hourly_stats_aggregated_by_audience_time_zone, place_page_id, publisher_platform, platform_position, device_platform
      time_range: { since: "2019-06-20", until: "2020-03-28" }
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
