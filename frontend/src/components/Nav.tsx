"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const links = [
  { href: "/coming-soon", label: "About" },
  { href: "mailto:hello@getlume.co.uk", label: "Contact us" },
];

export default function Nav() {
  const pathname = usePathname();

  return (
    <nav className="w-full">
      <div className="container">
        <div className="flex justify-between items-center h-32">
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
            {links.map(({ href, label }) => (
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
      </div>
    </nav>
  );
}
