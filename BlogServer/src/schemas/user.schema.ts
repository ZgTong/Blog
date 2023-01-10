import { object, string, TypeOf } from "zod";

export const createUserSchema = object({
    body: object({
        account: string({ required_error: "Lack of acct no" }).nonempty(),
        name: string({ required_error: "Lack of acct name" }).nonempty(),
        password: string({ required_error: "Lack of psw" }).min(6, "Length is no shorter than 6"),
        passwordConfirmation: string({ required_error: "Lack of psw confirmation" }),
    }).refine(data => data.password === data.passwordConfirmation, {
        message: "psw do not match",
        path: ["passwordConfirmation"],
    }),
});

export type CreateUserInput = Omit<TypeOf<typeof createUserSchema>, "body.passwordConfirmation">;
