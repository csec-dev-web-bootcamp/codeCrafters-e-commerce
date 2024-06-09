import express from "express";

import { asyncHandler } from "../common/async-handler";
import { authGuard } from "../auth/auth.guard";
import { createOrders, getManyOrders, getOneOrders } from "./orders.service";
import { createOrderPipe } from "./orders.pipe";

const orderController = express.Router();

orderController.get(
  "/",
  asyncHandler(async (req, res) => {
    const orders = await getManyOrders();
    return res.json(orders);
  })
);

orderController.post(
  "/",
  authGuard,
  createOrderPipe,
  asyncHandler(async (req, res) => {
    const data = req.body;
    console.log("order", { data });
    const orders = await createOrders(data);
    return res.json(orders);
  })
);

orderController.get(
  "/id",
  authGuard,
  asyncHandler(async (req, res) => {
    const { id } = req.params;
    const orders = await getOneOrders(id);
    return res.json(orders);
  })
);

export default orderController;
