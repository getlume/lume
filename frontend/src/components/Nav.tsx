"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X, Watch, Shield, ChevronDown } from "lucide-react";

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const navLinks = [
    { href: "/coverage", label: "Coverage" },
    { href: "/claims", label: "Claims" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
  ];

  const coverageOptions = [
    { href: "/coverage/luxury", label: "Luxury Watches" },
    { href: "/coverage/vintage", label: "Vintage Collections" },
    { href: "/coverage/sports", label: "Sports Watches" },
    { href: "/coverage/smart", label: "Smart Watches" },
  ];

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

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <div className="relative">
              <button
                onClick={() => setDropdownOpen(!dropdownOpen)}
                className="flex items-center gap-1 text-gray-700 hover:text-primary-600 transition-colors"
              >
                Coverage
                <ChevronDown className="h-4 w-4" />
              </button>
              
              {dropdownOpen && (
                <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-lg py-2">
                  {coverageOptions.map((option) => (
                    <Link
                      key={option.href}
                      href={option.href}
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-primary-50 hover:text-primary-600"
                      onClick={() => setDropdownOpen(false)}
                    >
                      {option.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {navLinks.slice(1).map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-gray-700 hover:text-primary-600 transition-colors"
              >
                {link.label}
              </Link>
            ))}

            <Link
              href="/quote"
              className="btn-primary"
            >
              <Shield className="h-4 w-4" />
              Get Quote
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2"
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <X className="h-6 w-6 text-gray-700" />
            ) : (
              <Menu className="h-6 w-6 text-gray-700" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block py-2 text-gray-700 hover:text-primary-600"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/quote"
              className="btn-primary mt-4 w-full justify-center"
              onClick={() => setIsOpen(false)}
            >
              <Shield className="h-4 w-4" />
              Get Quote
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}