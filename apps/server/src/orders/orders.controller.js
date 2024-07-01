import express from "express";

import { asyncHandler } from "../common/async-handler";
import { authGuard } from "../auth/auth.guard";
import { createOrders, getManyOrders, getOneOrders } from "./orders.service";
import { createOrderPipe } from "./orders.pipe";
import { createAddress as createBillingAddress } from "../billingAddress/billing.service";

const key = process.env.CHAPA_SECRET_KEY;

const orderController = express.Router();

orderController.get(
  "/",
  // authGuard,
  asyncHandler(async (req, res) => {
    const { page = 1, limit = 10 } = req.query;
    const orders = await getManyOrders(parseInt(page), parseInt(limit));
    return res.json({ orders: orders.orders, totalPages: orders.totalPages });
  })
);

orderController.post(
  "/",
  authGuard,
  asyncHandler(async (req, res) => {
    // console.log(chapa);
    const user = req.user;
    const data = req.body;
    // console.log(data);
    // const tx_ref = await chapa.generateTransactionReference();
    // console.log(tx_ref);

    const billingAddress = await createBillingAddress({
      data: { ...data.billingDetails, userId: user.id },
    });

    console.log(billingAddress.id);

    const order = await createOrders({
      orderItems: data.orderItems,
      totalPrice: data.totalPrice,
      // paymentRef: tx_ref,
      userId: user.id,
      billingAddressId: billingAddress.id, // Ensure we're using the billing address ID
    });
    console.log(order);
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
