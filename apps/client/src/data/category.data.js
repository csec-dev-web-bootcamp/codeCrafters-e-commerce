"use server";
import React from "react";

import fetcher from "./fetcher";
import revalidate from "./revalidate";

export default async function getCategories() {
  try {
    const res = await fetcher.get(`/categories`);
    return res.data;
  } catch (error) {
    console.log(error);
    return { error: error.message };
  }
}
