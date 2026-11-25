import express from "express";
import { PORT } from "./config/env.js";
import userRouter from "./routes/user.route.js";
import subscriptionRouter from "./routes/subscription.routes.js";
import authRouter from "./routes/auth.routes.js";
const app = express();
app.get("/", (req, res) => {
  console.log("hello world");
});

app.listen(PORT, () => {
  console.log(`app listening at localhost:${PORT}`);
});

export default app;
