const adsSdk = require("facebook-nodejs-business-sdk");
import { accessToken, accountID } from "config/facebook";

export const getFacebookAPI = () => {
  const api = adsSdk.FacebookAdsApi.init(accessToken);
  const showDebugingInfo = true; // true로 하면 디버깅 정보가 많이 나옴.
  if (showDebugingInfo) {
    api.setDebug(true);
  }

  const AdAccount = adsSdk.AdAccount;
  const Campaign = adsSdk.Campaign;
  const account = new AdAccount(accountID);

  return {
    api,
    AdAccount,
    Campaign,
    account
  };
};
