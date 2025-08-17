// app/layout.tsx
import './globals.css';
import Layout from './navBars/page';
import Step1 from './stepsInfo/step1';
import { Geist, Geist_Mono } from 'next/font/google';
import ClerkProviderWrapper from './providers/ClerkProviderWrapper';
import Step2 from './stepsInfo/step2';
import Step3 from './stepsInfo/step3';

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
          <Step1/>
          <Step2/>
          <Step3/>
          
        </ClerkProviderWrapper>
      </body>
    </html>
  );
}
