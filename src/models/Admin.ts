// src/models/Admin.ts
import mongoose, { Schema, Document } from "mongoose";
import User, { IUser } from "./User";

export interface IAdmin extends IUser {
  permissions: string[]; // Full permissions for admin tasks
}

const adminSchema: Schema = new Schema({
  ...User.schema.obj,
  permissions: [{ type: String }],
});

export default mongoose.model<IAdmin>("Admin", adminSchema);
