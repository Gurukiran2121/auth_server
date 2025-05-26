import express from "express";
import { AUTH_API_URL } from "../constants/index.js";
import authController from "../controller/authController.js";

const authRouter = express.Router();

authRouter.post(AUTH_API_URL, authController);

export default authRouter;
