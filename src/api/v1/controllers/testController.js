import { getFacebookAPI } from "utils/facebookAPI";

module.exports = {
  test: async (req, res) => {
    const { api, AdAccount, Campaign, account } = getFacebookAPI();
    account
      .getCampaigns([Campaign.Fields.name], {
        limit: 5
      })
      .then(campaigns => {
        res.status(200).json({
          campaigns
        });
        // if (campaigns.length >= 2 && campaigns.hasNext()) {
        //   return campaigns.next();
        // } else {
        //   Promise.reject(
        //     new Error("campaigns length < 2 or not enough campaigns")
        //   );
        // }
      })
      // .then(campaigns => {
      //   if (campaigns.hasNext() && campaigns.hasPrevious()) {
      //     return campaigns.previous();
      //   } else {
      //     Promise.reject(new Error("previous or next is not true"));
      //   }
      //   return campaigns.previous();
      // })
      .catch(error => {
        res.status(400).json({
          error
        });
      });
    // account
    //   .read([AdAccount.Fields.name, AdAccount.Fields.age])
    //   .then(account => {
    //     res.status(200).json({
    //       account
    //     });
    //   })
    //   .catch(error => {
    //     res.status(400).json({
    //       error
    //     });
    //   });
  }
};
