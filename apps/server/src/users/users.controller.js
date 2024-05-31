import express from "express";
import { authGuard } from "../auth/auth.guard";
import { asyncHandler } from "../common/async-handler";
import { getAllUsers, getOneUser } from "./users.service";
import { roleGuard } from "../auth/role.guard";

const usersController = express.Router();

usersController.get(
  "/me",
  authGuard,
  asyncHandler(async (req, res) => {
    const user = await getOneUser(req.user.id);
    return res.json(user);
  })
);

usersController.get(
  "/",
  asyncHandler(async (req, res) => {
    const users = await getAllUsers();
    return res.json(users);
  })
);

export default usersController;
