import React from "react";

import fetcher from "./fetcher";
import revalidate from "./revalidate";

export default async function getCategories(query) {
  const res = await fetcher.get(`/categories?${query ?? ""}`);
  if (!res.success) {
    return res.error;
  }
  await revalidate({ tags: ["CATEGORY"] });

  return res.data;
}
