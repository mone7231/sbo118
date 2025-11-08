import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'SBO U88 - Premium Gaming Experience',
  description: 'Discover the hottest games and join thousands of players at SBO U88',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}