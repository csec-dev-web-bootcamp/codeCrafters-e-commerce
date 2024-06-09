import express from "express";
import { createOrderItem, getManyOrderItems } from "./orderItems.service";
import { authGuard } from "../auth/auth.guard";

const orderItemsController = express();

orderItemsController.get("/", async (req, res) => {
  const orderItems = await getManyOrderItems();
  return res.json(orderItems);
});

orderItemsController.post("/", async (req, res) => {
  const data = req.body;
  const orderItem = await createOrderItem(data);
  return res.json(orderItem);
});

export default orderItemsController;
