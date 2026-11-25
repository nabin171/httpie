import { Router } from "express";

const userRouter = Router();

userRouter.get("/", (req, res) => {
  res.send({ title: "Get all users" });
});

userRouter.get("/:id", (req, res) => {
  res.send({ title: "Get all usersm details" });
});

userRouter.post("/", (req, res) => {
  res.send({ title: "create new user" });
});

userRouter.put("/:id", (req, res) => {
  res.send({ title: "update users" });
});

userRouter.delete("/:id", (req, res) => {
  res.send({ title: "delete  users" });
});

export default userRouter;
