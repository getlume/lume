"use client";

import Link from "next/link";
import Image from "next/image";

export default function Nav() {
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

          <div className="flex gap-4">
            {/* <Link href="/">
              <p className="text-base">About</p>
            </Link> */}

            <Link href="/">
              <p className="text-base">Contact us</p>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
