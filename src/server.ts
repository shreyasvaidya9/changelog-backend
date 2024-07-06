import cors from "cors";
import express from "express";
import morgan from "morgan";
import { createNewUser, signin } from "./handlers/user";
import { protect } from "./modules/auth";
import { handleAllErrors } from "./modules/middleware";
import router from "./router";

const app = express();

app.use(cors());
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  console.log("get to / with express");
  res.status(200);
  res.json({ message: "hello from express" });
});

app.use("/api", protect, router);

app.post("/user", createNewUser);
app.post("/signin", signin);

app.use(handleAllErrors);

export default app;
