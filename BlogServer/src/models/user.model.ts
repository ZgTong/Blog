import mongoose from "mongoose";

export interface UserDocument extends mongoose.Document {
    name: string
    password: string
    account: string
    createdAt: Date
    updatedAt: Date
    deletedAt: Date
}

const userSchema = new mongoose.Schema(
    {
        name: { type: String, require: true },
        password: { type: String, require: true },
        account: { type: String, require: true },
    },
    {
        timestamps: true,
    }
)