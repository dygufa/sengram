import { Request, Response } from "express";
import * as telegram from "./telegram";

function sanitize(message: string) {
    return message.replace(/(\*|\_)/g, x => `\\${x}`);
}

export default function webhook(req: Request, res: Response) {
    const body = req.body;

    const message = `*Projeto*: ${sanitize(body.project_name)} \n*Mensagem*: ${sanitize(body.message)} \n*Url*: ${sanitize(body.url)}`;

    telegram.sendMessage(message);
    res.end();
}