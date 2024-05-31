"use server";

import fetcher from "./fetcher";
import revalidate from "./revalidate";

export async function getAllUsers(query) {
  const res = await fetcher(`/users?${query ?? ""}`, {
    method: "GET",
    next: { tags: ["USERS"], revalidate: 3600 },
  });
  revalidate({ tags: ["USERS"] });
  if (!res.success) {
    return res.error;
  }
  return res.data;
}

export async function getMe() {
  try {
    const res = await fetcher.get("/users/me");
    return res.data;
  } catch (error) {
    return null;
  }
}
