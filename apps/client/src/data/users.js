"use server";
import fetcher from "./fetcher";

export async function getMe() {
  try {
    const res = await fetcher.get("/users/me");
    return res.data;
  } catch (error) {
    return null;
  }
}
