"use client";

import Link from "next/link";
import { X } from "lucide-react";
import { navigation } from "@/content/navigation";

interface MobileMenuProps {
  open: boolean;
  onClose: () => void;
}

export default function MobileMenu({
  open,
  onClose,
}: MobileMenuProps) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 bg-white">
      <div className="flex items-center justify-between border-b px-6 py-5">
        <h2 className="text-xl font-bold">Menu</h2>

        <button onClick={onClose}>
          <X size={28} />
        </button>
      </div>

      <nav className="flex flex-col px-6 py-8">
        {navigation.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            onClick={onClose}
            className="border-b py-5 text-lg hover:text-black"
          >
            {item.title}
          </Link>
        ))}
      </nav>
    </div>
  );
}
