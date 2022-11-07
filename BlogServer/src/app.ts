import express from "express";
import { NODE_ENV, PORT } from "@config";
import { Routes } from "@interfaces/routes.interface";
import errorMiddleware from "@middlewares/error.middleware";
import { logger, stream } from "@utils/logger";

class App {
    public app: express.Application;
    public env: string;
    public port: string | number;

    constructor(routes: Routes[]) {
        this.app = express();
        this.env = NODE_ENV || "development";
        this.port = PORT || 8080;

        this.initializeMiddlewares();
        this.initializeRoutes(routes);
        this.initializeErrorHandling();
    }

    public listen() {
        this.app.listen(this.port, () => {
            logger.info(`=================================`)
            logger.info(`======= ENV: ${this.env} =======`)
            logger.info(`🚀 App listening on the port ${this.port}`)
            logger.info(`=================================`)
        })
    }

    public getServer() {
        return this.app;
    }

    private initializeRoutes(routes: Routes[]){
        routes.forEach(route => this.app.use("/", route.router));
    }

    private initializeErrorHandling() {
        this.app.use(errorMiddleware);
    }

    private initializeMiddlewares() {
        
    }
}

export default App;
