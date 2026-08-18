"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

import Container from "@/components/ui/Container";
import { navigation } from "@/content/navigation";
import { useScroll } from "@/hooks/useScroll";

export default function Navbar() {
  const scrolled = useScroll();
  const [open, setOpen] = useState(false);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ease-in-out ${
          scrolled
            ? "border-b border-gray-200 bg-white/95 backdrop-blur-md shadow-sm h-16"
            : "bg-transparent h-20"
        }`}
      >
        <Container className="h-full">
          <div className="flex h-full items-center justify-between">
            {/* Logo */}
            <Link 
              href="/" 
              className="flex items-center transition-transform duration-200 hover:scale-[1.02]"
            >
              <Image
                src="/logo/website_print.png"
                alt="OntoPhi Logo"
                width={48}
                height={48}
                priority
                className="h-10 w-auto object-contain"
              />
            </Link>

            {/* Desktop Navigation Row (All 7 links rendered symmetrically) */}
            <nav className="hidden items-center gap-6 lg:gap-8 md:flex">
              {navigation.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`relative text-xs lg:text-sm font-medium tracking-tight py-1 transition-colors duration-200 after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:origin-bottom-right after:scale-x-0 after:bg-gray-900 after:transition-transform after:duration-300 hover:after:origin-bottom-left hover:after:scale-x-100 ${
                    scrolled 
                      ? "text-gray-600 hover:text-gray-900" 
                      : "text-gray-800 hover:text-black"
                  }`}
                >
                  {item.title}
                </Link>
              ))}
            </nav>

            {/* Mobile Menu Toggle Button */}
            <button
              className={`p-2 rounded-lg transition-colors md:hidden focus:outline-none ${
                scrolled ? "text-gray-700 hover:bg-gray-100" : "text-gray-900 hover:bg-white/10"
              }`}
              onClick={() => setOpen(!open)}
              aria-label="Toggle menu"
            >
              {open ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </Container>
      </header>

      {/* Synchronized Mobile Dropdown Drawer */}
      {open && (
        <div className="fixed inset-x-0 top-16 z-40 md:hidden bg-white border-b border-gray-200 px-6 py-6 space-y-4 shadow-xl animate-in fade-in slide-in-from-top-5 duration-200">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="block text-sm font-semibold tracking-wider text-gray-700 hover:text-gray-900"
            >
              {item.title}
            </Link>
          ))}
        </div>
      )}
    </>
  );
}

