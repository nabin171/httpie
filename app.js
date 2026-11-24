import express from "express";
import { PORT } from "./config/env.js";
const app = express();
app.get("/", (req, res) => {
  console.log("hello world");
});

app.listen(PORT, () => {
  console.log(`app listening at localhost:${PORT}`);
});

export default app;
