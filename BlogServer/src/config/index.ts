import { config } from "dotenv";
config({ path: `.env.${process.env.NODE_ENV || 'development'}` });

export const CREDENTIALS = process.env.CREDENTIALS === 'true';
export const {
    NODE_ENV, PORT, SECRET_KEY, ORIGIN, LOG_DIR, LOG_FORMAT,
    DB_URL, DB_AUTH_SOURCE, DB_USER, DB_PASSWORD
} = process.env;
