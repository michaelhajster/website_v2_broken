import { GeistSans } from 'geist/font/sans';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="de" suppressHydrationWarning>
      <body className={`${GeistSans.className} antialiased min-h-screen flex flex-col`}>
        <Header />
        <div className="pt-16 flex-grow">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
