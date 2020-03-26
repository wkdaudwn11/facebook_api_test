import express from "express";
import helmet from "helmet";
import bodyParser from "body-parser";

const app = express();
app.use(helmet());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.listen(4000);
console.log(`Webserver listening to port 4000...`);
