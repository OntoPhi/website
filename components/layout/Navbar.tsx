"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Menu } from "lucide-react";

import Container from "@/components/ui/Container";
import MobileMenu from "./MobileMenu";
import { navigation } from "@/content/navigation";
import { useScroll } from "@/hooks/useScroll";

export default function Navbar() {
  const scrolled = useScroll();
  const [open, setOpen] = useState(false);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
          scrolled
            ? "border-b border-gray-200 bg-white/90 backdrop-blur-md shadow-sm"
            : "bg-transparent"
        }`}
      >
        <Container>
          <div className="flex h-20 items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center">
              <Image
                src="/logo/website_print.png"
                alt="OntoPhi"
                width={60}
                height={60}
                priority
                className="h-auto w-auto"
              />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden items-center gap-10 md:flex">
              {navigation.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-sm font-medium text-gray-700 transition-colors hover:text-black"
                >
                  {item.title}
                </Link>
              ))}
            </nav>

            {/* Mobile Button */}
            <button
              className="md:hidden"
              onClick={() => setOpen(true)}
              aria-label="Open menu"
            >
              <Menu size={28} />
            </button>
          </div>
        </Container>
      </header>

      <MobileMenu open={open} onClose={() => setOpen(false)} />
    </>
  );
}
