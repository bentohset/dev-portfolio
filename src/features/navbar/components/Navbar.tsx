"use client";

import React from 'react'
import Image from "next/image";
import Link from "next/link";
import { Disclosure } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import ThemeToggle from './ThemeToggle';
import { navigation } from '@/lib/data';

export function Navbar() {
  const path = usePathname();
  return (
    <Disclosure
      as="nav"
      className="sticky top-0 z-30 backdrop-blur-md"
    >
      {({ open }) => (
        <>
          <div className="px-24">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-unifyPrimary focus:outline-none focus:ring-0">
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block size-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block size-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              {/* desktop menu button */}
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-between">
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
                  <div className="flex space-x-4 text-sm font-medium dark:text-zinc-200">
                    {navigation.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        className={cn(
                          path === item.href
                            ? "text-devPrimary"
                            : "hover:text-devPrimary",
                          "rounded-md px-3 py-2 text-sm ",
                        )}
                        aria-current={path === item.href ? "page" : undefined}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>

                <div className="flex shrink-0 items-center justify-center">
                  <ThemeToggle />
                </div>

              </div>
            </div>
          </div>

          {/* Mobile view */}
          <Disclosure.Panel className="sm:hidden border-b-2">
            <div className="space-y-1 px-2 pb-3 pt-2">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as={Link}
                  href={item.href}
                  className={cn(
                    path === item.href
                      ? "bg-cover brightness-125 bg-center text-white"
                      : "text-black hover:bg-unifyTertiary hover:text-white",
                    "block rounded-md px-3 py-2 text-base font-medium",
                  )}
                  style={{
                    backgroundImage:
                      path === item.href
                        ? `url(/bg/primary-small-compressed.png)`
                        : "",
                  }}
                  aria-current={path === item.href ? "page" : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
              <Disclosure.Button
                as={Link}
                href="get-started"
                className={cn(
                  path === "/get-started"
                    ? "bg-cover brightness-125 bg-center text-white"
                    : "text-black hover:bg-unifyTertiary hover:text-white",
                  "block rounded-md px-3 py-2 text-base font-medium",
                )}
                style={{
                  backgroundImage:
                    path === "/get-started"
                      ? `url(/bg/primary-small-compressed.png)`
                      : "",
                }}
                aria-current={path === "/get-started" ? "page" : undefined}
              >
                Get Started
              </Disclosure.Button>
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}

export default Navbar