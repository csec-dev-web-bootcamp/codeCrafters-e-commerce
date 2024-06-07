"use server";

import fetcher from "./fetcher";

export async function getAllUsers() {
  try {
    const res = await fetcher.get(`/users`);

    return res.data;
  } catch (error) {
    return null;
  }
}

export async function getMe() {
  try {
    const res = await fetcher.get("/users/me");
    return res.data;
  } catch (error) {
    return null;
  }
}
