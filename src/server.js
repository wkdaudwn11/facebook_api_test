import express from "express";
import helmet from "helmet";
import bodyParser from "body-parser";

import campaignRouter from "api/v1/routes/campaignRouter";
import adSetRouter from "api/v1/routes/adSetRouter";
import adRouter from "api/v1/routes/adRouter";
import reportingRouter from "api/v1/routes/reportingRouter";
import pixelRouter from "api/v1/routes/pixelRouter";

const app = express();
app.use(helmet());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/api/v1/facebook/campaign", campaignRouter);
app.use("/api/v1/facebook/ad-set", adSetRouter);
app.use("/api/v1/facebook/ad", adRouter);
app.use("/api/v1/facebook/reporting", reportingRouter);
app.use("/api/v1/facebook/pixel", pixelRouter);

app.listen(4000);
console.log(`Webserver listening to port 4000...`);
