import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.css';

export const metadata: Metadata = {
  title: 'Clever Photos',
  description: 'Clever Photos is a photo sharing platform',
};

const helvetica = localFont({
  src: [
    {
      path: '../../public/fonts/Helvetica-Bold.ttf',
      weight: '700',
      style: 'bold',
    },
    {
      path: '../../public/fonts/Helvetica.ttf',
      weight: '400',
      style: 'normal',
    },
  ],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${helvetica.className} antialiased`}>{children}</body>
    </html>
  );
}
