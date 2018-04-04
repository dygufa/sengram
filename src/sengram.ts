require('dotenv').config({ silent: true });
import * as express from "express";
import webhook from "./webhook";
import * as bodyParser from "body-parser";

const app = express();

app.use(bodyParser.json());

app.all("/webhook", webhook);

app.listen(3000, () => console.log("Rodando na porta 3000"));