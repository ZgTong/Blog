import express from "express";
import { NODE_ENV, PORT } from "@config";
import { Routes } from "@interfaces/routes.interface";
import initializeMiddlewares from "@middlewares/index";
import { logger, stream } from "@utils/logger";
import dbConnection from "@utils/dbConnection";

class App {
    public app: express.Application;
    public env: string;
    public port: string | number;

    constructor(routes: Routes[]) {
        this.app = express();
        this.env = NODE_ENV || "development";
        this.port = PORT || 8080;

        initializeMiddlewares(this.app);
        this.initializeRoutes(routes);
    }

    public async listen() {
        this.app.listen(this.port, () => {
            logger.info(`=================================`)
            logger.info(`======= ENV: ${this.env} =======`)
            logger.info(`🚀 App listening on the port ${this.port}`)
            logger.info(`=================================`)
        })
        await dbConnection();
    }

    public getServer() {
        return this.app;
    }

    private initializeRoutes(routes: Routes[]){
        routes.forEach(route => this.app.use("/", route.router));
    }
}

export default App;
