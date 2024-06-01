/**
 * eslint-disable @next/next/no-img-element
 *
 * @format
 */

/** @format */

import UsersList from "@app/client/components/admin/usersList";
import { getAllUsers } from "@app/client/data/user.data";
import React from "react";

export default async function UsersPage({}) {
  const users = await getAllUsers();

  return (
    <div className="flex flex-col gap-5  w-full">
      <UsersList users={users} />
    </div>
  );
}
