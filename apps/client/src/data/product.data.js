"use server";

import fetcher from "./fetcher";
import revalidate from "./revalidate";

export async function createProduct(data) {
  try {
    const res = await fetcher.post(`/products`, data);
    console.log(res.data);
    return res.data;
  } catch (error) {
    console.error("Error creating product:", error);
    return { error: error.message };
  }
}

export async function getManyProducts() {
  try {
    const res = await fetcher.get(`/products`);
    return res.data;
  } catch (error) {
    console.error("Error creating product:", error);
    return { error: error.message };
  }
}

export async function getOneProduct(id) {
  try {
    const res = await fetcher.get(`/products/${id}`, data);
    return res.data;
  } catch (error) {
    console.error("Error creating product:", error);
    return { error: error.message };
  }
}

export async function updateProduct(id, data) {
  try {
    const res = await fetcher.put(`/products/${id}`, data);
    revalidate({ tags: ["PRODUCTS", `PRODUCTS:${id}`] });
    return res.data;
  } catch (error) {
    console.error("Error creating product:", error);
    return { error: error.message };
  }
}

export async function deleteProduct(id) {
  try {
    const res = await fetcher.delete(`/products/${id}`, data);
    return res.data;
  } catch (error) {
    console.error("Error creating product:", error);
    return { error: error.message };
  }
}
