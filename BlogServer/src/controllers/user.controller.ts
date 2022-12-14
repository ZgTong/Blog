import { NextFunction, Request, Response } from "express";
import commonRes from "@utils/commonRes";
import { CreateUserInput } from "@/schemas/user.schema";
import silentHandle from "@utils/silentHandle";
import USER_CRUD from "@/services/user.service";

class UserController {
    public createUser = async (req: Request<{}, {}, CreateUserInput["body"]>, res: Response, next: NextFunction) => {
        const [e, user] = await silentHandle(USER_CRUD.create, req.body);
        return e ? commonRes.error(res, null, e.message) : commonRes(res, user);
    };
}

export default UserController;