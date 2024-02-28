import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.scss';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import QueryProvider from '@/lib/store/query-provider';
import GoogleAnalytics from '@/components/GoogleAnalytics';
import { Providers } from './providers';

// import { GoogleAnalytics } from '@next/third-parties/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: {
    default: "Academic Jobs the worlds' number 1 job board", //Default if nothing is set
    template: '%s | Academic Jobs', //If the title is set on the page the %s will be replaced with the title
  },
  description: "Academic Jobs the worlds' number 1 job board",
  icons: {
    icon: '/favicon.png',
  },
  robots: {
    index: true,
    googleBot: {
      index: true,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-white`}>
        <QueryProvider>
          <Providers>
            <Header />
            {children}
            <div className="spacer">&nbsp;</div>
            <Footer />
          </Providers>
        </QueryProvider>
      </body>
      <GoogleAnalytics />
    </html>
  );
}
