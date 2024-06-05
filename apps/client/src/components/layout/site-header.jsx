"use client";
import Link from "next/link";

import { DashboardIcon, ExitIcon, GearIcon } from "@radix-ui/react-icons";

// import { dashboardConfig } from "@/config/dashboard";
// import { siteConfig } from "@/config/site";
// import { getUserEmail } from "@/lib/utils";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@app/client/components/ui/avatar";
import { Button } from "@app/client/components/ui/button";
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
// import { CartSheet } from "@app/client/components/checkout/cart-sheet";
// import { Icons } from "@app/client/components/icons";
// import { MainNav } from "./main-nav";
import { CartSheet } from "./cart-sheet";
import Cart from "../global/cart";
import useMutation from "@app/client/hooks/use-mutation";
// import { MobileNav } from "./mobile-nav";
// import { MainNav } from "@app/client/components/layouts/main-nav";
// import { MobileNav } from "@app/client/components/layouts/mobile-nav";
// import { ProductsCommandMenu } from "@app/client/components/products-command-menu";
// import { CartSheet } from "./cart-sheet";
import { logout } from "@app/client/data/auth";
import { MainNav } from "./main-nav";

export function SiteHeader({ user }) {
  const initials = `${user?.firstName?.charAt(0) ?? ""} ${
    user?.lastName?.charAt(0) ?? ""
  }`;
  // const email = getUserEmail(user);
  const { startMutation } = useMutation();

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background">
      <div className="container flex h-16 items-center">
        <MainNav />
        {/* <MobileNav
          mainNavItems={siteConfig.mainNav}
          sidebarNavItems={dashboardConfig.sidebarNav}
        /> */}
        <div className="flex flex-1 items-center justify-end space-x-4">
          <nav className="flex items-center space-x-4 ">
            {/* <ProductsCommandMenu /> */}
            <Cart />
            {user ? (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="secondary"
                    className="relative size-8 rounded-full"
                  >
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
                  <DropdownMenuGroup>
                    <DropdownMenuItem asChild>
                      <Link href="/profile">
                        <DashboardIcon
                          className="mr-2 size-4 py-4"
                          aria-hidden="true"
                        />
                        Profile
                        <DropdownMenuShortcut>⌘D</DropdownMenuShortcut>
                      </Link>
                    </DropdownMenuItem>
                  </DropdownMenuGroup>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem asChild>
                    <Button
                      className="w-full flex items-center justify-start px-3"
                      onClick={() => {
                        startMutation(async () => {
                          await logout();
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
            ) : (
              <Button size="sm">
                <Link href="/signin">
                  Sign In
                  <span className="sr-only">Sign In</span>
                </Link>
              </Button>
            )}
          </nav>
        </div>
      </div>
    </header>
  );
}
