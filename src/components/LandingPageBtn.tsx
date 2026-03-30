'use client';

import { Home } from 'lucide-react';
import Link from 'next/link';

export default function LandingPageBtn() {
  return (
    <Link
      href="/"
      className="fixed bottom-26 right-8 bg-blue-500 hover:bg-blue-600 text-white p-4 rounded-full shadow-lg transition-all duration-300 hover:scale-110 z-50"
      aria-label="Go to Landing Page"
    >
      <Home className="w-6 h-6" />
    </Link>
  );
}
