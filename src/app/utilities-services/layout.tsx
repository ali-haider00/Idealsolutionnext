'use client';

import { ThemeProvider } from '@/context/ThemeContext';
import ThemeToggle from '@/components/ui/ThemeToggle';
import WhatsAppButton from '@/components/WhatsappBtn';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import LandingPageBtn from '@/components/LandingPageBtn';

export default function UtilitiesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ThemeProvider>
      <div className="min-h-screen">
        {/* Existing Utilities Navbar */}
        <Navbar />
        <LandingPageBtn />
        <ThemeToggle />
        <WhatsAppButton />

        {/* Main Content */}
        <main className="flex-grow">
          {children}
        </main>

        {/* Existing Utilities Footer */}
        <Footer />
      </div>
    </ThemeProvider>
  );
}
