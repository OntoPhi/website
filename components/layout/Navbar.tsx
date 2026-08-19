"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

import Container from "@/components/ui/Container";
import ThemeToggle from "@/components/ui/ThemeToggle";
import { navigation } from "@/content/navigation";
import { useScroll } from "@/hooks/useScroll";

export default function Navbar() {
  const scrolled = useScroll();
  const [open, setOpen] = useState(false);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ease-in-out flex items-center ${
          scrolled
            ? "border-b border-gray-200 dark:border-gray-800 bg-white/95 dark:bg-gray-950/95 backdrop-blur-md shadow-sm h-16"
            : "bg-transparent h-20"
        }`}
      >
        {/* 
          FIXED LAYOUT: We use a standard structural <div> block container 
          with max-w constraints instead of forcing class variables inside 
          the Container component to guarantee 100% horizontal centering accuracy.
        */}
        <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between">
          
          {/* Logo with clean vertical row matching alignment */}
          <Link 
            href="/" 
            className="flex items-center transition-transform duration-200 hover:scale-[1.02] shrink-0"
          >
            <Image
              src="/logo/website_print.png"
              alt="OntoPhi Logo"
              width={48}
              height={48}
              priority
              className="h-10 w-auto object-contain dark:invert"
            />
          </Link>

          {/* Desktop Navigation Links Track */}
          <nav className="hidden items-center gap-6 lg:gap-8 md:flex">
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`relative text-xs lg:text-sm font-semibold tracking-tight py-1 transition-colors duration-200 after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:origin-bottom-right after:scale-x-0 after:bg-gray-900 dark:after:bg-white after:transition-transform after:duration-300 hover:after:origin-bottom-left hover:after:scale-x-100 ${
                  scrolled 
                    ? "text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white" 
                    : "text-gray-800 dark:text-gray-200 hover:text-black dark:hover:text-white"
                }`}
              >
                {item.title}
              </Link>
            ))}
            
            {/* Symmetrical divider strip connecting theme actions */}
            <div className="pl-4 h-5 border-l border-gray-200 dark:border-gray-800 flex items-center">
              <ThemeToggle />
            </div>
          </nav>

          {/* Handheld Device Adaptive Interface Segment */}
          <div className="flex items-center gap-4 md:hidden">
            <ThemeToggle />
            
            <button
              className={`p-2 rounded-lg transition-colors focus:outline-none ${
                scrolled 
                  ? "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-900" 
                  : "text-gray-900 dark:text-gray-100 hover:bg-white/10"
              }`}
              onClick={() => setOpen(!open)}
              aria-label="Toggle menu"
            >
              {open ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

        </div>
      </header>

      {/* Mobile Responsive Navigation Panel Overlay */}
      {open && (
        <div className="fixed inset-x-0 top-16 z-40 md:hidden bg-white dark:bg-gray-950 border-b border-b-gray-200 dark:border-b-gray-800 px-6 py-6 space-y-4 shadow-xl animate-in fade-in slide-in-from-top-5 duration-200">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="block text-sm font-semibold tracking-wider text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
            >
              {item.title}
            </Link>
          ))}
        </div>
      )}
    </>
  );
}

