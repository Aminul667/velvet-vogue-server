import { Schema, model } from "mongoose";
import { TUser } from "./user.interface";

const userSchema = new Schema<TUser>({
  email: { type: String, required: true },
  password: { type: String, required: true },
});

export const User = model<TUser>("User", userSchema);
