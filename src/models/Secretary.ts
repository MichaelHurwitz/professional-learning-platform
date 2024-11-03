// src/models/Secretary.ts
import mongoose, { Schema, Document } from "mongoose";
import User, { IUser } from "./User";

export interface ISecretary extends IUser {
  permissions: string[]; // Specific permissions for secretary tasks
}

const secretarySchema: Schema = new Schema({
  ...User.schema.obj,
  permissions: [{ type: String }],
});

export default mongoose.model<ISecretary>("Secretary", secretarySchema);
