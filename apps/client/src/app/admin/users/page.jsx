/**
 * eslint-disable @next/next/no-img-element
 *
 * @format
 */

/** @format */

import UsersList from "@app/client/components/admin/usersList";
import React from "react";

export default async function UsersPage({}) {
  return (
    <div className="flex flex-col gap-5  w-full">
      <UsersList />
    </div>
  );
}
