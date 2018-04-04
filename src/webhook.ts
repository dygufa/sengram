import { Request, Response } from "express";
import * as telegram from "./telegram";

export default function webhook(req: Request, res: Response) {
    const body = req.body;

    const message = `*Projeto*: ${body.project_name} \n*Mensagem*: ${body.message} \n*Url*: ${body.url}`;

    telegram.sendMessage(message);
    res.end();
}