import { Request, Response } from 'express';

export function serverErrorCatcher(err: Error, req: Request, res: Response) {
    console.log(err.stack)
    res.status(500).send("Something broke :(")
}