import prisma from "../common/prisma-client";

export async function createOrders(data) {
  const orderData = {
    paymentRef: data.paymentRef,
    totalPrice: 0,
    // billingAddressId: data.billingAddressId,
    billingAddress: {
      connect: { id: data.billingAddressId },
    },
    user: {
      connect: {
        id: data.userId,
      },
    },
    orderItems: {
      createMany: {
        data: data.orderItems,
        skipDuplicates: true,
      },
    },
  };

  let order = await prisma.order.create({
    data: orderData,
    include: {
      orderItems: {
        include: {
          product: true,
        },
      },
      user: {
        select: {
          firstName: true,
          lastName: true,
          email: true,
          password: false,
        },
      },
    },
  });

  let totalPrice = 0;
  order.orderItems.forEach((item) => {
    totalPrice = item.totalPrice;
  });

  order = await prisma.order.update({
    where: { id: order.id },
    data: {
      totalPrice: totalPrice,
    },
    include: {
      orderItems: {
        include: {
          product: true,
        },
      },
    },
  });

  return order;
}

export async function getManyOrders(page = 1, limit = 10) {
  const skip = (page - 1) * limit;
  const orders = await prisma.order.findMany({
    // skip: skip,
    // take: limit,
    include: {
      orderItems: {
        include: {
          product: { select: { image: true } },
        },
      },
      billingAddress: true,
      user: {
        select: {
          email: true,
          firstName: true,
          lastName: true,
        },
      },
    },
  });
  const totalOrders = await prisma.order.count();
  return {
    orders,
    totalOrders,
    // currentPage: page,
    // totalPages: Math.ceil(totalOrders / limit),
  };
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
