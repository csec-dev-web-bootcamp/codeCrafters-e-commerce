import express from "express";
import {
  createOrderItem,
  deleteOrderItems,
  getManyOrderItems,
  getOneOrderItem,
  updateOrder,
  updateOrderItems,
} from "./orderItems.service";
import { authGuard } from "../auth/auth.guard";
import { asyncHandler } from "../common/async-handler";

const orderItemsController = express();

orderItemsController.get(
  "/",
  authGuard,
  asyncHandler(async (req, res) => {
    const orderItems = await getManyOrderItems();
    return res.json(orderItems);
  })
);

orderItemsController.get(
  "/:id",
  authGuard,
  asyncHandler(async (req, res) => {
    const { id } = req.params;
    const order = await getOneOrderItem(id);
    return res.json(order);
  })
);

orderItemsController.put(
  "/:id",
  authGuard,
  asyncHandler(async (req, res) => {
    const { id } = req.params;
    const data = req.body;
    const order = await updateOrderItems(id, data);
    return res.json(order);
  })
);

orderItemsController.delete(
  "/:id",
  authGuard,
  asyncHandler(async (req, res) => {
    const { id } = req.params;
    const order = await deleteOrderItems(id);
    return res.json(order);
  })
);
