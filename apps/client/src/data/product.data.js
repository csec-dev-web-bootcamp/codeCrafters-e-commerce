"use server";

import fetcher from "./fetcher";
import revalidate from "./revalidate";

export async function createProduct(data) {
  try {
    const res = await fetcher(`/products`, {
      method: "POST",
      body: JSON.stringify(data),
      next: { tags: ["PRODUCTS"], revalidate: 3600 },
    });

    if (!res.ok) {
      // Check for non-2xx HTTP status code
      throw new Error("Failed to create product: " + (await res.text())); // Provide a more informative error message
    }

    await revalidate({ tags: ["PRODUCTS"] });

    return res.json(); // Parse the response as JSON
  } catch (error) {
    console.error("Error creating product:", error);
    // Display a user-friendly error message (optional)
    return { error: error.message }; // Return an error object for handling in onSubmit
  }
}

export async function getManyProducts(query) {
  const res = await fetcher(`/products?${query ?? ""}`, {
    method: "GET",
    next: { tags: ["PRODUCTS"], revalidate: 3600 },
  });
  if (!res.success) {
    return res.error;
  }
  await revalidate({ tags: ["PRODUCTS"] });

  return res.data;
}

export async function getOneProduct(id) {
  const res = await fetcher(`/products/${id}`, {
    method: "GET",
    next: { tags: [`PRODUCTS:${id}`], revalidate: 3600 },
  });
  if (!res.success) {
    return res.error;
  }
  return res.data;
}

export async function updateProduct(id, data) {
  const res = await fetcher(`/products/${id}`, {
    method: "PRODUCT",
    body: JSON.stringify(data),
    next: { tags: ["PRODUCTS"], revalidate: 3600 },
  });
  revalidate({ tags: ["PRODUCTS", `PRODUCTS:${id}`] });
  if (!res.success) {
    return res.error;
  }
  return res.data;
}

export async function deleteProduct(id) {
  const res = await fetcher(`/products/${id}`, {
    method: "DELETE",
    next: { tags: ["PRODUCTS"], revalidate: 3600 },
  });
  revalidate({ tags: ["PRODUCTS"] });
  if (!res.success) {
    return res.error;
  }
  return res.data;
}
