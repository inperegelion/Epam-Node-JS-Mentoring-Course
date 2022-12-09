import { RequestHandler } from 'express';

export const log: RequestHandler = (req, res, next) => {
    console.log(
        `🌳🪓 ${new Date().toISOString()} 🎯 ${req.method} ${req.url}`
    );
    next();
};
