import type { Metadata } from 'next';
import './globals.css';
import { StudioProvider } from '@/components/layout/StudioContext';

export const metadata: Metadata = {
  title: "Chiquita's Moments | Timeless Family & Vintage Portrait Studio",
  description:
    'Heirloom photography crafted to last generations. Limited Time Event: 12×18 Family Portrait in Color or Antique finish for $19.95.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,500;0,600;0,700;0,800;1,400;1,600&family=Plus+Jakarta+Sans:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-screen bg-[#FBF9F5] text-[#231F20] font-sans antialiased selection:bg-[#C5A059]/25 selection:text-[#231F20]">
        <StudioProvider>{children}</StudioProvider>
      </body>
    </html>
  );
}
