import prisma from "../common/prisma-client";

export default async function createOrders(data) {
  // Logging the received data
  console.log("Data received:", data);

  if (!data.userId) {
    throw new Error("userId is required to create an order");
  }

  // Check if the user exists
  const userExists = await prisma.user.findUnique({
    where: { id: data.userId },
  });

  if (!userExists) {
    throw new Error("User does not exist");
  }

  // Create the order
  const order = await prisma.order.create({
    data: {
      totalPrice: data.totalPrice,
      paymentRef: data.paymentRef,
      paymentStatus: data.paymentStatus,
      user: {
        connect: { id: data.userId }, // Connect to an existing user by userId
      },
      orderItems: {
        create: data.orderItems.map((item) => ({
          productId: item.productId,
          quantity: item.quantity,
          totalPrice: item.totalPrice,
        })),
      },
    },
    include: {
      user: true,
      orderItems: true,
    },
  });

  // Logging the created order
  console.log("Order created:", order);

  return order;
}

export async function getManyOrders() {
  const order = await prisma.order.findMany({
    include: {
      user: true,
    },
  });
  return order;
}

export async function getOneOrders(id) {
  const order = await prisma.order.findFirst({
    where: { id },
    include: {
      user: true,
    },
  });
  return order;
}

export async function updateOrder(id, data) {
  const order = await prisma.order.update({
    where: { id },
    data: data,
    include: {
      user: true,
    },
  });
  return order;
}

export async function deleteProduct(id) {
  const product = await prisma.order.delete({
    where: { id },
    include: {
      user: true,
    },
  });
  return product;
}
