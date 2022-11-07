import { Response } from "express";
import { Code, codeType, CodeMsg } from "@constants/code";

interface ResOption {
    type?: codeType
    status?: number
    message?: unknown
}

function commonRes(res: Response, data: unknown, options?: ResOption) {
    options = Object.assign({ type: Code[200] }, options || {})
    const { type, status, message } = options
    let resStatus = status
    if(!resStatus) resStatus = type === Code[200] ? 200 : 409

}