"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const primaryFooterNavItems = [
  { href: "/how-it-works", label: "How it works" },
  { href: "/faq", label: "FAQs" },
  { href: "/testimonials", label: "Testimonials" },
  { href: "/about-us", label: "About us" },
  { href: "mailto:alex@withfarra.com", label: "Contact us" },
];

const secondaryFooterNavItems = [
  { href: "/terms", label: "Terms" },
  { href: "/accessibility", label: "Accessibility" },
  { href: "/cookie-policy", label: "Cookie policy" },
  { href: "/privacy-policy", label: "Privacy policy" },
];

export default function Footer() {
  const pathname = usePathname();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#1E2A33] text-gray-300">
      <div className="container pt-12 pb-20">
        <div className="">
          <div>
            <Link href="/" className="flex items-center gap-2 mb-4">
              <Image
                src="/images/logo/long-url-logo.png"
                alt="Lume Logo"
                width={200}
                height={30}
                className="text-white"
              />

              <span className="hidden">Lume</span>
            </Link>

            <p className="mb-10 text-sm max-w-[600px]">
              Lume is a modern insurance platform for watch lovers. Built for
              simplicity, speed, and trust — we help you protect what matters
              most.
            </p>
          </div>

          <div className="flex gap-10 md:gap-20 mb-14">
            <ul className="flex flex-col gap-3 text-xs">
              {primaryFooterNavItems.map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className={`hover:text-[var(--foreground)] transition ${
                      pathname === href
                        ? "text-[var(--foreground)] font-semibold"
                        : ""
                    }`}
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>

            <ul className="flex flex-col gap-3 text-xs">
              {secondaryFooterNavItems.map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className={`hover:text-[var(--foreground)] transition ${
                      pathname === href
                        ? "text-[var(--foreground)] font-semibold"
                        : ""
                    }`}
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <p className="text-xs">
            © {currentYear} Lume Insurance. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
