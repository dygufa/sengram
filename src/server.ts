import * as express from "express";
import webhook from "./webhook";

const app = express();

app.get("/webhook", webhook);

app.listen(3000);