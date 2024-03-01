"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Disclosure } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { usePathname } from "next/navigation";

import { cn } from "@/lib/utils";
import ThemeToggle from "./ThemeToggle";
import { navigation } from "@/lib/data";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";

export function Navbar() {
  const path = usePathname();
  return (
    <nav className="sticky top-0 z-50">
        <>
          <div className="md:px-24 px-8">
            <div className="flex flex-rw h-16 items-center justify-between">
              
              {/* desktop menu button */}
              <div className="flex flex-1 items-center justify-between">
                <div className="flex shrink-0 items-center justify-center">
                  <Link href="/">
                    <Image
                      priority
                      src="/icons/profile-pic.png"
                      alt="pfp"
                      width={35}
                      height={35}
                    />
                  </Link>
                </div>
                <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
                  <div className="flex items-center space-x-4 font-medium rounded-full bg-white px-3 text-zinc-800 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:bg-zinc-800 dark:text-zinc-200 dark:ring-white/10">
                    {navigation.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        className={cn(
                          path === item.href
                            ? "text-devPrimary"
                            : "hover:text-devPrimary",
                          "rounded-md px-3 py-2 text-sm"
                        )}
                        aria-current={path === item.href ? "page" : undefined}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>
                
                <section className="flex flex-row gap-x-4">
                  <div className="flex items-center sm:hidden">
                    <Dialog>
                      <DialogTrigger asChild>
                        <button className="rounded-full bg-white px-3 py-2 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 transition dark:bg-zinc-800 dark:ring-white/10 dark:hover:ring-white/20">
                          <Menu
                            size={20}
                            className="block dark:text-zinc-200 text-zinc-400 "
                            aria-hidden="true"
                          />
                        </button>
                      </DialogTrigger>
                      <DialogContent className="rounded-2xl w-5/6 h-fit top-44">
                        <DialogHeader>
                          <DialogDescription>
                            <div className="flex flex-col w-full text-left justify-center items-center space-y-2 font-medium text-zinc-800 dark:divide-zinc-100/5 dark:text-zinc-300">
                              {navigation.map((item) => (
                                <Link
                                  key={item.name}
                                  href={item.href}
                                  className={cn(
                                    path === item.href
                                      ? "text-devPrimary"
                                      : "hover:text-devPrimary",
                                    "rounded-md px-3 py-2 text-md w-full self-center"
                                  )}
                                  aria-current={
                                    path === item.href ? "page" : undefined
                                  }
                                >
                                  {item.name}
                                </Link>
                              ))}
                            </div>
                          </DialogDescription>
                        </DialogHeader>
                      </DialogContent>
                    </Dialog>
                  </div>
                  <div className="flex shrink-0 items-center justify-center">
                    <ThemeToggle />
                  </div>
                </section>
              </div>
            </div>
          </div>
        </>
    </nav>
  );
}

export default Navbar;
