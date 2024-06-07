import prisma from "../common/prisma-client";

export default async function CreateOrders(data) {
  console.log({ data });
  const order = await prisma.order.create({
    data: data,
    include: {
      user: true,
    },
  });
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
