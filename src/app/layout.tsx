import type { Metadata } from 'next';
import './globals.css';
import { portfolioData } from '../data/portfolioData';

export const viewport = {
  width: 'device-width',
  initialScale: 1.0,
};

export const metadata: Metadata = {
  title: `${portfolioData.fullName} | Portfolio`,
  description: `${portfolioData.fullName} - ${portfolioData.title}. AI/ML engineer working across the modern AI stack, from LLMs, RAG, and agentic systems to generative AI, NLP, computer vision, and diffusion models.`,
  keywords: ['AI', 'ML', 'Machine Learning', 'LLM', 'RAG', 'Agentic AI', 'Full Stack', 'BUET', 'Python', 'Next.js'],
  authors: [{ name: portfolioData.fullName }],
  openGraph: {
    title: `${portfolioData.fullName} | Portfolio`,
    description: `Portfolio of ${portfolioData.fullName} - AI/ML Engineer.`,
    url: portfolioData.linkedin,
    siteName: `${portfolioData.fullName} Portfolio`,
    locale: 'en_US',
    type: 'website',
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* FontAwesome Icons CDN */}
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css"
          integrity="sha512-1ycn6IcaQQ40/MKBW2W4Rhis/DbILU74C1vSrLJxCq57o941Ym01SwNsOMqvEBFlcgUa6xLiPY/NS5R+E6ztJQ=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
