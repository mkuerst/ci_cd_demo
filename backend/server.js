import { router as todoRouter } from "./routes/todos.js";
import cors from "cors";
import express from "express";
import mongoose from "mongoose";

const app = express();

app.use(express.json());
app.use(cors());
app.set("port", process.env.PORT || 3001);

// This will be the default option in Mongoose 7. This ensures non-existent query filters are not stripped out
mongoose.set("strictQuery", false);
mongoose
  .connect(
    `mongodb://${process.env.DATABASE_HOST || "127.0.0.1"}:27017/todo-backend`,
    {}
  )
  .then(() => console.log("Connected to database"))
  .catch(console.error);

app.use("/todos", todoRouter);

app.listen(app.get("port"), () => {
  console.log("Express server listening on port " + app.get("port"));
});
