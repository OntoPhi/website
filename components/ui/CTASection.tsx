import Link from "next/link";
import { ArrowRight } from "lucide-react";

import Container from "./Container";

interface CTASectionProps {
  title: string;
  description: string;
  primaryText: string;
  primaryHref: string;
  secondaryText?: string;
  secondaryHref?: string;
}

export default function CTASection({
  title,
  description,
  primaryText,
  primaryHref,
  secondaryText,
  secondaryHref,
}: CTASectionProps) {
  return (
    <section className="py-24">
      <Container>
        <div className="rounded-3xl bg-black px-8 py-20 text-center md:px-16">
          <h2 className="text-4xl font-bold tracking-tight text-white md:text-5xl">
            {title}
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-gray-300">
            {description}
          </p>

          <div className="mt-12 flex flex-col items-center justify-center gap-5 sm:flex-row">
            <Link
              href={primaryHref}
              className="inline-flex h-14 items-center justify-center rounded-full bg-white px-9 text-base font-medium text-black transition-colors duration-200 hover:bg-gray-200"
            >
              <span>{primaryText}</span>
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>

            {secondaryText && secondaryHref && (
              <Link
                href={secondaryHref}
                className="inline-flex h-14 items-center justify-center rounded-full border border-white px-9 text-base font-medium text-white transition-colors duration-200 hover:bg-white hover:text-black"
              >
                <span>{secondaryText}</span>
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            )}
          </div>
        </div>
      </Container>
    </section>
  );
}
