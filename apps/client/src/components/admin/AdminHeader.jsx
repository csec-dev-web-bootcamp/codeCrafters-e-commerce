"use client";

import React from "react";
import PageTitle from "../PageTitle";

import { DashboardIcon, ExitIcon, GearIcon } from "@radix-ui/react-icons";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from "@app/client/components/ui/dropdown-menu";
import { Button } from "../ui/button";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@app/client/components/ui/avatar";
import Link from "next/link";
import { logout } from "@app/client/data/auth";
import useMutation from "@app/client/hooks/use-mutation";

export default function AdminHeader({ user }) {
  const initials = `${user?.firstName?.charAt(0) ?? ""} ${
    user?.lastName?.charAt(0) ?? ""
  }`;
  const { startMutation } = useMutation();
  return (
    <div className="flex items-center justify-between">
      <PageTitle title="Dashboard" />
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="secondary" className="relative size-8 rounded-full">
            <Avatar className="size-10 border">
              <AvatarImage
                src="/https://png.pngtree.com/png-vector/20210604/ourmid/pngtree-gray-avatar-placeholder-png-image_3416697.jpg  "
                // alt={user.username ?? ""}
              />
              <AvatarFallback>{initials}</AvatarFallback>
            </Avatar>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-56" align="end" forceMount>
          <DropdownMenuLabel className="font-normal">
            <div className="flex flex-col space-y-1">
              <p className="text-md font-bold leading-none">
                {user.firstName} {user.lastName}
              </p>
              <p className="text-xs leading-none text-muted-foreground">
                {user.email}
              </p>
            </div>
          </DropdownMenuLabel>
          <DropdownMenuSeparator />
          {/* <DropdownMenuGroup>
            <DropdownMenuItem asChild>
              <Link href="/dashboard/stores">
                <DashboardIcon
                  className="mr-2 size-4 py-4"
                  aria-hidden="true"
                />
                Profile
                <DropdownMenuShortcut>⌘D</DropdownMenuShortcut>
              </Link>
            </DropdownMenuItem>
          </DropdownMenuGroup> */}
          <DropdownMenuSeparator />
          <DropdownMenuItem asChild>
            <Button
              className="w-full flex items-center justify-start px-3"
              onClick={() => {
                startMutation(async () => {
                  await logout();
                  window.location.href = "/";
                });
              }}
            >
              <ExitIcon className="mr-2 size-4" aria-hidden="true" />
              Log out
            </Button>
            {/* <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut> */}
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
