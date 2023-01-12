import { Router } from 'express';
import { Routes } from '@interfaces/routes.interface';
import UserController from '@controllers/user.controller';
import { createUserSchema } from "@schemas/user.schema";
import validate from '@middlewares/validate.middleware';
// userRouter.post('/user/create', validate(createUserSchema), createUserHandler)

class UserRoute implements Routes {
    public path = '/user';
    public router = Router();
    public userController = new UserController();

    constructor() {
        this.initializeRoutes();
    }

    private initializeRoutes() {
        this.router.post(`${this.path}`, validate(createUserSchema), this.userController.createUser);
    }
}

export default UserRoute;