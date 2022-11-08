import { Response } from "express";
import { Code, codeType, CodeMsg } from "@constants/code";
import { logger } from "@utils/logger";

interface ResOption {
    type?: codeType
    status?: number
    message?: unknown
}

function commonRes(res: Response, data: unknown, options?: ResOption) {
    options = Object.assign({ type: Code[200] }, options || {});
    const { type, status, message } = options;
    let resStatus = status;
    if(!resStatus) resStatus = type === Code[200] ? 200 : 409;
    const sendRes: {code: number, data: unknown, message?: unknown} = {
        code: Code[type as codeType],
        data
    };
    message && (sendRes.message = message);
    return res.status(resStatus).send(sendRes);
}

commonRes.error = function (res: Response, data: unknown, message?: unknown, status?: number ) {
    logger.error(message || CodeMsg["error"]);
    this(res, data, { type: "error", status: status || 409, message: message || CodeMsg["error"] });
}

commonRes.denied = function (res: Response, data: unknown) {
    this(res, data, { type: "denied", status: 401, message: CodeMsg["denied"] });
}

export default commonRes;
