import Image from "next/image";
import Link from "next/link";

import Container from "@/components/ui/Container";
import { footerLinks } from "@/content/footer";

export default function Footer() {
  return (
    /* 
      FIXED SYSTEM: Synced background and bounding borders to slide fluidly 
      between pristine light and slate dark mode layouts on runtime clicks.
    */
    <footer className="border-t border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-950 py-16 transition-colors duration-300">
      <Container>
        <div className="grid gap-12 md:grid-cols-4">
          
          {/* Brand Identity Grid Section */}
          <div className="flex flex-col items-center gap-3 w-full text-center">
            {/* Logo Link with Dark Variant Handling */}
            <Link href="/" className="inline-block transition-transform duration-200 hover:scale-[1.02]">
              <Image
                src="/logo/website_print.png"
                alt="OntoPhi"
                width={90}
                height={30}
                priority
                className="h-auto w-auto object-contain dark:invert"
              />
            </Link>

            {/* Tagline text block sync */}
            <p className="text-[11px] font-semibold tracking-wider text-gray-700 dark:text-gray-400 uppercase leading-none">
              Understand • Discover • Engineer
            </p>
          </div>

          {/* Research Column Map */}
          <div>
            <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
              Research
            </h4>

            <div className="mt-4 space-y-2">
              {footerLinks.research.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="block text-gray-600 dark:text-gray-400 transition-colors hover:text-black dark:hover:text-white text-sm"
                >
                  {item.title}
                </Link>
              ))}
            </div>
          </div>

          {/* Company Column Map */}
          <div>
            <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
              Company
            </h4>

            <div className="mt-4 space-y-2">
              {footerLinks.company.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="block text-gray-600 dark:text-gray-400 transition-colors hover:text-black dark:hover:text-white text-sm"
                >
                  {item.title}
                </Link>
              ))}
            </div>
          </div>

          {/* Resources Column Map */}
          <div>
            <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
              Resources
            </h4>

            <div className="mt-4 space-y-2">
              {footerLinks.resources.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="block text-gray-600 dark:text-gray-400 transition-colors hover:text-black dark:hover:text-white text-sm"
                >
                  {item.title}
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar Matrix Layout */}
        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-gray-200 dark:border-gray-800 pt-8 text-sm text-gray-500 dark:text-gray-400 md:flex-row transition-colors duration-300">
          {/* Left Side Info */}
          <p>© 2026 OntoPhi. All rights reserved.</p>
       
          {/* Right-most Side Slogan */}
          <p className="font-medium italic tracking-wide text-gray-400 dark:text-gray-500 md:text-right">
            Science is Curiosity
          </p>
        </div>

      </Container>
    </footer>
  );
}

