import type { Metadata } from "next";
import { Prompt } from 'next/font/google'
import { Aside } from "../components/Aside/index";
import './globals.css'
import '@/components/Aside'

const prompt = Prompt({
  weight: ['400', '600'],
  subsets: ['latin'],
  display: 'swap'
})

export const metadata: Metadata = {
  title: "NextJS App",
  description: "NextJS App to Study",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={prompt.className}>
      <body>
        <div className="app-container">
          <div>
            <Aside />
          </div>
          <div className='main-content'>
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
