import express from "express";
export const router = express.Router();
import { register, login, check } from "../controler/userController.js";
import { authMiddleware } from "../middlewares/authMIddleware.js";

router.post("/register", register);

router.post("/login", login);

router.get("/check", authMiddleware, check);
