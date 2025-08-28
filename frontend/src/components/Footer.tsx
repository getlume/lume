import Link from "next/link";
import { Watch } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300">
      {/* Main Footer Content */}
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Brand Section */}
          <div>
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="p-2 bg-primary-600 rounded-lg">
                <Watch className="h-6 w-6 text-white" />
              </div>
              <span className="text-xl font-bold text-white">Lume</span>
            </Link>
            <p className="mb-4 text-sm">
              Premium Watch Insurance Platform
            </p>
          </div>

          {/* Contact Section */}
          <div className="text-right">
            <p className="text-sm text-gray-400">
              hello@getlume.co.uk
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="container py-6">
          <div className="text-center">
            <p className="text-sm">
              © {currentYear} Lume Insurance. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}