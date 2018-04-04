import { Request, Response } from "express";

export default function webhook(req: Request, res: Response) {
    console.log(req);
    res.json({
        hi: "oi"
    })
}