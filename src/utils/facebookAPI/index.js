import { accessToken, accountID } from "config/facebook";

export const getFacebookAPI = () => {
  const adsSdk = require("facebook-nodejs-business-sdk");
  const api = adsSdk.FacebookAdsApi.init(accessToken);
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
