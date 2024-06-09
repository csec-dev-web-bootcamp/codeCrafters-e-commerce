import prisma from "../common/prisma-client";

export async function createOrderItem(item) {
  console.log({ item });
  const orderItems = await prisma.orderItem.create({
    data: item,
    include: {
      //   products: true,
      order: true,
    },
  });
}

export async function getManyOrderItems() {
  const orderItems = await prisma.orderItem.findMany({
    include: {
      //   products: true/
      order: true,
    },
  });
  return orderItems;
}
