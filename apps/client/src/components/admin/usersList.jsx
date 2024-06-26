"use client";

import { getAllUsers } from "@app/client/data/user.data";

import PageTitle from "../PageTitle";
import { DataTable } from "../DataTable";
import { ColumnDef } from "@tanstack/react-table";

const columns = [
  {
    accessorKey: "firstName",
    header: "Image",
    cell: ({ row }) => {
      return (
        <div className="flex gap-2 items-center rounded-full">
          <img
            className="h-10 w-10 object-cover object-center rounded-full"
            src={`https://st3.depositphotos.com/9998432/13335/v/380/depositphotos_133351928-stock-illustration-default-placeholder-man-and-woman.jpg`}
            alt="user-image"
          />
          <p>{row.getValue("name")} </p>
        </div>
      );
    },
  },

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

const uesrSalesData = [
  {
    name: "Olivia Martin",
    email: "olivia.martin@email.com",
    saleAmount: "+$1,999.00",
  },
  {
    name: "Jackson Lee",
    email: "isabella.nguyen@email.com",
    saleAmount: "+$1,999.00",
  },
  {
    name: "Isabella Nguyen",
    email: "isabella.nguyen@email.com",
    saleAmount: "+$39.00",
  },
  {
    name: "William Kim",
    email: "will@email.com",
    saleAmount: "+$299.00",
  },
  {
    name: "Sofia Davis",
    email: "sofia.davis@email.com",
    saleAmount: "+$39.00",
  },
];

export default function UsersList({ users }) {
  return (
    <div>
      <PageTitle title="Users" />
      <DataTable columns={columns} data={users} />
    </div>
  );
}
