// src/models/Lecturer.ts
import mongoose, { Schema, Document } from "mongoose";
import User, { IUser } from "./User";

export interface ILecturer extends IUser {
  coursesTaught: string[]; // Array of course IDs
}

const lecturerSchema: Schema = new Schema({
  ...User.schema.obj,
  coursesTaught: [{ type: String }],
});

export default mongoose.model<ILecturer>("Lecturer", lecturerSchema);
