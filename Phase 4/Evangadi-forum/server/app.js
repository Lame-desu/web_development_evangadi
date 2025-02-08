import express from "express";
import cors from "cors";
import { register, login, check } from "./controler/userController.js";
import { router } from "./routes/userRoute.js";
import { dbConnection } from "./db/dbConfig.js";
import questoinsRoute from "./routes/questionRoute.js";
import { authMiddleware } from "./middlewares/authMIddleware.js";
const app = express();
const port = 5550;
app.use(cors());
// user router
app.use(express.json());
app.use("/api/user", router);
app.use("/api/questions", authMiddleware, questoinsRoute);
//questions router

//answers router
async function start() {
  try {
    // const result = await dbConnection.query("SELECT 'test'");
    // console.log(result);
    app.listen(port);
    console.log(`app is listening on port ${port}`);
  } catch (error) {
    console.log(error.message);
  }
}

start();
