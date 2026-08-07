import Image from "next/image";
import Link from "next/link";

import Container from "@/components/ui/Container";
import { footerLinks } from "@/content/footer";

export default function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-white py-16">
      <Container>
        <div className="grid gap-12 md:grid-cols-4">
          {/* Brand */}
          <div className="flex flex-col items-center gap-3 w-full text-center">
            {/* Logo Link */}
            <Link href="/" className="inline-block">
              <Image
                src="/logo/website_print.png"
                alt="OntoPhi"
                width={90}
                height={30}
                priority
                className="h-auto w-auto object-contain"
              />
            </Link>

            {/* Tagline */}
            <p className="text-[11px] font-semibold tracking-wider text-gray-700 uppercase leading-none">
            Understand • Discover • Engineer
            </p>
          </div>

          {/* Research */}
          <div>
            <h4 className="text-lg font-semibold text-gray-900">
              Research
            </h4>

            <div className="mt-4 space-y-2">
              {footerLinks.research.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="block text-gray-600 transition-colors hover:text-black"
                >
                  {item.title}
                </Link>
              ))}
            </div>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-lg font-semibold text-gray-900">
              Company
            </h4>

            <div className="mt-4 space-y-2">
              {footerLinks.company.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="block text-gray-600 transition-colors hover:text-black"
                >
                  {item.title}
                </Link>
              ))}
            </div>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-lg font-semibold text-gray-900">
              Resources
            </h4>

            <div className="mt-4 space-y-2">
              {footerLinks.resources.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="block text-gray-600 transition-colors hover:text-black"
                >
                  {item.title}
                </Link>
              ))}
            </div>
          </div>
        </div>

       {/* Bottom Bar */}
       <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-gray-200 pt-8 text-sm text-gray-500 md:flex-row">
         {/* Left Side */}
         <p>© 2026 OntoPhi. All rights reserved.</p>
       
         {/* Right-most Side (No period for a cleaner design) */}
         <p className="font-medium italic tracking-wide text-gray-400 md:text-right">
           Science is Curiosity
         </p>
       </div>

      </Container>
    </footer>
  );
}
