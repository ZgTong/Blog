import { Router } from 'express';
import { createUserHandler } from '@controllers/user.controller';
import { createUserSchema } from "@schemas/user.schema";
import validate from '@middlewares/validate.middleware';

const userRouter = Router();

userRouter.post('/user/create', validate(createUserSchema), createUserHandler)

export default userRouter;