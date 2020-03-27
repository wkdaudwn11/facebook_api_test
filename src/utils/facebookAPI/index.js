const adsSdk = require("facebook-nodejs-business-sdk");
import { accessToken, accountId, bussinessId } from "config/facebook";

export const Ad = adsSdk.Ad;
export const AdSet = adsSdk.AdSet;
export const AdAccount = adsSdk.AdAccount;
// const Business = adsSdk.Business;
export const Campaign = adsSdk.Campaign;
export const api = adsSdk.FacebookAdsApi.init(accessToken);
export const account = new AdAccount(accountId);

// const showDebugingInfo = false;
// if (showDebugingInfo) {
//   api.setDebug(true);
// }
