import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'M&M Events',
  description: 'Luxury event planning for weddings, baby showers, graduations, birthdays, and corporate events.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
