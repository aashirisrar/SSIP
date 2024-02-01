"use client";

import * as React from "react";
import Link from "next/link";

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { ModeToggle } from "./mode-toggle";

export function MainNavigationMenu() {
  return (
    <header className="sticky top-0 z-50 w-full mt-4 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container1 flex h-20 max-w-screen-2xl items-center">
        <Link className="mr-6 flex items-center space-x-2" href="/">
          <span className="text-3xl">🍕</span>
          <span className="hidden text-2xl font-bold sm:inline-block">
            PRIZZA
          </span>
        </Link>

        <div className="flex  flex-1 items-center justify-between space-x-2 md:justify-end">
          <nav className="flex items-center gap-6">
            <nav>
              <NavigationMenu>
                <NavigationMenuList>
                  <NavigationMenuItem>
                    <Link href="/" legacyBehavior passHref>
                      <NavigationMenuLink
                        className={navigationMenuTriggerStyle()}
                      >
                        Home
                      </NavigationMenuLink>
                    </Link>
                  </NavigationMenuItem>
                  <NavigationMenuItem>
                    <Link href="/menu" legacyBehavior passHref>
                      <NavigationMenuLink
                        className={navigationMenuTriggerStyle()}
                      >
                        Menu
                      </NavigationMenuLink>
                    </Link>
                  </NavigationMenuItem>
                  <NavigationMenuItem>
                    <Link href="/order" legacyBehavior passHref>
                      <NavigationMenuLink
                        className={navigationMenuTriggerStyle()}
                      >
                        Order
                      </NavigationMenuLink>
                    </Link>
                  </NavigationMenuItem>
                  <NavigationMenuItem>
                    <Link href="/about" legacyBehavior passHref>
                      <NavigationMenuLink
                        className={navigationMenuTriggerStyle()}
                      >
                        About
                      </NavigationMenuLink>
                    </Link>
                  </NavigationMenuItem>
                  <NavigationMenuItem>
                    <Link
                      href="api/auth/signin"
                      className="group ml-1 w-max h-10 items-center justify-center inline-flex bg-[#D72E3B] hover:bg-[#bc2c38] transition-colors py-2 px-4 mr-2 text-white text-md font-medium rounded-[6px]"
                    >
                      Login
                    </Link>
                  </NavigationMenuItem>
                </NavigationMenuList>
              </NavigationMenu>
            </nav>
            <ModeToggle />
          </nav>
        </div>
      </div>
    </header>
  );
}
