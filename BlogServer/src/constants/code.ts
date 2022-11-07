enum Code {
    success = 200,
    denied,
    error
}

enum CodeMsg {
    success = "Req Successful!",
    denied = "Req Denied!",
    error = "Error!"
}

type codeType = keyof typeof Code;

export {Code, codeType, CodeMsg};