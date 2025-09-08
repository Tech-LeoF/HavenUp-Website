// app/layout.tsx
import './globals.css';
import Layout from './navBars/page';
import { Geist, Geist_Mono } from 'next/font/google';
import ClerkProviderWrapper from './providers/ClerkProviderWrapper';
import Pie from './footer/page';
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";


const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});
const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <head>
        <link rel="icon" href="/Imgs/logo-rounded.png" key="favicon" />
        <title>HavenUp!</title>
    <link
      href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&display=swap"
      rel="stylesheet"
      />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased">
        <ClerkProviderWrapper>
          <Layout>
            {children}
          </Layout>
        <Pie/>
        </ClerkProviderWrapper>
      </body>
    </html>
  );
}
