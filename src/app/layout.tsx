import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

export const metadata: Metadata = {
    title: 'Sadikh | Machine Learning Engineer',
    description: 'Portfolio of Sadikh — Machine Learning Engineer building agentic systems, ML research, and delightful AI products.',
    keywords: ['Sadikh', 'Machine Learning Engineer', 'AI', 'LangGraph', 'LangChain', 'LLM', 'Portfolio'],
    openGraph: {
        title: 'Sadikh | Machine Learning Engineer',
        description: 'Building agentic systems, ML research, and delightful AI products.',
        url: 'https://your-domain.com',
        siteName: 'Sadikh',
        locale: 'en_US',
        type: 'website',
    },
    metadataBase: new URL('https://your-domain.com'),
};

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <body className={inter.className}>{children}</body>
        </html>
    );
}


