"use client";

import Link from "next/link";
import { Watch } from "lucide-react";

export default function Nav() {
  return (
    <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm shadow-sm z-50">
      <div className="container">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="p-2 bg-primary-600 rounded-lg group-hover:bg-primary-700 transition-colors">
              <Watch className="h-6 w-6 text-white" />
            </div>
            <span className="text-xl font-bold text-gray-900">Lume</span>
          </Link>
        </div>
      </div>
    </nav>
  );
}