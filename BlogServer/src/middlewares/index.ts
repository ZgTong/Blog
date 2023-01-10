import express from "express";
import responseHeader from "@middlewares/responseHeader.middleware";
import errorMiddleware from "@middlewares/error.middleware";

function initializeMiddlewares(app: express.Application) {
    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));
    app.use(responseHeader);
    app.use(errorMiddleware);
}

export default initializeMiddlewares;