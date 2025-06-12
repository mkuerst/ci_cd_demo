import mongoose, { Schema } from "mongoose";

const todoSchema = new Schema({
  text: { type: String, required: true },
  complete: { type: Boolean, default: false },
  timestamp: { type: String, default: Date.now() },
});

export const Todo = mongoose.model("Todo", todoSchema);
