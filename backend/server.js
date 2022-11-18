import express from "express";

import myConfig from "dotenv";
myConfig.config();

import DEBUG from "debug";

import hazardRouter from "./routes/hazardRoutes.js";
export const debug = DEBUG("server:routes");
debug.enabled = true;

const PORT = 5000;
const app = express();

app.use(express.json());

app.get("/slow", (req, res) => {
  console.log("delay for 3 seconds");
  setTimeout(() => {
    let seconds = new Date().getTime();
    res.send({ currentTime: seconds });
  }, 3000);
});
app.use("/api/hazard", hazardRouter);

app.listen(PORT, () => console.log(`Listening on ${PORT}`));
