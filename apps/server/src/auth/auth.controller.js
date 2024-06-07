import express from "express";
import { asyncHandler } from "../common/async-handler";
import { registerUser, loginUser } from "./auth.service";
import generateJwtToken from "./jwt/generate-jwt-token";
import { loginPipe, registerPipe } from "./auth.pipe";

const authController = express.Router();

authController.post(
  "/register",
  registerPipe,
  asyncHandler(async (req, res) => {
    const data = req.body;
    const user = await registerUser(data);
    const jwt = generateJwtToken(user);
    return res.json({ user, jwt });
  })
);

authController.post(
  "/login",
  loginPipe,
  asyncHandler(async (req, res) => {
    const data = req.body;
    const user = await loginUser(data);
    const jwt = generateJwtToken(user);
    return res.json({ user, jwt });
  })
);

export default authController;
