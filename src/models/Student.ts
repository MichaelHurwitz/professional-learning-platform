// src/models/Student.ts
import mongoose, { Schema, Document } from "mongoose";
import User, { IUser } from "./User";

export interface IStudent extends IUser {
  courses: string[]; // Array of course IDs
}

const studentSchema: Schema = new Schema({
  ...User.schema.obj,
  courses: [{ type: String }],
});

export default mongoose.model<IStudent>("Student", studentSchema);
