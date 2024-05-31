"use client";

import { getAllUsers } from "@app/client/data/user.data";

import PageTitle from "../PageTitle";
import { DataTable } from "../DataTable";
import { ColumnDef } from "@tanstack/react-table";

const columns = [
  // {
  //   accessorKey: "firstName",
  //   header: "Name",
  //   cell: ({ row }) => {
  //     return (
  //       <div className="flex gap-2 items-center rounded-full">
  //         <img
  //           className="h-10 w-10 object-cover object-center rounded-full"
  //           src={`https://cdn.imgbin.com/8/20/20/imgbin-samsung-galaxy-a8-a8-user-login-telephone-avatar-pawn-pvE7Qhr6Zk7kLJpGiWZ9FFRVf.jpg`}
  //           alt="user-image"
  //         />
  //         <p>{row.getValue("name")} </p>
  //       </div>
  //     );
  //   },
  // },

  {
    accessorKey: "firstName",
    header: "First Name",
  },
  {
    accessorKey: "email",
    header: "Email",
  },
  {
    accessorKey: "createdAt",
    header: "Created At",
  },
  {
    accessorKey: "role",
    header: "Role",
  },
];

export default async function UsersList() {
  const usersData = await getAllUsers();
  return (
    <div>
      <PageTitle title="Users" />
      <DataTable columns={columns} data={usersData} />
    </div>
  );
}
