import mongoose from "mongoose";
import { logger } from "@utils/logger";
import { DB_USER, DB_PASSWORD, DB_AUTH_SOURCE, DB_URL } from "@/config";

async function dbConnection() {
    try {
        mongoose.set('strictQuery', true);
        const connection = await mongoose.connect(DB_URL || "", {
            user: DB_USER,
            pass: DB_PASSWORD,
            authSource: DB_AUTH_SOURCE,
        });
        logger.info("Yay! DB connected!");
        return connection;
    } catch (error) {
        logger.error(error, "Failed to connect to the database!");
        process.exit(1);
    }
}

export default dbConnection;
