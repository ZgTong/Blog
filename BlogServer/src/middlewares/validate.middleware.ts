import { Request, Response, NextFunction } from "express";
import { AnyZodObject } from "zod";
import commonRes from "@utils/commonRes";

const validate = (schema: AnyZodObject) => (req: Request, res: Response, next: NextFunction) => {
    try {
        schema.parse({
            body: req.body,
            query: req.query,
            params: req.params,
        });
        next();
    } catch (error: any) {
        return commonRes.error(res, null, error.errors);
    }
};

export default validate;