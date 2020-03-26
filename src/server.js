import express from "express";
import helmet from "helmet";
import bodyParser from "body-parser";

import facebookRouter from "api/v1/routes/facebookRouter";

const app = express();
app.use(helmet());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/api/v1/facebook", facebookRouter);

app.listen(4000);
console.log(`Webserver listening to port 4000...`);
