"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const links = [
  { href: "/coming-soon", label: "Stolen-Watch Database" },
  { href: "/coming-soon", label: "About us" },
  // { href: "mailto:hello@getlume.co.uk", label: "Contact us" },
];

export default function Nav() {
  const pathname = usePathname();

  return (
    <nav className="w-full">
      <div className="container">
        <div className="flex justify-between items-center h-24 md:h-32">
          <Link href="/">
            <Image
              src="/images/logo/wordmark.png"
              alt="Lume Logo"
              width={85}
              height={30}
            />
            <span className="hidden">Lume</span>
          </Link>

          <ul className="flex gap-5 text-sm">
            {links.map(({ href, label }, index) => (
              <li className="hidden md:flex" key={index}>
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

            <li>
              <Link
                href="/coming-soon"
                className="font-bold px-4 py-2 bg-primary border-primary-600 border-[3px] text-neutral-900 rounded-full hover:bg-primary-700 transition-colors duration-200"
              >
                Get a Quote
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
