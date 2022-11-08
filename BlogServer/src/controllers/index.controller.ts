import { NextFunction, Request, Response } from "express";
import commonRes from "@utils/commonRes";

class IndexController {
    public index = (req: Request, res: Response, next: NextFunction): void => {
        try {
            commonRes(res, {word: "Hello World"}, {type: "success", message:"req success"})
            // commonRes.denied(res, null)
            // commonRes.error(res, null)
        } catch (error) {
            next(error);
        }
    }
}

export default IndexController;