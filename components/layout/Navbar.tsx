"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

import ThemeToggle from "@/components/ui/ThemeToggle";
import { navigation } from "@/content/navigation";
import { useScroll } from "@/hooks/useScroll";

export default function Navbar() {
  const scrolled = useScroll();
  const [open, setOpen] = useState(false);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 flex items-center transition-all duration-300 ease-in-out ${
          scrolled
            ? "h-16 border-b border-gray-200 bg-white/95 shadow-sm backdrop-blur-md dark:border-gray-800 dark:bg-gray-950/95"
            : "h-20 bg-transparent"
        }`}
      >
        <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 sm:px-6">
          {/* Logo */}
	  <Link
            href="/"
            className="flex shrink-0 items-center transition-transform duration-200 hover:scale-[1.02]"
          >
            <Image
              src="/logo/website_print.png"
              alt="OntoPhi Logo"
              width={80}
              height={80}
              priority
              sizes="60px"
              className="h-12 w-auto object-contain dark:invert"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden items-center gap-5 md:flex lg:gap-7">
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`relative py-1 text-xs font-semibold tracking-tight transition-colors duration-200 after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:origin-bottom-right after:scale-x-0 after:bg-gray-900 after:transition-transform after:duration-300 hover:after:origin-bottom-left hover:after:scale-x-100 dark:after:bg-white lg:text-sm ${
                  scrolled
                    ? "text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
                    : "text-gray-800 hover:text-black dark:text-gray-200 dark:hover:text-white"
                }`}
              >
                {item.title}
              </Link>
            ))}

            {/* Join Waitlist */}
            <Link
              href="/waitlist"
              className={`rounded-full border px-4 py-2 text-xs font-semibold transition-all duration-200 lg:text-sm ${
                scrolled
                  ? "border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white dark:border-gray-300 dark:text-gray-200 dark:hover:bg-white dark:hover:text-gray-900"
                  : "border-gray-800 text-gray-900 hover:bg-gray-900 hover:text-white dark:border-gray-300 dark:text-white dark:hover:bg-white dark:hover:text-gray-900"
              }`}
            >
              Join Waitlist
            </Link>

            {/* Theme Toggle */}
            <div className="flex h-5 items-center border-l border-gray-200 pl-4 dark:border-gray-800">
              <ThemeToggle />
            </div>
          </nav>

          {/* Mobile Controls */}
          <div className="flex items-center gap-4 md:hidden">
            <ThemeToggle />

            <button
              className={`rounded-lg p-2 transition-colors focus:outline-none ${
                scrolled
                  ? "text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-900"
                  : "text-gray-900 hover:bg-white/10 dark:text-gray-100"
              }`}
              onClick={() => setOpen(!open)}
              aria-label="Toggle menu"
              aria-expanded={open}
            >
              {open ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Navigation */}
      {open && (
        <div className="fixed inset-x-0 top-16 z-40 space-y-4 border-b border-gray-200 bg-white px-6 py-6 shadow-xl dark:border-gray-800 dark:bg-gray-950 md:hidden">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="block text-sm font-semibold tracking-wider text-gray-700 transition-colors hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
            >
              {item.title}
            </Link>
          ))}

          {/* Mobile Join Waitlist */}
          <Link
            href="/waitlist"
            onClick={() => setOpen(false)}
            className="block w-full rounded-full border border-gray-900 px-5 py-3 text-center text-sm font-semibold text-gray-900 transition-colors hover:bg-gray-900 hover:!text-white dark:border-gray-300 dark:text-gray-200 dark:hover:bg-white dark:hover:!text-gray-950"
          >
            Join Waitlist
          </Link>
        </div>
      )}
    </>
  );
}
