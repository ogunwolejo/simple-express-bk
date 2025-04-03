import {NextFunction, Request, Response} from "express";

export const errorHandler = (err: Error | string, req: Request, res: Response, next: NextFunction) => {
    if (typeof err === "string") {
        return res.status(400).json({ message: err });
    }
    if (err.name === "ValidationError") {
        return res.status(400).json({ message: err.message });
    }

    if (err.name === "UnauthorizedError") {
        return res.status(401).json({ message: "Invalid Token" });
    }

    return res.status(500).json({ message: err.message });
}


